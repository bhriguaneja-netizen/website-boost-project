import os
import re
import google.generativeai as genai
from datetime import datetime
import sys

# Configure Gemini
# Load from environment variable or direct string if needed
API_KEY = os.environ.get("GOOGLE_API_KEY") or "AIzaSyBVwAm3buYZ-2qe2TZsSH00if1em9PUBqw"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-2.0-flash')

TEMPLATE_PATH = "/Users/bhrigu/Workspace/Projects/xodataco-website/public/Proposal.html"
OUTPUT_DIR = "/Users/bhrigu/Workspace/Projects/xodataco-website/proposals"

def generate_opportunity_map(company_name):
    """
    Uses Gemini to generate 3 specific opportunity map items for the company.
    """
    prompt = f"""
    Act as a Senior AI Strategist at XO Data Co. 
    Research or brainstorm 3 high-impact Agentic AI or Data Architecture opportunities for {company_name}.
    
    For each opportunity, provide:
    1. A short Category Label (e.g., Supply Chain, Customer Ops, Internal Knowledge).
    2. A transition state: "From [Current Manual/Inefficient State] -> [Autonomous/AI-Powered State]".
    3. A 1-sentence description of the solution.

    Return the result in this EXACT format for each:
    ---ITEM---
    CATEGORY: [Category]
    TRANSITION: [From State] -> [To State]
    DESC: [Description]
    """
    
    try:
        response = model.generate_content(prompt)
        content = response.text
        
        items = []
        raw_items = content.split("---ITEM---")[1:] # Skip preamble
        for raw in raw_items:
            lines = raw.strip().split("\n")
            item = {}
            for line in lines:
                if line.startswith("CATEGORY:"): item['category'] = line.replace("CATEGORY:", "").strip()
                if line.startswith("TRANSITION:"): item['transition'] = line.replace("TRANSITION:", "").strip()
                if line.startswith("DESC:"): item['desc'] = line.replace("DESC:", "").strip()
            if 'category' in item:
                items.append(item)
        return items[:3]
    except Exception as e:
        print(f"Error generating content for {company_name}: {e}")
        return []

def create_proposal(company_name):
    print(f"Processing proposal for: {company_name}...")
    
    # 1. Generate custom content
    opps = generate_opportunity_map(company_name)
    if not opps:
        print(f"Skipping {company_name} due to generation failure.")
        return

    # 2. Read template
    with open(TEMPLATE_PATH, 'r') as f:
        html = f.read()

    # 3. Replace basic placeholders
    html = html.replace("[COMPANY NAME]", company_name)
    html = html.replace("[CLIENT NAME]", company_name)
    html = html.replace("April 2026", datetime.now().strftime("%B %Y"))
    
    # 4. Replace Opportunity Map section
    opp_html_template = """
                <div class="opp-card">
                    <div class="opp-main">
                        <div class="opp-num">{idx}</div>
                        <div>
                            <p class="opp-category">{category}</p>
                            <p class="opp-transition">{transition}</p>
                        </div>
                    </div>
                    <p class="opp-desc">{desc}</p>
                </div>"""
    
    all_opps_html = ""
    for i, opp in enumerate(opps):
        all_opps_html += opp_html_template.format(
            idx=i+1,
            category=opp.get('category', 'AI STRATEGY'),
            transition=opp.get('transition', 'Manual -> Autonomous').replace("->", "→"),
            desc=opp.get('desc', 'Implementing agentic workflows.')
        )

    # Use regex to find the container and replace its contents
    pattern = r'(<h2 class="section-title">The Opportunity Map</h2>\s*</div>\s*<div class="opp-list">)(.*?)(</div>\s*</div>)'
    
    new_html = re.sub(pattern, r'\1' + all_opps_html + r'\3', html, flags=re.DOTALL)

    # 5. Save output
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    safe_name = "".join([c for c in company_name if c.isalnum() or c in (' ', '_')]).rstrip()
    output_path = os.path.join(OUTPUT_DIR, f"{safe_name}_Proposal.html")
    
    with open(output_path, 'w') as f:
        f.write(new_html)
    
    print(f"✅ Created: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python generate_proposals.py \"Company A\" \"Company B\" ...")
        sys.exit(1)
        
    companies = sys.argv[1:]
    for company in companies:
        create_proposal(company)

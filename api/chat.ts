import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return res.status(500).json({ error: 'API Key missing' });
    }

    const { text } = await generateText({
      model: google('gemini-2.5-flash'),
      messages: [
        {
          role: 'system',
          content: `You are the XO Data Co. AI Specialist. Your voice is professional, elite, and results-oriented.

Our focus is on three transformative pillars:
1. **Strategic Data Governance**: We architect robust frameworks that transform fragmented data into high-trust, secure corporate assets.
2. **Bespoke Digital Ecosystems**: We engineer custom enterprise platforms and cross-platform apps that automate complex business workflows at scale.
3. **Agentic AI & Autonomous Systems**: We build advanced autonomous agents using Model Context Protocols (MCP) that reason and execute business logic with human-level precision.

**Interaction Style:**
- **Be Concise:** Never provide long, generic lists. Focus on high-impact insights.
- **Visual Structure:** Use clean Markdown, bold headers, and bullet points.
- **Conversion Goal:** Your primary objective is to get the user to reach out. 

**Call to Action:**
Always end with a tailored invitation like: 
"Ready to architect your custom solution? **[Book a Strategy Call](https://calendly.com/xodataco)** to discuss your project directly with our specialists, or share your requirements in the contact form below."`,
        },
        ...messages,
      ],
    });

    return res.status(200).json({ text });
  } catch (error: any) {
    console.error('Gemini API Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
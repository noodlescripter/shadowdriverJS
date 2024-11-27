require('dotenv').config();
async function fetchOpenAIResponse(prompt, ai_res) {
  if (!ai_res) {
    return prompt;
  }
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("Missing API key please add in .env");
    return prompt;
  }

  const url = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    model: 'gpt-4',
    messages: [{ role: 'user', content: `Explain this to the end user in short: ${prompt}` }],
    max_tokens: 150,
    temperature: 0.7,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    const message = result.choices[0].message.content;
    throw new Error("|||@shadowdriverAI||| said: " + message)
  } catch (error) {
    console.error('There was an error:', error);
  }
}

module.exports = { fetchOpenAIResponse }

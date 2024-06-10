document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('testButton').addEventListener('click', async () => {
      const response = await getAIResponse('Test prompt');
      document.getElementById('output').innerText = response;
    });
  });
  
  import { Configuration, OpenAIApi } from 'openai';
  
  const configuration = new Configuration({
    apiKey: 'your-openai-api-key',
  });
  const openai = new OpenAIApi(configuration);
  
  async function getAIResponse(prompt) {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 150,
    });
    return response.data.choices[0].text;
  }
  
import config from '../Config';

const { apiUrl } = config;
const { openai: openaiApiUrl } = apiUrl;

// const question = 'What is the capital of New Zealand?';
export const getAdvice = async (question: string): Promise<string> => {
  const response = await fetch('http://localhost:5136/api/OpenAI', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question),
  });
  console.log('Response status:', response.status);
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', errorText);
    throw new Error('Failed to fetch from OpenAI');
  }
  const data = await response.text();
  return data;
};

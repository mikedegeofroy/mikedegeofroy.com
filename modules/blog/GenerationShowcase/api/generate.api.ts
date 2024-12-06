import axios from 'axios';
import { SERVER_API } from './contants';

interface GenerateImageResponse {
  id: string;
}

export const generateImage = async (
  url: string,
  color: string,
  backgroundColor: string,
  agression: string,
  strength: string
) => {
  try {
    // Call the API to generate an image
    const response = await axios.post<GenerateImageResponse>(
      `${SERVER_API}/avatar/generate`,
      {
        url,
        color,
        backgroundColor,
        agression,
        strength,
      }
    );

    return response;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};


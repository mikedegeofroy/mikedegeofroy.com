import axios from 'axios';
import { SERVER_API } from './contants';

interface UploadFileResponse {
  url: string;
}

export const uploadFile = async (file: FormData) => {
  return await axios.post<UploadFileResponse>(
    `${SERVER_API}/avatar/upload`,
    file,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};


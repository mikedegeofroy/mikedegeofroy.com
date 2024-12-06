import axios from 'axios';
import { SERVER_API } from './contants';

interface StatusResponse {
  id: string;
  status: 'Failed' | 'InQueue' | 'InProgress' | 'Completed';
  url: string;
}

export const getStatus = async (id: string) => {
  return await axios.get<StatusResponse>(`${SERVER_API}/avatar/status?id=${id}`);
};


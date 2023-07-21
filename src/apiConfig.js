import axios from 'axios';

const baseUrl = 'http://20.244.56.144/train';
const clientId = 'b46128a0-fbde-4c16-a4b1-6ae6ad718e27';
const clientSecret = 'xoyol0RPayK80dAN';

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer oJnNPG`, 
  },
});

export default instance;

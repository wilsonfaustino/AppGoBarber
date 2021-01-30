import axios from 'axios';

const emulatorAddress = '10.0.2.2';

const api = axios.create({
  baseURL: `http://${emulatorAddress}:3333`,
});

export default api;

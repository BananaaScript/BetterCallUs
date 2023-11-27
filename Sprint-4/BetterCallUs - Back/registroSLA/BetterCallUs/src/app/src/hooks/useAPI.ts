import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export const UseAPI = () => ({
    login: async (email: string, senha: string) => {
      try {
        const response = await api.post('/login', { email, senha });
        if (response.data.usuario && response.data.token) {
          console.log('User data after login:', response.data);
          return response.data;
        }
        return { usuario: null, token: null };
      } catch (error) {
        console.error('Error during login:', error);
        return { usuario: null, token: null };
      }
    },
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
    },
    logout: async () => {
        alert("Você foi desconectado💀")
        const response = await api.post('/logout');
        return response.data;
    }
});

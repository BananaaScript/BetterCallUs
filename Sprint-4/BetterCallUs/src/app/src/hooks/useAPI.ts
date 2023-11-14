import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const UseAPI = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
    },
    login: async (email: string, senha: string) => {
        const response = await api.post('/login', { email, senha });
        return response.data;
    },
    logout: async () => {
        alert("Você foi desconectado💀")
        const response = await api.post('/logout');
        return response.data;
    }
});
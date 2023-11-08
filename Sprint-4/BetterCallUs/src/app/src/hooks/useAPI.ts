import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const UseAPI = () => ({
    validateToken: async (token: string) => {
        return {
            usuario: { id: 3, nome: 'Trem Bala', email: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    login: async (email: string, senha: string) => {
        return {
            usuario: { id: 3, nome: 'Trem Bala', email: 'jose@gmail.com' },
            token: '123456789'
        };
        const response = await api.post('/login', { email, senha });
        return response.data;
    },
    logout: async () => {
        alert("💀")
        return{status: true}
        const response = await api.post('/logout');
        return response.data;
    }
});
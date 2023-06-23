import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '203c3cae8c3a44a6a49d7ed7d1afb884'
    }
})
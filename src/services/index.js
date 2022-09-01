import axios from 'axios';


export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { search } = req.body;
            const response = (await axios.get(`https://api.chucknorris.io/jokes/search?query=${search}`)).data;
            res.status(200).json(response.data);
        }
    } catch (err) {
        console.error("Ops! Houve um erro:" + err);
    }
}
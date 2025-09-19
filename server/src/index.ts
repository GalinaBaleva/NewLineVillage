import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', async (req: Request, res: Response) => {
    res.json({ message: 'hello from expres endpoint!' });
})


app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
})
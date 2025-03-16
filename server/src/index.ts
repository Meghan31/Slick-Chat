import cors from 'cors';
import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
const PORT = process.env.PORT || 9000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
	return res.send("It's working 🙌");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

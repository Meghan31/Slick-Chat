import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import Routes from './routes/index.js';
const app = express();
const PORT = process.env.PORT || 9000;
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    return res.send("It's working 🙌");
});
// * Routes
app.use('/api', Routes);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

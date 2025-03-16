import cors from 'cors';
import 'dotenv/config';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 9000;
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    return res.send("It's working 🙌");
});
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

import express from 'express';
import router from './app/routes/route.js';

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server on-line. Port: ${PORT}`);
});

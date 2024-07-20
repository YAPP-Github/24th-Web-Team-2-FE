import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import { handlers } from '@/mocks//handlers';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(PORT, () => console.log(`Mock server is running on port: ${PORT}`));

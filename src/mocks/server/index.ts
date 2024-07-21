import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import logger from 'morgan';
import { handlers } from '@/mocks//handlers';

const app = express();
const PORT = 8080;

app.use(logger('dev'));
app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(PORT, () => console.log(`Mock server is running on port: ${PORT}`));

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyparser from 'body-parser';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const app = express();

app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

export default app;

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyparser from 'body-parser';
import { userRouter } from './router';

const app = express();

const handleHome = (req, res) => res.send('hello');

const handleProfile = (req, res) => res.send('hello my profile');

app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

app.get('/', handleHome);
app.get('/profile', handleProfile);
app.use('/user', userRouter);

export default app;

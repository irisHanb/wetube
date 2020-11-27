import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyparser from 'body-parser';

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('hello');

const handleProfile = (req, res) => res.send('hello my profile');

app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

app.get('/', handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);

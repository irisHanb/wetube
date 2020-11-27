import express from 'express';

export const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send('user'));
userRouter.get('/profile', (req, res) => res.send('user profile'));
userRouter.get('/password', (req, res) => res.send('user password'));

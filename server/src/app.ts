import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import 'express-async-errors';
import middleware from './middleware';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import addRoutes from './routes/add';
import appendRoutes from './routes/append'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/add', addRoutes)
app.use('/', authRoutes);
app.use('/users', userRoutes);
app.use('/append', appendRoutes);

app.use(middleware.unknownEndPointHandler);
app.use(middleware.errorHandler);

export default app;

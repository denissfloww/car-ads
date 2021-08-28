import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import 'express-async-errors';
import middleware from './middleware';
import authRoutes from './routes/AuthRoutes';
import userRoutes from './routes/UserRoutes';
import appendRoutes from './routes/ModificationRoutes';
import adRoutes from './routes/AdRoutes'
import multer from "multer";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(multer().any());

app.use('/', authRoutes);
app.use('/users', userRoutes);
app.use('/append', appendRoutes);
app.use('/ad', adRoutes)

app.use(middleware.unknownEndPointHandler);
app.use(middleware.errorHandler);

export default app;

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from "morgan";
import allRoutes from './routes/allRoutes.js';
const port = process.env.PORT || 8080;

const app = express();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Logger middleware
app.use(logger('dev'));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(allRoutes);

// Port listener
app.listen(port, () => console.log(`Server is running on port ${port}`));

import express,{ Request, Response, Application, NextFunction} from 'express'
import bodyParser from 'body-parser';
import { LoginRoute } from './routes/login-route'


const app:Application = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.get('/', LoginRoute)
app.listen(3000,()=> console.log("starting"))
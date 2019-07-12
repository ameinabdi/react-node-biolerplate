import connection from '../config/database';
import express,{ Request, Response, Application, NextFunction} from 'express'


export const LoginRoute= (req:Request, res:Response, next:NextFunction) => {
  connection.query('select * from students', (err:[], result:[])=>{
      if(err){
          res.send("error")
      }else{
          res.json('success')
      }
  })    
};

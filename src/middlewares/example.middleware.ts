import { Request, Response, NextFunction } from "express";

 const exampleMiddleware= (req: Request, res: Response, next: NextFunction) =>{

    if(req){
        
        return res.status(401).json({message:"Unauthorized"})
    }


    next()
}

export default exampleMiddleware
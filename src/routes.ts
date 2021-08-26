import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router(); 

router.post('/users', (request, response)=>{
    //responde apenas com estatus de crianção
    return createUserController.handle(request, response)
})

export { router };
import express, { response } from 'express';

const router=express.Router()

router.get('/',(reqw,res)=>{
    res.send({response:"server is up and running ."}).status(200);
});

export default router;
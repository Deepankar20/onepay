import express from "express";
import z from "zod";

const app = express();

app.post('/hdfcWebhook', (req, res)=>{

    const paymentInfo = {
        token : req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    }

})
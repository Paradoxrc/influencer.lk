import express from "express";
import {PORT} from "./config.js";

const app=express();

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send("hello world")
});
app.listen(PORT, ()=>{

    console.log(`server running on port ${PORT}`);

});
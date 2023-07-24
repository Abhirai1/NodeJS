module.exports= reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send('Please provide age');
    }
    else if(req.query.age<18){
        resp.send('Your are under age');
    }
    else{
        next();
    }
     
}
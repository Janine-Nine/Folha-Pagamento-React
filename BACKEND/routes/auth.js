const router=require('express').Router();
const jwt=require('jsonwebtoken');
router.post('/login',(req,res)=>{
 const {email}=req.body;
 const token=jwt.sign({email,perfil:'admin'},'segredo',{expiresIn:'8h'});
 res.json({token,perfil:'admin'});
});
module.exports=router;
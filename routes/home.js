const express=require('express');
var router = express.Router();
router.get('/',(req,res)=>{
    res.render('home/home');
})

router.post('/charge', (req, res) => {
  res.render('success');
  });
module.exports=router;
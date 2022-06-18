const express=require('express');

const router=express.Router();
const controllerhome=require('../controller/controllerHome');


router.get('/',controllerhome.chome);

router.post('/add',controllerhome.add);

router.get('/delete',controllerhome.delete);

module.exports= router;
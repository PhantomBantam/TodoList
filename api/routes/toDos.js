const express = require('express');
const { response } = require('express');

const router = express.Router();

router.get('/', (req, res)=>{

  res.send('YOU ARE AT THE TO DOS PAGE');
});


module.exports = router;
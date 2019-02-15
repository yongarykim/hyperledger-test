const express = require('express');
const path = require('path');



//컨트롤러별 Router 로컬 설정
const router = express.Router()

router.use('/admin', require('./adminController'))

module.exports = router;

const express = require('express');
const router = express.Router();

const queryJs = require('../service_hyperledger/query');
const invokeJs = require('../service_hyperledger/invoke');

/** 차ID로 차를 조회
 * GET /admin/owner?car=CAR0
 */
router.get('/owner', async (req, res) => {
    let paramCar = req.query.car;

    let result = await queryJs(paramCar);

    res.send(result);
})

/** 차 Owner 변경
 * PUT /admin/owner?car=CAR0&owner=Kim
 */
router.put('/owner', async (req, res) => {
    let paramCar = req.query.car;
    let paramOwner = req.query.owner;

    let result = await invokeJs(paramCar, paramOwner);

    res.send(result);
})

module.exports = router;

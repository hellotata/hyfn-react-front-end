const express = require('express');
const adsMetric = require("../../../adsMetric.json");
const adsObject = require("../../../adsObject.json");
const router = express.Router();

router.get('/ads', (req, res) => {
  res.status(200).json(adsObject);
})

router.get('/ads_metrics', (req, res) => {
  res.status(200).json(adsMetric);
})

module.exports = router;
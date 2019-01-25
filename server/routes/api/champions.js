const express = require('express');
const router = express.Router();

const request = require('request');

router.get("/v1/champions", (_req, response) => {
  request(
    "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json",
    (err, res, body) => {
      if (err) {
        if (err && res) {
          return res.json(JSON.parse(err));
        } else {
          console.log(err);
        }
      }
      response.json(JSON.parse(body));
    }
  );
});

module.exports = router;
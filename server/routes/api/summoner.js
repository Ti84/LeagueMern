const express = require('express');
const router = express.Router();

require("dotenv").config();

const request = require("request");

// Get Summoner
router.get("/v1/summoner/:region/:summonerName", (req, response) => {
  request(
    {
      url: `https://${req.params.region ||
        "na1"}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
        req.params.summonerName
      }`,
      headers: {
        "X-Riot-Token": process.env.API_KEY
      }
    },
    (err, res, body) => {
      if (err && res) {
        return res.json(JSON.parse(err));
      } else {
        console.log(err);
      }
      response.json(JSON.parse(body));
    }
  );
});

// Get Mastery from Summoner ID
router.get("/v1/mastery/:region/:encryptedSummonerId", (req, response) => {
  request(
    {
      url: `https://${req.params.region ||
        "na1"}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
        req.params.encryptedSummonerId
      }`,
      headers: {
        "X-Riot-Token": process.env.API_KEY
      }
    },
    (err, res, body) => {
      if (err && res) {
        return res.json(JSON.parse(err));
      } else {
        console.log(err);
      }
      response.json(JSON.parse(body));
    }
  );
});

// Get matchList from Summoner ID
router.get("/v1/matchList/:region/:encryptedAccountId", (req, response) => {
  request(
    {
      url: `https://${req.params.region ||
        "na1"}.api.riotgames.com/lol/match/v4/matchlists/by-account/${
        req.params.encryptedAccountId
      }`,
      headers: {
        "X-Riot-Token": process.env.API_KEY
      }
    },
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
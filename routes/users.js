const express = require('express');
const { logoutUser } = require('../auth');

const db = require('../db/models')
const { requireAuth, loggedIn } = require('../auth');
const router = express.Router()

const { Channel } = db;
const { Tvshow } = db;


const { csrfProtection, asyncHandler } = require('./util');

router.get('/', asyncHandler(async (req, res) => {
  const channels = await db.Channel.findAll();
  const shows = await db.Tvshow.findAll();
    
  const logged = loggedIn(req, res)
    res.render('users', {
      logged, channels, shows
  });
}))

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/')
});

router.post('/', asyncHandler(async (req, res) => {

  // const shows = await db.Tvshow.findAll();
    
  // const logged = loggedIn(req, res)
  // const { channelName, showId } = req.body;
  // // Get channel ie scary shows
  // console.log(`its here!!!!!!!!!!!!!`, channelName, showId)
  // const channel = await Channel.create({channelName, showId})
  // // add tvshowId to that channel
  // // pull all tvshowIds from channel
  // // render tvshow.title in our pug 

  res.render('users', {
    logged, shows, channel
  });

}));



module.exports = router;

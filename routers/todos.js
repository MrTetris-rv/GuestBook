const {
  Comment
} = require('../routs/comment');
const {
  Router
} = require('express');
const router = Router();


router.get('/', (req, res) => {
  Comment.find().then((allComments) => {
    res.render('main.hbs', {
      allComments
    });
  }, (err) => {
    console.log(err);
  });
});



router.post('/addComment', async (req, res) => {
  const newComment = new Comment({
    name: req.body.name,
    comment: req.body.comment
  });
  await newComment.save();
  res.redirect('/');
});
module.exports = router;
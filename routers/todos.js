const {
  Comment
} = require('../routs/comment');
const {
  Router
} = require('express');
const router = Router();


// router.get('/', async (req, res) => {
//   const com = await Comment({});
//   Comment.find().then((allComments) => {
//     res.render('index', {
//       allComments
//     });
//   });
// });
router.get('/', (req, res) => {
  // выгружаем все записи из БД
  Comment.find().then((allComments) => {
    // рендерим
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
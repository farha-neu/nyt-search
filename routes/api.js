const router = require("express").Router();
const Article = require("../models/Article.js");
const Note = require("../models/Note.js");

router.post("/api/articles", function(req, res) {
  Article.create(req.body)
  .then((dbArticle) => {
    res.json(dbArticle);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.get("/api/articles", function(req, res) {
  // find all saved articles
  Article.find({}).sort([['dateSaved', -1]])
  .then((dbArticle) => {
    res.json(dbArticle);
  });
});

router.get("/api/article/:articleId", function(req, res) {
  Article.findOne({articleId:req.params.articleId}).populate("note")
  .then((dbArticle) => {
    res.json(dbArticle);
  });
});

router.delete("/article/:id",function(req,res){
  Article.findByIdAndRemove(req.params.id)
  .then(() => {
    res.json("deleted");
  });
});


// Route for saving/updating an Article's associated Note
router.post("/articles/:id", function(req, res) {
  Note.create(req.body)
    .then(function(dbNote) {
      return Article.findOneAndUpdate({ _id: req.params.id },{$push: {note: dbNote._id} }, { new: true });
    })
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});


module.exports = router;
const router = require("express").Router();
const Article = require("../models/article.js");

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
  Article.findOne({articleId:req.params.articleId})
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



module.exports = router;
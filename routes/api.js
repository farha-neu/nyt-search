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
  Article.find({})
  .then((dbArticle) => {
    res.json(dbArticle);
  });
});

router.delete("/article/:id",function(req,res){
  Article.findByIdAndRemove(req.params._id)
  .then(() => {
    res.json("deleted");
  });
});

module.exports = router;
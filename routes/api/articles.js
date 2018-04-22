const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.get('/articles', (req, res) => {
  axios
    .get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c4d0935b7d4d411586a4d5453386e817', {
      params: req.query + req.startYear + req.endYear
      })
})

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;

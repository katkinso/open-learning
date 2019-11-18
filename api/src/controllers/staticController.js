module.exports = {
    index(req, res, next){
      res.render("static/index", {title: "Welcome Static"});
    },
    test(req, res, next){
      res.render("static/test", {title: "test"});
    }
  }
module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const userRoutes = require("../routes/users");
      const sessionRoutes = require("../routes/sessions");


      app.use(staticRoutes);
      app.use(userRoutes);
      app.use(sessionRoutes);

    }
  }
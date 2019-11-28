const request = require("request");
const server = require("../../src/server");
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const base = "http://localhost:9000";

describe("routes : users", () => {

  beforeAll((done) => {

      this.user = {
        email: "test@test.com",
        firstName: 'testFirst',
        lastName: 'testLast'
      }
      
      this.userId = 1;
      this.password = '123456'

      sequelize.sync({force: true})
      .then(() => {
        done();
      })
      .catch((err) => {
        done();
      });

  });


  //DESCRIBE ------
  describe("GET /users/register", () => {

    it("should return status code 200 and verify the body matches the user", (done) => {
      request.post({
          url: `${base}/users/register`,
          form: { 
            ...this.user, 
            "password":this.password, 
            "passwordConfirmation":this.password 
          }
        },(err, res, body) => {
        
        const user = { ...this.user, id: this.userId }

        expect(res.statusCode).toBe(200);
        expect(body).toContain(this.userId);
        done();
      });
    });

    //----
    it("should return status code 200 and verify the user email", (done) => {
      request.post({
          url: `${base}/users/authenticate`,
          form: {
              email: this.user.email,
              password: this.password
          }
        },(err, res, body) => {

        expect(res.statusCode).toBe(200);
        expect(body).toContain(this.user.email);
        done();
      });
    });

    //---
    it("should return status code 403", (done) => {
      request.post({
          url: `${base}/users/register`,
          form: { 
            ...this.user, 
            "password":this.password, 
            "passwordConfirmation":this.password 
          }
        },(err, res, body) => {
        
        const user = { ...this.user, id: this.userId }

        expect(res.statusCode).toBe(403);
        done();
      });
    });
    

  });//DESCRIBE
});
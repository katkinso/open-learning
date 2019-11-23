const request = require("request");
const server = require("../../src/server");
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const base = "http://localhost:9000";

describe("routes : users", () => {

  sequelize.sync({ force: true })
  .then((res) => {
      done();
  })
  .catch((err) => {
      console.log(err);
      done();
  });
  

  beforeEach(() => {
    this.email = "test@test.com",
    this.password = "123456"
  })



  describe("GET /users/register", () => {


    it("should return status code 200", (done) => {
      request.post({
          url: `${base}/users/register`,
          form: {
              email: this.email,
              password: this.password,
              passwordConfirmation: this.password
          }
        },(err, res, body) => {
        expect(res.statusCode).toBe(200);

        console.log(res)

        expect(body).toEqual('{"authenticated":true}');
        done();
      });
    });

    // it("should return status code 200", (done) => {
    //   request.post({
    //       url: `${base}/users/authenticate`,
    //       form: {
    //           email: this.email,
    //           password: this.password
    //       }
    //     },(err, res, body) => {
    //     expect(res.statusCode).toBe(200);

    //     console.log(res)

    //     // expect(body).toContain(this.userId);
    //     done();
    //   });
    // });
  });//DESCRIBE
});
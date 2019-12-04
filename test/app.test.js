const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Testing...", () => {
  it("all of the users in database", done => {
    chai
      .request(app)
      .get("/api/users")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.have.length(2);
        done();
      });
  });

  it("get first user", done => {
    chai
      .request(app)
      .get("/api/user/1")
      .end((err, res) => {
        var checkObj = {
                    "id":1,
                    "name": "mw",
                    "email": "mwveliz@gmail.com"
                }
        expect(res).to.have.status(200);
        expect(res.body.result).to.deep.equal(checkObj); ;
        done();
      });
  });
});
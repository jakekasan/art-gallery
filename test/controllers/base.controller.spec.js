const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();

describe("base.controller",() => {

    describe("module",() => {

        it("module should import an object", () => {
            let bc = require("./../../controllers/base.controller.js");

            bc.should.be.an("object");
        });

        it("object should have a 'name' property", () => {
            let bc = require("./../../controllers/base.controller.js");

            bc.should.have.property("name");
        });

        it("object.name should be equal to 'Base Controller'", () => {
            let bc = require("./../../controllers/base.controller.js");

            bc.name.should.equal("Base Controller");
        });

        it("object should have a 'run' property", () => {
            let bc = require("./../../controllers/base.controller.js");

            bc.should.have.property("run");
        });

        it("object.run should be a function",() => {
            let bc = require("./../../controllers/base.controller.js");

            bc.run.should.be.a("function");
        });

        it("object.run should call a res function", (done) => {
            let bc = require("./../../controllers/base.controller.js");

            let req = {
                connection:true
            }

            let res = {
                ranFunction: function(){
                    assert(true);
                    done();
                },
                render:function(){
                    this.ranFunction();
                },
                json:function(){
                    this.ranFunction();
                },
                sendStatus:function(){
                    this.ranFunction();
                }
            }

            bc.run(req,res,null);

            //assert(res.ranFunction === true);
            //res.ranFunction.should.equal(true);
        })
    });

    describe("extending the base object",() => {

        it("object has a 'extend' property",() => {
            let bc = require("./../../controllers/base.controller.js");

            bc.should.have.property("extend");
        });

        it("object.extend should overwrite base values", () => {
            let bc = require("./../../controllers/base.controller.js");

            let ac = bc.extend({
                name:"Extended Controller"
            });

            assert((ac.name == "Extended Controller") && (bc.name == "Base Controller"));
        });
    })
});
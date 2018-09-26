const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();

describe("base.controller",() => {

    describe("module",() => {

        it("module should import an object", () => {
            let bc = require("./../../controllers/base.controller.js");

            bc.should.be.an("object");
        });

        it("object should have a name property", () => {
            let bc = require("./../../controllers/base.controller.js");

            bc.should.have.property("name");
        });

        it("object.name should be equal to 'Base Controller'", () => {
            let bc = require("./../../controllers/base.controller.js");

            bc.name.should.equal("Base Controller");
        });
    });
});
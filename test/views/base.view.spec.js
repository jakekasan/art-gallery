const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();



describe("base.view",() => {

    it("module should be a function", () => {
        let view = require("./../../views/base.view");

        view.should.be.a("function");
    });

    it("module function should return an object", () => {
        let view = new (require("./../../views/base.view"))(null,null);

        view.should.be.an("object");
    });

    it("object should have a name property", () => {
        let View = require("./../../views/base.view")
        let viewInstance = new View(null,null)
        viewInstance.should.have.property("name");
    });

    it("object.name should equal 'Base View'", () => {
        let View = require("./../../views/base.view");

        let viewInstance = new View(null,null);

        viewInstance.name.should.equal("Base View");
    });

    it("object should have a render property", () => {
        let View = require("./../../views/base.view")
        let viewInstance = new View(null,null)
        viewInstance.should.have.property("render");
    });

    it("object.render should be a function", () => {
        let View = require("./../../views/base.view");

        let viewInstance = new View(null,null);

        viewInstance.render.should.be.a("function");
    });
})
const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();

describe("base.model",() => {

    describe("basic properties", () => {

        it("module should be a function", () => {
            let baseModel = require("./../../models/base.model");

            baseModel.should.be.a("function");
        });

        it("module function should return a new object", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.should.be.an("object");
        });

    });

    describe("instance properties",() => {

        /*

            CREATE

        */

        it("should have CREATE property", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.should.have.property("create");
        });

        it("CREATE property should be a function", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.create.should.be.a("function");
        });

        it("CREATE function should execute a callback", (done) => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.create(null,() => {
                done();
            });
        });

        /*

            RETRIEVE

        */

        it("should have RETRIEVE property", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.should.have.property("retrieve");
        });

        it("RETRIEVE property should be a function", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.retrieve.should.be.a("function");
        });

        it("RETRIEVE function should execute a callback", (done) => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.retrieve(null,() => {
                done();
            });
        });

        /*

            UPDATE

        */

        it("should have UPDATE property", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.should.have.property("update");
        });

        it("UPDATE property should be a function", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.update.should.be.a("function");
        });

        it("UPDATE function should execute a callback", (done) => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.update(null,null,() => {
                done();
            });
        });

        /*

            DELETE

        */

        it("should have DELETE property", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.should.have.property("delete");
        });

        it("DELETE property should be a function", () => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.delete.should.be.a("function");
        });

        it("DELETE function should execute a callback", (done) => {
            let baseModel = require("./../../models/base.model");

            let object = new baseModel();

            object.delete(null,() => {
                done();
            });
        });

        
    });
})
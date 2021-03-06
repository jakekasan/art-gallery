const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();

describe("index.spec.js",() => {

    describe("basics", () => {

        it("should exist",() => {
            assert(require("./../../config/index"));
        });

        it("module should be a function",() => {
            let configImport = require("./../../config/index");

            configImport.should.be.a("function");
        });

        it("module function should return an object", () => {
            let config = require("./../../config/index")();

            config.should.be.an("object");
        });

        it("config should have a name property", () => {
            let config = require("./../../config/index")();

            config.should.have.property("name");
        });

        it("config should have an address property", () => {
            let config = require("./../../config/index")();

            config.should.have.property("server");
        });

        it("config.server should be an object", () => {
            let config = require("./../../config/index")();

            config.server.should.be.an("object");
        });

        it("config.server should have an address property", () => {
            let config = require("./../../config/index")();

            config.server.should.have.property("address");
        });

        it("config.server should have a port property", () => {
            let config = require("./../../config/index")();

            config.server.should.have.property("port");
        });
    });

    describe("local settings", () => {

        it("importing module with 'local' should return 'local' config", () => {
            let config = require("./../../config/index")("local");

            config.name.should.be.equal("local");
        });

        it("'local' config address should be 'http://localhost'", () => {
            let config = require("./../../config/index")("local");

            config.server.address.should.be.equal("http://localhost");
        });

        it("'local' config port should be 8000", () => {
            let config = require("./../../config/index")("local");

            config.server.port.should.be.equal(8000);
        });
    })
})
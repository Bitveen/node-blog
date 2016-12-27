const capitalize = require("../capitalize");
const expect = require("chai").expect;


describe("capitalize", () => {
    it("capitalizes single words", () => {
        expect(capitalize("express")).to.equal("Express");
        expect(capitalize("APP")).to.equal("App");
    });
});

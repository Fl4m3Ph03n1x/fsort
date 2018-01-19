const expect = require("chai").expect;
const isFunction = require("../../src/utils/isFunction");

describe("isFunction", () => {
    it("should return false when passing an Object", () => {
        const input = {};

        expect( isFunction( input ) ).to.be.false;
    });

    it("should return false when passing a String", () => {
        const input1 = "";
        const input2 = "hello";

        expect( isFunction( input1 ) ).to.be.false;
        expect( isFunction( input2 ) ).to.be.false;
    });

    it("should return false when passing a Boolean ", () => {
        const input1 = false;
        const input2 = true;

        expect( isFunction( input1 ) ).to.be.false;
        expect( isFunction( input2 ) ).to.be.false;
    });

    it("should return false when passing a Number", () => {
        const input1 = 0;
        const input2 = 1;

        expect( isFunction( input1 ) ).to.be.false;
        expect( isFunction( input2 ) ).to.be.false;
    });

    it("should return false when passing a null", () => {
        const input = null;

        expect( isFunction( input ) ).to.be.false;
    });

    it("should return false when passing an undefined", () => {
        const input = undefined;

        expect( isFunction( input ) ).to.be.false;
    });

    it("should return true when passing a Function", () => {
        const input = () => { };

        expect( isFunction( input ) ).to.be.true;
    });
});

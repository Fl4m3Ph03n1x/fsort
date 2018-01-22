
const expect = require("chai").expect;
const { bingo, ASC, DESC } = require("../../src");

describe("bingo", () => {

    it("should throw if fnCompare is not a function", () => {
        const array = [], fnCompare = "NotAFunction";
        expect( bingo.bind( null, fnCompare, array ) ).to.throw();
    });

    it("should throw if array is not an array", () => {
        const array = "NotAnArray";
        expect( bingo.bind( null, ASC, array ) ).to.throw();
    });

    it("should return an empty array if the given array is empty", () => {
        const array = [];
        const expected = [];
        const actual = bingo( ASC, array );
        expect( actual ).to.eql( expected );
    });

    it("should sort an array of size 1 in ASC order", () => {
        const array = [ 5 ];
        const expected = [ 5 ];
        const actual = bingo( ASC, array );

        expect( actual ).to.eql( expected );
    });

    it("should sort an array of size 1 in DES order", () => {
        const array = [ 5 ];
        const expected = [ 5 ];
        const actual = bingo( DESC, array );

        expect( actual ).to.eql( expected );
    });

    it("should order an array in ascending order using a custom fnCompare", () => {
        const array = [
                { name: "John", age: 5 },
                { name: "Cersei", age: 1 },
                { name: "Ned", age: 4 },
                { name: "Aria", age: 2 },
                { name: "Tyrion", age: 8 }
            ],
            fnCompare = ( obj1, obj2 ) => {
                if( obj1.age < obj2.age )
                    return -1;
                if( obj1.age > obj2.age )
                    return 1;
                return 0;
            };

        const expected = [
            { name: "Cersei", age: 1 },
            { name: "Aria", age: 2 },
            { name: "Ned", age: 4 },
            { name: "John", age: 5 },
            { name: "Tyrion", age: 8 }
        ];

        const actual = bingo( fnCompare )( array );

        expect( actual ).to.eql( expected );
    });

    it("should order array in descending order using a custom fnCompare", () => {
        const array = [
                { name: "John", age: 5 },
                { name: "Cersei", age: 1 },
                { name: "Ned", age: 4 },
                { name: "Aria", age: 2 },
                { name: "Tyrion", age: 8 }
            ],
            fnCompare = ( obj1, obj2 ) => {
                if( obj1.age > obj2.age )
                    return -1;
                if( obj1.age < obj2.age )
                    return 1;
                return 0;
            };

        const expected = [
            { name: "Tyrion", age: 8 },
            { name: "John", age: 5 },
            { name: "Ned", age: 4 },
            { name: "Aria", age: 2 },
            { name: "Cersei", age: 1 }
        ];

        const actual = bingo( fnCompare )( array );

        expect( actual ).to.eql( expected );
    });
});

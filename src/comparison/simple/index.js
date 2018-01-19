const constructSort = require("../../utils/constructSort");
const bubble = require("./bubble");
const insertion = require("./insertion");
const selection = require("./selection");
const gnome = require("./gnome");
const comb = require("./comb");
const cocktail = require("./cocktail");
const comparator = require("../../compareFns.js");

/**
 * @namespace Sort.Comparison.Simple
 * @desc
 * ## What?
 *
 *
 */
module.exports = Object.assign(
    {},
    comparator,
    {
        bubble: constructSort( bubble ),
        insertion: constructSort( insertion ),
        selection: constructSort( selection ),
        gnome: constructSort( gnome ),
        comb: constructSort( comb ),
        cocktail: constructSort( cocktail )
    }
);

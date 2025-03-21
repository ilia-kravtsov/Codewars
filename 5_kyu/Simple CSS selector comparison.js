/*
Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. A style sheet consists of a list of rules. Each rule or rule-set consists of one or more selectors, and a declaration block. Selector describes which element it matches.

Sometimes element is matched to multiple selectors. In this case, element inherits multiple styles, from each rule it matches. Rules can override each other. To solve this problem, each selector has it's own 'specificity' - e.g. weight. The selector with greater specificity overrides the other selector.

Your task is to calculate the weights of two selectors and determine which of them will beat the other one.

Examples
"body p",  "div"     --->  return "body p"
".class",  "#id"     --->  return "#id"
"div.big", ".small"  --->  return "div.big"
".big",    ".small"  --->  return ".small" (because it appears later)
For simplicity, all selectors in test cases are CSS1-compatible, test cases don't include pseudoclasses, pseudoelements, attribute selectors, etc. Below is an explanation on how to weight two selectors. You can read more about specificity here.

The simplest selector type is tagname selector. It writes as a simple alphanumeric identifier: eg body, div, h1, etc. It has the least weight. If selectors have multiple elements - the selector with more elements win. For example, body p beats div, because it refers to 2 (nested) elements rather than 1.

Another simple selector is .class selector. It begins with dot and refer to element with specific class attribute. Class selectors can also be applied to tagname selectors, so div.red refer to <div class="red"> element. They can be grouped, for example, .red.striped. Class selector beats tagname selector.

The most weighted selector type in stylesheet is #id selector. It begins with hash sign and refer to element with specific id attribute. It can also be standalone, or applied to an element. Id selector beats both selector types.

And the least weighted selector is *, which has no specificity and can be beat by any other selector.

Selectors can be combined, for example, body #menu ul li.active refers to li element with class="active", placed inside ul element, placed inside element width id="menu", placed inside body.

Specificity calculation is simple.

Selector with more #id selectors wins.
If both are same, the winner is selector with more .class selectors.
If both are same, selector with more elements wins.
If all of above values are same, the winner is selector that appear last.
For example, let's represent the number of #id , .class, tagname selectors as array (in order from worst to best):

Selector	Specificity (#id,.class,tagname)
*	0, 0, 0
span	0, 0, 1
body p	0, 0, 2
.green	0, 1, 0
apple.yellow	0, 1, 1
div.menu li	0, 1, 2
.red .orange	0, 2, 0
div.big .first	0, 2, 1
#john	1, 0, 0
div#john	1, 0, 1
body #john span	1, 0, 2
menu .item #checkout.active	1, 2, 1
#foo div#bar.red .none	2, 2, 1
*/

function compare(a, b) {
    function calculateSpecificity(selector) {
        let idCount = (selector.match(/#/g) || []).length; 
        let classCount = (selector.match(/\./g) || []).length; 
        let tagCount = (selector.match(/(^|\s)[a-zA-Z][a-zA-Z0-9_-]*/g) || []).length; 

        return [idCount, classCount, tagCount];
    }

    function compareSpecificities(specA, specB) {
        for (let i = 0; i < specA.length; i++) {
            if (specA[i] > specB[i]) return 1;
            if (specA[i] < specB[i]) return -1;
        }
        return 0; 
    }

    const specA = calculateSpecificity(a);
    const specB = calculateSpecificity(b);

    const comparison = compareSpecificities(specA, specB);

    if (comparison > 0) return a;
    if (comparison < 0) return b;

    return b;
}
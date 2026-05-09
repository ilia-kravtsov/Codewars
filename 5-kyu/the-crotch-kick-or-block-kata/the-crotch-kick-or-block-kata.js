var darkRoom = function(direction) {
    var position = 0;
    var blockPosition = null;
    var blocks = 0;
​
    function chain(block) {
        position++;
​
        if (block === 1) {
            blocks++;
            blockPosition = position;
        }
​
        return chain;
    }
​
    chain.end = function() {
        return blocks === 1 && blockPosition === direction
            ? "BLOCK"
            : "CROTCH KICK";
    };
​
    return chain;
};
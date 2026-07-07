function word2Tree(str) {
    if (str.length === 1) {
        return {
            value: str,
            type: "leaf"
        };
    }
    

    let splitIndex;
    if (str.length === 2) {
        splitIndex = 1;
    } else {
        splitIndex = Math.floor(str.length / 2);
    }
    
    const leftStr = str.substring(0, splitIndex);
    const rightStr = str.substring(splitIndex);
    

    let type;
    
    const result = {
        value: str,
        left: word2Tree(leftStr),
        right: word2Tree(rightStr),
        type: "node" 
    };
    
    return result;
}

function word2Tree(str) {
    function buildTree(s, isRoot) {
        if (s.length === 1) {
            return {
                value: s,
                type: "leaf"
            };
        }
        
        let splitIndex;
        if (s.length === 2) {
            splitIndex = 1;
        } else {
            splitIndex = Math.floor(s.length / 2);
        }
        
        const leftStr = s.substring(0, splitIndex);
        const rightStr = s.substring(splitIndex);
        
        return {
            value: s,
            left: buildTree(leftStr, false),
            right: buildTree(rightStr, false),
            type: isRoot ? "root" : "node"
        };
    }
    
    return buildTree(str, true);
}
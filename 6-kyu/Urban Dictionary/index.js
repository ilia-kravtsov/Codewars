class WordDictionary {
    constructor() {
        this.root = {};
    }
​
    addWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.isEnd = true;
    }
​
    search(word) {
        return this._searchHelper(word, 0, this.root);
    }
​
    _searchHelper(word, index, node) {
        if (index === word.length) {
            return node.isEnd === true;
        }
​
        const char = word[index];
​
        if (char === '.') {
            for (let key in node) {
                if (key === 'isEnd') continue;
                
                if (this._searchHelper(word, index + 1, node[key])) {
                    return true;
                }
            }
            return false;
        } 
        else {
            if (!node[char]) {
                return false;
            }
            return this._searchHelper(word, index + 1, node[char]);
        }
    }
}
​
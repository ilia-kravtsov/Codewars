        const storage = {};
​
        for (let i = 0; i < string.length; i++) {
            storage[string[i]] = (storage[string[i]] || 0) + 1;
        }
​
        return storage;
    }
​
    const testObject = stringToStorage(test)
    const originalObject = stringToStorage(original)
​
    for (const key in testObject) {
        if (!originalObject.hasOwnProperty(key) || testObject[key] !== originalObject[key]) {
            return false;
        }
    }
​
    return true;
};
​
function isAnagram_4(test, original) {
    if (test.length !== original.length) return false;
  
    test = test.toLowerCase();
    original = original.toLowerCase();
​
    const counts = {};
​
    for (const letter of test) {
        counts[letter] = (counts[letter] || 0) + 1;
    }
​
    for (const letter of original) {
        if (!counts[letter]) {
            return false;
        }
​
        counts[letter]--;
    }
​
    return true;
}
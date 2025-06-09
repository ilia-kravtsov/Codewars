function createSecretHolder(secret) {
    let _secret = secret;
​
    return {
        getSecret: function() {
            return _secret;
        },
​
        setSecret: function(newSecret) {
            _secret = newSecret;
        }
    };
}
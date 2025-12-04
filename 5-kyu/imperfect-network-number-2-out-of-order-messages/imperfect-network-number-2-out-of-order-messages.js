function NetworkClient(sendFunction, callback) {
    this.sendFunction = sendFunction
    this.callback = callback
    this.sendSeq = 0
    this.recvSeq = 0
    this.buffer = {}
    this.seen = {}
}
​
NetworkClient.prototype.send = function (data) {
    this.sendFunction(JSON.stringify([this.sendSeq++, data]))
}
​
NetworkClient.prototype.recv = function (payload) {
    var parsed = JSON.parse(payload)
    var seq = parsed[0]
    var data = parsed[1]
​
    if (this.seen[seq]) return
    this.seen[seq] = true
    this.buffer[seq] = data
​
    while (this.buffer.hasOwnProperty(this.recvSeq)) {
        this.callback(this.buffer[this.recvSeq])
        delete this.buffer[this.recvSeq]
        this.recvSeq++
    }
}
​
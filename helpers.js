function successfullMessage(msg) {
    return "✅ *Nexa*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Nexa*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *Nexa :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}

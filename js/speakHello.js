
(function (window) {
    var speakWord = "Hello";
    var helloSpeaker = {};

    helloSpeaker.speak = function () {
    console.log(speakWord + " " + helloSpeaker.names);
}

window.helloSpeaker = helloSpeaker;

})(window);


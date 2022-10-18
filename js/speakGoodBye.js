
(function (window) {
    var speakWord = "Good Bye";
    var byeSpeaker = {};
    byeSpeaker.speak =  function() {
        console.log(speakWord + " " + byeSpeaker.names);
      }

      window.byeSpeaker = byeSpeaker;


})(window);


  
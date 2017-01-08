(function (exports) {

    var NewsView = function () {};

    NewsView.prototype = {
      displayHeadlines: function (storyList) {
        var output = [];
        for(var i=0; i<storyList.length; i++) {
          output.push('<li><div id="'+i+'"><a href=#'+i+'>'+storyList[i].webTitle+'</a></div></li>');
        }
        var headLines = "<ul>"+output.join("")+"</ul>";
        document.getElementById('headlines').innerHTML = headLines;
        return headLines;
      },

      displaySummarySentences: function(sentences) {
        for (var i = 0; i < sentences.length-1; i++) {
          var summarySentences = "<p>" + sentences[i] + "</p>";
          document.getElementById("story-summary").innerHTML += summarySentences;
        }
      }
    };
    exports.NewsView = NewsView;
})(this);

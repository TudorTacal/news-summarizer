(function (exports) {

    var NewsView = function () {};

    NewsView.prototype = {
      displayHeadlines: function (storyList) {
        var output = [];
        for(var i=0; i<storyList.length; i++) {
          output.push('<li><a href=#'+i+'>'+storyList[i].headline+'</a></li>');
        }
        return output.join("");
      }
    };
    exports.NewsView = NewsView;
})(this);

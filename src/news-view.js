(function (exports) {

    var NewsView = function () {};

    NewsView.prototype = {
      displayHeadlines: function (storyList) {
        var output = [];
        for(var i=0; i<storyList.length; i++) {
          output.push('<li><div id="'+i+'"><a href=#'+i+'>'+storyList[i].headline+'</a></div></li>');
        }
        return "<ul>"+output.join("")+"</ul>";
      }
    };
    exports.NewsView = NewsView;
})(this);

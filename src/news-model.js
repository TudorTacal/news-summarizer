//saves the stories from the response of the Guardian API call

(function(exports) {

  var NewsModel = function () {
    this.storyList = [];
  };

  NewsModel.prototype = {
    save: function (stories) {
      this.storyList.push(stories);
    }
  };

  exports.NewsModel = NewsModel;

})(this);

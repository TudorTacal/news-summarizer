//saves the stories from the response of the Guardian API call

(function(exports) {

  var NewsModel = function () {
    this.storyList = [];
  };

  NewsModel.prototype = {
    save: function (stories) {
      this.storyList = stories;
    },

    getTitle: function (index) {
      return this.storyList[index].webTitle;
    },

    getUrl: function (index) {
      return this.storyList[index].webUrl;
    }
  };

  exports.NewsModel = NewsModel;

})(this);

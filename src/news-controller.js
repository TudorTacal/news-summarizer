(function (exports) {
  var NewsController = function () {
    this.NewsModel = new NewsModel();
    this.NewsView = new NewsView();
    this.xhr = new XMLHttpRequest();
  };

  NewsController.prototype = {
    createStory: function (JSON) {
        this.NewsModel.save(JSON);
        this.NewsView.displayHeadlines(this.NewsModel.storyList);
    },

    apiRequest: function () {
      this.xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail", true);
      this.xhr.send();
      self = this;
      this.xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var newsObject = JSON.parse(this.responseText);
          self.createStory(newsObject.response.results);
        }
      };
    }
  };

  exports.NewsController = NewsController;

})(this);

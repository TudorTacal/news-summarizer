(function (exports) {

  var NewsController = function () {
    this.NewsModel = new NewsModel();
    this.NewsView = new NewsView();
  };

  NewsController.prototype = {
    apiRequest: function () {
      
    }
  };

  exports.NewsController = NewsController;

})(this);

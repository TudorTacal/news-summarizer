(function (exports) {
  var NewsController = function () {
    this.NewsModel = new NewsModel();
    this.NewsView = new NewsView();
    this.xhr = new XMLHttpRequest();
    this.headlines = document.getElementById('headlines');
  };

  NewsController.prototype = {
    createHeadlines: function (JSON) {
        this.NewsModel.save(JSON);
        this.NewsView.displayHeadlines(this.NewsModel.storyList);
    },

    showSummary: function(summary) {
      this.NewsView.displaySummarySentences(summary);
    },

    // setupHeadlines: function() {
    // // var self = this;
    // // this.headlines.addEventListener('click', function(){
    // //   self.aylienRequest(self.NewsModel.getUrl(self.grabId()));
    // // });
    // // },

    apiRequest: function () {
      this.xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail", true);
      this.xhr.send();
      self = this;
      this.xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var newsObject = JSON.parse(this.responseText);
          self.createHeadlines(newsObject.response.results);
        }
      };
    },

    aylienRequest: function (url) {
      this.xhr.open("GET","http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url, true);
      this.xhr.send();
      self = this;
      this.xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 2) {
          var newsSummary = JSON.parse(this.responseText);
          self.showSummary(newsSummary.sentences);
        }

      };
    },
    grabId: function() {
      return window.location.hash.split("#")[1];
    }

  };

  exports.NewsController = NewsController;

})(this);

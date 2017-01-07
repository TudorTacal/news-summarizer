describe("NewsView", function (){
  var view, news, storyList;

  beforeEach(function () {
    view = new NewsView();
    news = jasmine.createSpyObj("storyList", ["headline"]);
    news.headline = "My headline.";
    storyList = [];
    storyList.push(news);
  });

  it ("Initializes new objects", function () {
    expect(NewsView).toBeDefined();
  });

  it("Displays the headlines", function () {
    console.log(news.headline);
    expect(view.displayHeadlines(storyList)).toEqual("<li><a href=#0>My headline.</a></li>");
  });

});

describe("NewsView", function (){
  var view, news, storyList, dummyDiv;

  beforeEach(function () {
    view = new NewsView();
    news = jasmine.createSpyObj("storyList", ["headline"]);
    news.headline = "My headline.";
    storyList = [];
    storyList.push(news);
    dummyDiv = document.createElement('div');
    dummyDiv.id = 'headlines';
    spyOn(document, 'getElementById').and.returnValue(dummyDiv);

  });

  it ("Initializes new objects", function () {
    expect(NewsView).toBeDefined();
  });

  it("Displays the headlines", function () {
    console.log(news.headline);
    console.log(dummyDiv);
    expect(view.displayHeadlines(storyList)).toEqual('<ul><li><div id="0"><a href=#0>My headline.</a></div></li></ul>');
  });

});

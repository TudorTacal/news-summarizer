describe("NewsModel",function (){

  var news = new NewsModel ();
  var stories;

  beforeEach(function (){
    stories = jasmine.createSpy('stories');
    stories.webTitle = "My news name";
  });

  it ("Initializes new objects", function () {
    expect(news instanceof NewsModel).toEqual(true);
  });

  it ("Saves news", function () {
    news.save(stories);
    expect(news.storyList.length).toEqual(1);
  });

  it("Gets a news title", function () {

    news.save(stories);
    news.getTitle(0);
    expect(news.getTitle(0)).toEqual("My news name");

  });

});

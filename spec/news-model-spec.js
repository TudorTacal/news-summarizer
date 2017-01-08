describe("NewsModel",function (){

  var news = new NewsModel ();
  var story, stories;

  beforeEach(function (){
    story = jasmine.createSpy('story');
    story.webTitle = "My news name";
    stories = [story];
  });

  it ("Initializes new objects", function () {
    expect(news instanceof NewsModel).toEqual(true);
  });

  it ("Saves news", function () {
    news.save(stories);
    expect(news.storyList.length).toEqual(1);
  });

  it("Gets a news title", function () {
    expect(news.getTitle(0)).toEqual("My news name");
  });

});

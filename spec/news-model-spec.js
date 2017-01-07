describe("NewsModel",function (){

  var news = new NewsModel ();

  beforeEach(function (){
    stories = jasmine.createSpy("stories");
  });

  it ("Initializes new objects", function () {
    expect(news instanceof NewsModel).toEqual(true);
  });

  it ("Saves stories", function () {
    news.save(stories);
    expect(news.storyList.length).toEqual(1);
  });

});

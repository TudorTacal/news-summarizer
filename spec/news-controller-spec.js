describe("NewsController", function (){
  var controller;
  
  beforeEach(function (){
    controller = new NewsController();
  });

  it ("Initializes new objects", function () {
    expect(controller instanceof NewsController).toEqual(true);
  });


});

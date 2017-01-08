var view = new NewsView();
var story = {
  webTitle: "My headline"
};
var storyList = [];
storyList.push(story);
view.displayHeadlines(storyList);
var controller = new NewsController();
controller.apiRequest();

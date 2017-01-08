
var controller = new NewsController();
controller.apiRequest();
window.addEventListener("hashchange", function (){
  controller.aylienRequest(controller.NewsModel.getUrl(self.grabId()));
});

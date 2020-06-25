function myFunction() {
  
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  const pageElement = slide.getPageElementById('g704690fb32_0_36');
  
  const video = pageElement.asVideo();
  //Logger.log(slide.getVideos());
  
  //slide.insertVideo('https://www.youtube.com/watch?v=Rdvi8WNKcoo');
  //Logger.log(video.getUrl());
  //Logger.log(video.getVideoId());
  Logger.log(video.getThumbnailUrl())
}

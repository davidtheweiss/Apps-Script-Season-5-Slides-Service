function myFunction() {
  
  const picture = DriveApp.getFilesByName("Duke.JPG").next()
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  const pageElement = slide.getPageElementById('g704690fb32_0_32');
  
  const image = pageElement.asImage();
  Logger.log(slide.getImages());
  
  //slide.insertImage('https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
  
//  Logger.log(image.getContentUrl());
//  Logger.log(image.getSourceUrl());
  
  image.replace(picture, true);
}

function myFunction() {
  
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  const pageElement = slide.getPageElementById('g704690fb32_0_37');
  
  const wordArt = pageElement.asWordArt();
  //Logger.log(slide.getWordArts());
  
  //slide.insertWordArt(wordArt);
  Logger.log(wordArt);
}

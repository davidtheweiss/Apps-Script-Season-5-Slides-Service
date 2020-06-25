function myFunction() {
  
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  
  //Logger.log(slide.getPageElements().map(el => el.getPageElementType()));
  const pageElement = slide.getPageElementById('g704690fb32_0_32');
  
  slide.insertPageElement(pageElement);
}

function myFunction() {
  
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  const pageElement = slide.getPageElementById('g7ee03b028f_0_3');
  const pageElementsToGroup = slide.getShapes().slice(0, 2);
  
  const group = slide.getGroups()[0];
  //Logger.log(slide.getGroups());
  
  //slide.group(pageElementsToGroup);
  
  Logger.log(group.getChildren());
}

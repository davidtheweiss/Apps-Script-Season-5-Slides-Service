function myFunction() {
  
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  const image = slide.getImages()[0];
  const shape = slide.getShapes()[0];
  const pageElement = slide.getPageElementById('g704690fb32_0_33');
  
  const line = pageElement.asLine();
  //Logger.log(slide.getLines());
  
  //slide.insertLine(SlidesApp.LineCategory.CURVED, 200, 50, 250, 150);
  
  //line.setStartConnection(image.getConnectionSites()[6])
  //line.setEndConnection(shape.getConnectionSites()[1])
  line.setEndArrow(SlidesApp.ArrowStyle.OPEN_ARROW);
}

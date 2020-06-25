function myFunction() {
  
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  const pageElement = slide.getPageElementById('g704690fb32_0_34');
  
  const shape = pageElement.asShape();
  //Logger.log(slide.getShapes());
  
  //slide.insertShape(SlidesApp.ShapeType.STARBURST, 100, 50, 150, 100);
  //slide.insertTextBox("How are you?");
  
  Logger.log(shape.getText().setText("I am more officially known as a Shape"));
}

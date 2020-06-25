function myFunction() {
  
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  const pageElement = slide.getPageElementById('g704690fb32_0_35');
  
  const table = pageElement.asTable();
  //Logger.log(slide.getTables());
  
  //slide.insertTable(4, 5);
  //Logger.log(table.getCell(2, 2).getText());
  table.insertColumn(3);
  table.insertRow(5);
}

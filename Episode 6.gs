function myFunction() {
  
  const spreadsheet = SpreadsheetApp.openById('1W8c-L-meTtNrLgBh0JJfi4ScpHvBCgj7ayIz0BecSpU')
  const chart = spreadsheet.getSheetByName('Bar').getCharts()[0];
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const slide = presentation.getSlideById('g704690fb32_0_25');
  const pageElement = slide.getPageElementById('g704690fb32_0_28');
  
  const sheetsChart = pageElement.asSheetsChart();
  //Logger.log(slide.getSheetsCharts());
  
  //slide.insertSheetsChart(chart);
  //slide.insertSheetsChartAsImage(chart);
  
//  Logger.log(sheetsChart.getSpreadsheetId());
//  Logger.log(sheetsChart.getChartId());
  sheetsChart.refresh()
  
}

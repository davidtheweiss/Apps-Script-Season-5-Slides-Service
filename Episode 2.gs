function myFunction() {
  
  const presentation = SlidesApp.openById('10FSrRLakGYUQQDo-Jonm0NvBF1OyLGTl5Cra3LWcQ0c');
  const otherPresentation = SlidesApp.openById('1bgcTr41V9NTFLwHdI32qw9EdQC5ahzbgikc8svs6aKI');
  
  //Logger.log(presentation.getSlides());
  
  const slide = otherPresentation.getSlideById('gd251bb473_0_600');
  
  //slide.duplicate()
  
  presentation.insertSlide(1, slide, SlidesApp.SlideLinkingMode.LINKED);
}

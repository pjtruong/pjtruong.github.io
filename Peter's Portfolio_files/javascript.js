var a = $(".navbar").offset().top;

$(document).ready(function(){

  $('.navbar').css({"padding-top":"3%"});
  $('.navbar').css({"padding-bottom":"3%"});  

});

$(document).scroll(function(){
    if($(this).scrollTop() > a || $(this).scrollTop() < a)
    {   
       $('.navbar').css({"background":"black"});
      
       $('.navbar').css({"padding-top":""});
       $('.navbar').css({"padding-bottom":""});
     
        
       
    } else {
       $('.navbar').css({"background":"transparent"});
          $('.navbar').css({"padding-top":"3%"});
       $('.navbar').css({"padding-bottom":"3%"});
         
    }
});



// set up text to print, each item in array is new line
var aText = new Array(
"a web developer, guitar player, amateur video maker,", 
"lifelong gamer, and more..."
);
var iSpeed = 60; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();


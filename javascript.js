var a = $(".navbar").offset().top;

$(document).ready(function(){

  $('.navbar').css({"padding-top":"3%"});
       $('.navbar').css({"padding-bottom":"3%"});
       $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

});

$(document).scroll(function(){
    if($(this).scrollTop() > a || $(this).scrollTop() < a)
    {   
       $('.navbar').css({"background":"black"});
      
       $('.navbar').css({"padding-top":""});
       $('.navbar').css({"padding-bottom":""});
       $('.navbar').css({"border-bottom":""});
        
       
    } else {
       $('.navbar').css({"background":"transparent"});
          $('.navbar').css({"padding-top":"3%"});
       $('.navbar').css({"padding-bottom":"3%"});
         
    }
});



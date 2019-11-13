$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $(".hamburger a").click(function(){
    $(".menu").css({"visibility": "visible", "z-index": "1"});
    $(".listMenu a").css("opacity","1");
    $(".croix").css("opacity","1");
    $("#bar1").css("transform","rotate(45deg)");
    $("#bar2").css("transform","rotate(-45deg)");
    $("header a span").css("opacity","0");
  });

  $(".croix").click(function(){
    $(".menu").css({"visibility": "hidden", "z-index": "0"});
    $(".croix").css("opacity","0");
    $("header a span").css("opacity","1");
  });

    $(".sidebar span").click(function(){
      $(".sidebar span").removeClass("active");
      $(this).addClass("active");

    });



    $(".cat_card").mouseover(function(){
        $(".cat_card").removeClass("cat_card_hovered");
        $(this).addClass("cat_card_hovered");
        $(".ctnHidden").css("opacity","1");
        $(".ctnHidden p").css("transform","translateY(-30px)");
        });

    $(".cat_card").mouseout(function(){
        $(".ctnHidden").css("opacity","0");
        $(".ctnHidden p").css("transform","translateY(30px)");
      });

      var taille = 570;

      $("#flecheG").click(function(){
        
          $(".slide").css("transform","translateX(0px)");
        
      });

      $("#flecheD").click(function(){
        $(".slide").css("transform","translateX(-"+taille+"px)");
      });
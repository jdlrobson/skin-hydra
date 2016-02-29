/**
 *  Magical Footer Mover.
 *  Make sure its always below the nav panel.
 */
(function(){

    $(".portal .body ul").each(function(){
       for (var i = 1; i < 35; i++) {
         $(this).append('<li id="t-garbage'+i+'"><a href="#">Garbage Link '+i+'</a></li>');
       }
    });

    $footer = $('footer');
    $nav = $('#mw-panel');

    // Rezise Listener - Using ResizeSensor.js
    new ResizeSensor($nav[0],function(){

        var navHeight = $nav.height() + $nav.position()['top'];
        var footerTop = $footer.position()['top'];

        if (footerTop < navHeight) {
            // If the footer is resting over the nav,
            // then lets apply CSS to bump it 50px below
            // the nav.
            var newTop = (navHeight - footerTop) + 50;
            $footer.css('margin-top',newTop+'px');
        } else {
            $footer.css('margin-top','0px');
        }
    });
}());
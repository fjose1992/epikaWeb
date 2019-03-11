
/*START: INICIALIZACION DE DE metisMenu*/
(function(window, document, $, undefined){

    $(function(){
        var sidebarNav = jQuery(".sidebar-nav");
        if (sidebarNav.length > 0) {
                $('#sidebarNav').metisMenu();
        }
    });

})(window, document, window.jQuery);
/*END: INICIALIZACION DE DE metisMenu*/


/*START: ONCLICK EVENTS TOGGLE PARA BOTONES DE MENU */
(function(window, document, $, undefined){

    $(function(){      
   
    $('.mobile-toggle').on('click', function() {
        $('body').toggleClass('sidebar-toggled');
      });

      $(document).on('click', '.mega-menu.dropdown-menu', function (e) {
        e.stopPropagation();
      });

      $('.sidebar-toggle').on('click', function() {
        $('body').toggleClass('sidebar-mini');
        $('.app-navbar').toggleClass('expand');
      });

      $('.app-navbar').hover(function() {
        if($('body').hasClass('sidebar-mini')) {
          $('.navbar-header').toggleClass('expand');
        }
      });

      $('.search').on('click', function() {
        $('.search-wrapper').fadeIn(200);
      });

       //Search Box Close 
       $('.close-btn').on('click', function() {
        $('.search-wrapper').fadeOut(200);
      });
    });
})(window, document, window.jQuery);
/*END: ONCLICK EVENTS TOGGLE PARA BOTONES DE MENU */
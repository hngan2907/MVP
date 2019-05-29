
(function($) {
  $(document).ready(function() {
    $(".btn-1").click(function() {
      $("#col1").toggle();
    });
    $(".btn-2").click(function() {
      $("#col2").toggle();
    });

    $(function() {
      var menu = $('.sidebar > ul');
      menu.find('.sub > ul').hide();

      menu.on('click', function(event) {
        event.preventDefault();


        var targetParent = $(event.target).parent();
        if (targetParent.hasClass('sub')) {
          targetParent.toggleClass('active');
          targetParent.children('ul').slideToggle(250);
        }
      })
    });
    document.getElementByclassName("drop").addEventListener("toggle", myFunction);

  });
})(jQuery);

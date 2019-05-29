(function($) {
  $(document).ready(function() {
    $(".btn-1").click(function() {
      $("#col1").toggle();
    });
    $(".btn-2").click(function() {
      $("#col2").toggle();
    });
    $(".btn-3").click(function() {
      $("#col3").toggle();
    });
    $(".btn-4").click(function() {
      $("#col4").toggle();
    });
    $(".btn-5").click(function() {
      $("#col5").toggle();
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

  });
})(jQuery);

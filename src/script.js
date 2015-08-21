$(".wrapper")
  .on("click", ".pulltab-left, .pulltab-right", function(event) {
    var $panel = $(this).parent();
    var $content = $panel.siblings(".content");
    
    $panel.toggleClass('active inactive');
    
    if($panel.hasClass('sidebar-left')) {
      $content.toggleClass('content-left');
    }
  
    if($panel.hasClass('sidebar-right')) {
      $content.toggleClass('content-right');
    }
});
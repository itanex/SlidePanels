module NgSlidePanel {
  $('.wrapper')
    .on('click', '.pulltab-left, .pulltab-right', PanelSlideHandler);

    function PanelSlideHandler(event) {
      let $panel = $(this).parent();
      let $content = $panel.siblings('.content');

      $panel.toggleClass('active inactive');

      if ($panel.hasClass('sidebar-left')) {
        $content.toggleClass('content-left');
      }

      if ($panel.hasClass('sidebar-right')) {
        $content.toggleClass('content-right');
      }
    }
}
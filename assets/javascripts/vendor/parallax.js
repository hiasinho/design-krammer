(function() {
  var parallax;

  parallax = function(plxWindow) {
    var plxBackground, plxBackgroundTopToPageTop, plxBackgroundTopToWindowBottom, plxBackgroundTopToWindowTop, plxSpeed, plxWindowTopToPageTop, plxWindowTopToWindowTop, windowInnerHeight, windowTopToPageTop;
    plxBackground = plxWindow.find(".parallax-background");
    plxWindowTopToPageTop = $(plxWindow).offset().top;
    windowTopToPageTop = $(window).scrollTop();
    plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;
    plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    windowInnerHeight = window.innerHeight;
    plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    plxSpeed = 0.15;
    return plxBackground.css("top", -(plxWindowTopToWindowTop * plxSpeed) + "px");
  };

  $(document).ready(function() {
    return $('.parallax-window').each(function() {
      return parallax($(this));
    });
  });

  $(window).scroll(function(e) {
    return $('.parallax-window').each(function() {
      return parallax($(this));
    });
  });

}).call(this);

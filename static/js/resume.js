(function ($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  function resizeFacebookEmbeds() {
    $(
      ".facebook-embed-grid iframe[src*='facebook.com/plugins/video.php']",
    ).each(function () {
      var iframe = this;
      var iframeRect = iframe.getBoundingClientRect();
      var embedWidth = Math.round(
        iframeRect.width || $(iframe).parent().width(),
      );

      if (!embedWidth) {
        return;
      }

      embedWidth = Math.max(240, Math.min(560, embedWidth));

      try {
        var url = new URL(iframe.src);
        var currentWidth = parseInt(url.searchParams.get("width"), 10);

        if (Math.abs(currentWidth - embedWidth) < 12) {
          return;
        }

        url.searchParams.set("width", embedWidth);
        iframe.width = embedWidth;
        iframe.height = Math.round((embedWidth * 9) / 16);
        iframe.src = url.toString();
      } catch (error) {
        iframe.width = embedWidth;
        iframe.height = Math.round((embedWidth * 9) / 16);
      }
    });
  }

  var resizeTimer;

  $(window).on("load resize orientationchange", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeFacebookEmbeds, 150);
  });
})(jQuery); // End of use strict

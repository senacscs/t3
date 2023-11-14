$(".item--carousel").click(function () {
  // Item already active
  var elAlreadyActive = $(".item--carousel.active");
  // item already active position
  var elAlreadyActivePosition = $(".item--carousel.active").index();

  $(".item--carousel").removeClass("active");
  var elNowActive = $(this).addClass("active");
  $(this).removeClass("showme");
  // how many elements carousel has
  var elLenght = $(".item--carousel").length;
  console.log("ElementLength: " + elLenght);
  // active element position now
  var elPosition = $(this).index();
  console.log("activePosition: " + elPosition);
  // element before active item
  var elBeforeThis = $(this).prev().index();
  console.log("positionBefore: " + elBeforeThis);
  // element after active item
  var elAfterThis = $(this).next().index();
  console.log("positionAfter: " + elAfterThis);

  if (elBeforeThis >= 0 && elAfterThis != -1) {
    console.log("Lets Slide");

    if (elPosition > elAlreadyActivePosition) {
      $(this).prev().prev().addClass("hideme");
      $(this).prev().prev().addClass("redux");
      console.log("Its Superior");
    } else if (elPosition < elAlreadyActivePosition) {
      $(this).prev().removeClass("hideme");
      $(this).prev().removeClass("redux");
      $(this).prev().addClass("showme");

      console.log("Its Not Superior");
    }
  } else {
    console.log("We Cant Slide");
  }
});

//actualizar a posicao da class active no carrosel de testemuhos
if ($(window).width() < 768) {
  $(".inner--carousel .item--carousel").removeClass("active");
  $(".inner--carousel .item--carousel").first().addClass("active");
} else {
  $(".inner--carousel .item--carousel").removeClass("active");
  $(".inner--carousel .item--carousel").first().next().addClass("active");
}

$(window).resize(function () {
  $("window")
    .$("body")
    .prepend("<div>" + $(window).width() + "</div>");

  //actualizar a posicao da class active no carrosel de testemuhos
  if ($(window).width() < 768) {
    $(".inner--carousel .item--carousel").removeClass("active");
    $(".inner--carousel .item--carousel").first().addClass("active");
  } else {
    $(".inner--carousel .item--carousel").removeClass("active");
    $(".inner--carousel .item--carousel").first().next().addClass("active");
  }
});

$(".indicators--carousel span").click(function () {
  $(".indicators--carousel span").removeClass("active");
  $(this).addClass("active");
  var pos = $(this).index();
  $(".inner--carousel").find(".item--carousel").removeClass("active");
  $(".inner--carousel").find(".item--carousel").css("order", "10");
  var activeItem = $(".item--carousel").eq(pos);
  $(activeItem).addClass("active");
  $(activeItem).css("order", 1);
});

//mobile swipe
$(".person-carousel .inner--carousel").on("touchstart", function (event) {
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function (event) {
    var xMove = event.originalEvent.touches[0].pageX;
    if (Math.floor(xClick - xMove) > 5) {
      console.log("left");
      funHoldActive();
      function funHoldActive() {
        var active = $(".item--carousel.active");
        if (!active.is(".item--carousel:first")) {
          $(".item--carousel").removeClass("active");
          $(".item--carousel").css("order", "10");
          $(active).prev().addClass("active");
          $(active).prev().css("order", 1);
          $(".indicators--carousel span.active")
            .removeClass("active")
            .prev()
            .addClass("active");
        }
      }
    } else if (Math.floor(xClick - xMove) < -5) {
      console.log("right");
      okokXD();
      function okokXD() {
        var active = $(".item--carousel.active");
        if (!active.is(".item--carousel:last")) {
          $(".item--carousel").css("order", "10");
          $(".item--carousel.active")
            .removeClass("active")
            .next()
            .css("order", "1")
            .addClass("active");
          $(".indicators--carousel span.active")
            .removeClass("active")
            .next()
            .addClass("active");
        }
      }
    }
  });
  $(".person-carousel .inner--carousel").on("touchend", function () {
    $(this).off("touchmove");
  });
});

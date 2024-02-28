$(document).ready(function() {
  // Ativação do item do carrossel ao ser clicado
  $(".item--carousel").click(function() {
    var elAlreadyActivePosition = $(".item--carousel.active").index();
    $(".item--carousel").removeClass("active");
    var elNowActive = $(this).addClass("active");
    $(this).removeClass("showme");

    var elPosition = $(this).index();

    // Verifica se há elementos antes e depois do item ativo
    var elBeforeThis = $(this).prev().index();
    var elAfterThis = $(this).next().index();

    if (elBeforeThis >= 0 && elAfterThis !== -1) {
      if (elPosition > elAlreadyActivePosition) {
        $(this).prev().prev().addClass("hideme redux");
      } else if (elPosition < elAlreadyActivePosition) {
        $(this).prev().removeClass("hideme redux");
        $(this).prev().addClass("showme");
      }
    }
  });

  // Atualiza a posição do item ativo no carrossel de acordo com a largura da janela
  function updateActiveItemPosition() {
    if ($(window).width() < 768) {
      $(".inner--carousel .item--carousel").removeClass("active");
      $(".inner--carousel .item--carousel").first().addClass("active");
    } else {
      $(".inner--carousel .item--carousel").removeClass("active");
      $(".inner--carousel .item--carousel").first().next().addClass("active");
    }
  }

  // Chamada da função ao carregar a página e redimensionar a janela
  updateActiveItemPosition();
  $(window).on('resize', function() {
    updateActiveItemPosition();
  });

  // Controle dos indicadores do carrossel
  $(".indicators--carousel span").click(function() {
    $(".indicators--carousel span").removeClass("active");
    $(this).addClass("active");
    var pos = $(this).index();
    $(".inner--carousel .item--carousel").removeClass("active").css("order", "10");
    var activeItem = $(".item--carousel").eq(pos);
    $(activeItem).addClass("active").css("order", 1);
  });

  // Swipe em dispositivos móveis
  $(".person-carousel .inner--carousel").on("touchstart", function(event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event) {
      var xMove = event.originalEvent.touches[0].pageX;
      var distance = xClick - xMove;

      if (distance > 5) {
        // Swipe para a esquerda
        moveCarousel('left');
      } else if (distance < -5) {
        // Swipe para a direita
        moveCarousel('right');
      }
    });
    $(".person-carousel .inner--carousel").on("touchend", function() {
      $(this).off("touchmove");
    });
  });

  // Função para mover o carrossel
  function moveCarousel(direction) {
    var active = $(".item--carousel.active");

    if (direction === 'left' && !active.is(".item--carousel:first")) {
      active.removeClass("active").css("order", "10");
      active.prev().addClass("active").css("order", "1");
      $(".indicators--carousel span.active").removeClass("active").prev().addClass("active");
    } else if (direction === 'right' && !active.is(".item--carousel:last")) {
      active.removeClass("active").css("order", "10");
      active.next().addClass("active").css("order", "1");
      $(".indicators--carousel span.active").removeClass("active").next().addClass("active");
    }
  }
});

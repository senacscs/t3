document.addEventListener('DOMContentLoaded', () => {
    const arrayDeCartas = [
      {
        name: '1',
        img: 'https://1.bp.blogspot.com/-OT-Qv9imIcE/YFPLwffGHfI/AAAAAAAASbM/tMUxrWjXMoEILFQGqPdccmmVelV9_IlQQCNcBGAsYHQ/s16000/cbjr02.jpg'
      },
      {
        name: '2',
        img: 'https://cdns-images.dzcdn.net/images/artist/1a2e562dde23cdbd9abea4bae13eb4fc/500x500.jpg'
      },
      {
        name: '3',
        img: 'https://www.vagalume.com.br/charlie-brown-jr/images/charlie-brown-jr.jpg'
      },
      {
        name: '4',
        img: 'https://www.guiadasemana.com.br/contentFiles/system/pictures/2013/9/90328/original/charlie-brown-jr.jpg'
      },
      {
        name: '5',
        img: 'https://i.scdn.co/image/ab67616d0000b2732ef73259916f5559222fc62a'
      },
      {
        name: '6',
        img: 'https://akamai.sscdn.co/tb/cifra-blog/pt/wp-content/uploads/2019/08/abalando-sua-fabrica_charlie-brown-jr.jpg'
      },
      {
        name: '1',
        img: 'https://1.bp.blogspot.com/-OT-Qv9imIcE/YFPLwffGHfI/AAAAAAAASbM/tMUxrWjXMoEILFQGqPdccmmVelV9_IlQQCNcBGAsYHQ/s16000/cbjr02.jpg'
      },
      {
        name: '2',
        img: 'https://cdns-images.dzcdn.net/images/artist/1a2e562dde23cdbd9abea4bae13eb4fc/500x500.jpg'
      },
      {
        name: '3',
        img: 'https://www.vagalume.com.br/charlie-brown-jr/images/charlie-brown-jr.jpg'
      },
      {
        name: '4',
        img: 'https://www.guiadasemana.com.br/contentFiles/system/pictures/2013/9/90328/original/charlie-brown-jr.jpg'
      },
      {
        name: '5',
        img: 'https://i.scdn.co/image/ab67616d0000b2732ef73259916f5559222fc62a'
      },
      {
        name: '6',
        img: 'https://akamai.sscdn.co/tb/cifra-blog/pt/wp-content/uploads/2019/08/abalando-sua-fabrica_charlie-brown-jr.jpg'
      }
    ]
    arrayDeCartas.sort(() => 0.5 - Math.random())
    const tabuleiro = document.querySelector('.tabuleiro')
    const resultado = document.querySelector('#pontuacao')
    const placeholder = 'https://i.pinimg.com/564x/52/a4/dc/52a4dcd6150483b2fbf874a909d81261.jpg'
    const branco = 'https://i.pinimg.com/564x/7b/5a/06/7b5a06317aecf1c137d3f675d6d55118.jpg'
  
    var cartasClicadas = []
    var cartasClicadasId = []
    var cartasCombinadas = []
  
    function criarTabuleiro() {
      for (let i = 0; i < arrayDeCartas.length; i++) {
        var carta = document.createElement('img')
        carta.setAttribute('src', placeholder)
        carta.setAttribute('data-id', i)
        carta.addEventListener('click', viraCarta)
        tabuleiro.appendChild(carta)
      }
    }
  
    function viraCarta() {
      var cartaId = this.getAttribute('data-id')
      cartasClicadas.push(arrayDeCartas[cartaId].name)
      cartasClicadasId.push(cartaId)
      this.setAttribute('src', arrayDeCartas[cartaId].img)
      if (cartasClicadas.length === 2) {
        setTimeout(checarPorCombinacao, 500)
      }
    }
    function checarPorCombinacao() {
      var cartas = document.querySelectorAll('img')
      const primeiraCarta = cartasClicadasId[0]
      const segundaCarta = cartasClicadasId[1]
      if (primeiraCarta === segundaCarta) {
        cartas[primeiraCarta].setAttribute('src', placeholder)
        cartas[segundaCarta].setAttribute('src', placeholder)
        alert('Você clicou na mesma carta!')
      }
      else if (cartasClicadas[0] === cartasClicadas[1]) {
        cartas[primeiraCarta].setAttribute('src', branco)
        cartas[segundaCarta].setAttribute('src', branco)
        cartasCombinadas.push(cartasClicadas)
        cartas[primeiraCarta].removeEventListener('click', viraCarta)
        cartas[segundaCarta].removeEventListener('click', viraCarta)
      }
      else {
        cartas[primeiraCarta].setAttribute('src', placeholder)
        cartas[segundaCarta].setAttribute('src', placeholder)
      }
      cartasClicadas = []
      cartasClicadasId = []
      resultado.textContent = cartasCombinadas.length
      if (cartasCombinadas.length === arrayDeCartas.length / 2) {
        resultado.textContent = 'Você ganhou!!!'
      }
    }
    criarTabuleiro()
  })
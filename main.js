function sum() {
  let endScore

  let nota1 = parseFloat(document.getElementById('nota1').value)
  let nota2 = parseFloat(document.getElementById('nota2').value)
  let nota3 = parseFloat(document.getElementById('nota3').value)
  let nota4 = parseFloat(document.getElementById('nota4').value)

  endScore = Math.round((nota1 + nota2 + nota3 + nota4) / 4)

  let elemento1 = document.getElementById('bravo')
  let elemento2 = document.getElementById('feliz')

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    {
      document.getElementById('resultado').innerHTML =
        'Preencha todos os campos!'
    }
  } else if (endScore > 30) {
    document.getElementById('resultado').innerHTML =
      'Coloque um limite de 30 por linha!'
  } else if (endScore >= 0 && 18 >= endScore) {
    elemento2.classList.remove('show')
    elemento1.classList.add('show')

    document.getElementById('resultado').innerHTML =
      'Parabéns ' + `! Você foi reprovado(a). Sua média é ${endScore}!`
  } else if (endScore > 18 && endScore <= 30) {
    elemento1.classList.remove('show')
    elemento2.classList.add('show')

    document.getElementById('resultado').innerHTML =
      'Parabéns ' + `! Você foi aprovado(a). Sua média é ${endScore}!`
  }
}

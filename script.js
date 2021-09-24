var name = "Adam"
console.log("Seja Bem vindo! " + name + " A baixo está sua média")

function calcMedia() {
  let notaDoPrimeiroBimestre = 9
  let notaDoSegundoBimestre = 7
  let notaDoTerceiroBimestre = 3
  let notaDoQuartoBimestre = 6
  
  let notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre +   notaDoTerceiroBimestre +  notaDoQuartoBimestre) / 4

  const notaFixada = notaFinal.toFixed(1)
  
  if (notaFinal >= 5.5 ) {
    console.log("Sua nota foi: " + notaFixada + " Está na Média")
    
  } else {
    console.log("Sua nota foi: " + notaFixada + " Está Abaixo da Média")
    
  }
}

calcMedia()
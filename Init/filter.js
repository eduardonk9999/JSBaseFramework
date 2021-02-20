const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
]

const precosFiltro = precos.filter(prec => {
  if(prec.includes("R$")) {
    return true
  } else {
    return false
  }
})


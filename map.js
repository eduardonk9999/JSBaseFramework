const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
]

const precoNumeros = precos.map(function(preco){
  return Number(preco.replace("R$ ", ""))
})
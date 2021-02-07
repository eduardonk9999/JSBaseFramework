// https://ranekapi.origamid.dev/wp-json/api/produto

const requisicao = fetch("https://ranekapi.origamid.dev/wp-json/api/produto").
  then(response => {
    console.log(response)
    return response.json()
  }).
  then(jsonBody => {
    console.log(jsonBody);
  })


  const data = {
    id: 'eduardo',
    nome: "Eduardo"
  }
  // POST 
  fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
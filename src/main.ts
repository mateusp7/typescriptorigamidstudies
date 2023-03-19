import getDataApi from "./fetchData"
import TransacaoAPI from "./Interfaces/TransacaoAPI"
// import createTable from "./createTable"
import normalizarTransacao from "./utils/normalizarTransacao"
// import checkInterface from "./utils/checkInterface"

async function handleData() {
  const data = await getDataApi<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  )
  if (!data) return
  const transacoesFormatada = data.map(normalizarTransacao)
  console.log(transacoesFormatada)
  // console.log(checkInterface<TransacaoAPI>(data, "Nome"))
  // if (checkInterface<TransacaoAPI>(data, "Cliente Novo")) {
  //   console.log("Entrou no if")
  //   data.map((item) => console.log(item["Cliente Novo"]))
  // }
}

handleData()

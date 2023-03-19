import getDataApi from "./fetchData"
import TransacaoAPI from "./Interfaces/TransacaoAPI"
import createTable from "./createTable"
import normalizarTransacao from "./utils/normalizarTransacao"
// import checkInterface from "./utils/checkInterface"

async function handleData() {
  const data = await getDataApi<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  )
  if (!data) return
  const transacoesFormatada = data.map(normalizarTransacao)
  transacoesFormatada.forEach((item) => {
    createTable(item)
  })
}

handleData()

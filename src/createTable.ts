import Transacoes from "./Interfaces/TransacaoAPI"

export default function createTable(dados: any) {
  const table = document.querySelector("table")

  const tr = document.createElement("tr")
  tr.classList.add("contentTables")

  const tdName = document.createElement("td")
  tdName.textContent = dados.nome

  const tdEmail = document.createElement("td")
  tdEmail.textContent = dados.email

  const tdCompra = document.createElement("td")
  tdCompra.textContent = dados.moeda

  const tdPagamento = document.createElement("td")
  tdPagamento.textContent = dados.pagamento

  const tdStatus = document.createElement("td")
  tdStatus.textContent = dados.status

  tr.appendChild(tdName)
  tr.appendChild(tdEmail)
  tr.appendChild(tdCompra)
  tr.appendChild(tdPagamento)
  tr.appendChild(tdStatus)

  if (table) {
    table.appendChild(tr)
  }
  return tr
}

import Transacoes from "./Interfaces/TransacaoAPI"

export default function createTable(dados: Transacoes) {
  const table = document.querySelector("table")

  const tr = document.createElement("tr")
  tr.classList.add("contentTables")

  const tdName = document.createElement("td")
  tdName.textContent = dados.Nome

  const tdEmail = document.createElement("td")
  tdEmail.textContent = dados.Email

  const tdCompra = document.createElement("td")
  tdCompra.textContent = dados["Valor (R$)"]

  const tdPagamento = document.createElement("td")
  tdPagamento.textContent = dados["Forma de Pagamento"]

  const tdStatus = document.createElement("td")
  tdStatus.textContent = dados.Status

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

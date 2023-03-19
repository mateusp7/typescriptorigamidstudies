import Transacao from "./Interfaces/Transacao"

export default function createTable(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody")
  if (!tabela) return
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>R$ ${transacao.moeda}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    `
  })

  // const tbody = document.createElement("tbody")
  // table.appendChild(tbody)

  // const tr = document.createElement("tr")
  // tr.classList.add("contentTables")

  // tbody.appendChild(tr)

  // const tdName = document.createElement("td")
  // tdName.textContent = dados.nome

  // const tdEmail = document.createElement("td")
  // tdEmail.textContent = dados.email

  // const tdCompra = document.createElement("td")
  // tdCompra.textContent = dados.moeda

  // const tdPagamento = document.createElement("td")
  // tdPagamento.textContent = dados.pagamento

  // const tdStatus = document.createElement("td")
  // tdStatus.textContent = dados.status

  // tr.appendChild(tdName)
  // tr.appendChild(tdEmail)
  // tr.appendChild(tdCompra)
  // tr.appendChild(tdPagamento)
  // tr.appendChild(tdStatus)

  // table.appendChild(tr)
  // return tr
}

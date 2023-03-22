import Estatisticas from "./class/Estatistica"
import Transacao from "./Interfaces/Transacao"
import preencherLista from "./preencherLIsta"

export default function preencherEstatisticas(transacoes: Transacao[]) {
  const data = new Estatisticas(transacoes)
  const totalElement = document.querySelector<HTMLElement>("#total span")

  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const diaElement = document.querySelector<HTMLElement>("#dia span")
  if (data.melhorDia) {
    if (diaElement) diaElement.innerText = data.melhorDia[0]
  }

  preencherLista(data.pagamento, "pagamento")
  preencherLista(data.status, "status")
}

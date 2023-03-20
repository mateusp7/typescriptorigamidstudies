import Estatisticas from "./class/Estatistica"
import Transacao from "./Interfaces/Transacao"
import preencherLista from "./preencherLIsta"

export default function preencherEstatisticas(transacoes: Transacao[]) {
  const data = new Estatisticas(transacoes)
  const totalElements = document.querySelector<HTMLElement>("#total span")
  if (!totalElements) return

  totalElements.innerText = data.total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  preencherLista(data.pagamento, "pagamento")
  preencherLista(data.status, "status")
}

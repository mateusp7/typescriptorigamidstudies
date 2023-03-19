import TransacaoAPI from "../Interfaces/TransacaoAPI"
import transformModaToNumber from "./moedaToNumber"

export default function normalizarTransacao(transacao: TransacaoAPI) {
  return {
    data: transacao.Data,
    email: transacao.Email,
    id: transacao.ID,
    nome: transacao.Nome,
    status: transacao.Status,
    moeda: transacao["Valor (R$)"],
    valor: transformModaToNumber(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
  }
}

import TransacaoAPI from "../Interfaces/TransacaoAPI"
import transformModaToNumber from "./moedaToNumber"
import stringToDate from "./stringToDate"

export default function normalizarTransacao(transacao: TransacaoAPI) {
  return {
    data: stringToDate(transacao.Data),
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

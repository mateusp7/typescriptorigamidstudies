import Transacao from "../Interfaces/Transacao"
import TransacaoAPI from "../Interfaces/TransacaoAPI"
import transformMoedaToNumber from "./moedaToNumber"
import stringToDate from "./stringToDate"

export default function normalizarTransacao(
  transacao: TransacaoAPI
): Transacao {
  return {
    data: stringToDate(transacao.Data),
    email: transacao.Email,
    id: transacao.ID,
    nome: transacao.Nome,
    status: transacao.Status,
    moeda: transacao["Valor (R$)"],
    valor: transformMoedaToNumber(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
  }
}

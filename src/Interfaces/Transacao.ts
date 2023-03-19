import TransacaoPagamento from "../types/TransacaoPagamento"
import TransacaoStatus from "../types/TransacaoStatus"

export default interface Transacao {
  data: Date
  email: string
  id: number
  nome: string
  status: TransacaoStatus
  moeda: string
  valor: number | null
  pagamento: TransacaoPagamento
  novo: boolean
}

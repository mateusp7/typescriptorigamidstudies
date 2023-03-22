import TransacaoPagamento from "../types/TransacaoPagamento"
import TransacaoStatus from "../types/TransacaoStatus"

export default interface TransacaoAPI {
  ["Cliente Novo"]: number
  Data: string
  Email: string
  ["Forma de Pagamento"]: TransacaoPagamento
  ID: number
  Nome: string
  Status: TransacaoStatus
  ["Valor (R$)"]: string
}

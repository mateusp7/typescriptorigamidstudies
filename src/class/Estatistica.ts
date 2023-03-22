import countBy from "../countBy"
import Transacao from "../Interfaces/Transacao"

type TransacaoValor = Transacao & { valor: number }
function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null
}

export default class Estatisticas {
  private transacoes
  total
  pagamento
  status
  semana
  melhorDia
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes
    this.total = this.setTotal()
    this.pagamento = this.setPagamento()
    this.status = this.setStatus()
    this.semana = this.setSemana()
    this.melhorDia = this.setMelhorDia()
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor
    }, 0)
  }

  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento))
  }

  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status))
  }

  private setSemana() {
    const semana = {
      domingo: 0,
      segunda: 1,
      terca: 2,
      quarta: 3,
      quinta: 4,
      sexta: 5,
      sabado: 6,
    }
    for (let i = 0; i < this.transacoes.length; i++) {
      const day = this.transacoes[i].data.getDay()
      switch (day) {
        case 0:
          semana.domingo += 1
          break
        case 1:
          semana.segunda += 1
          break
        case 2:
          semana.terca += 1
          break
        case 3:
          semana.quarta += 1
          break
        case 4:
          semana.quinta += 1
          break
        case 5:
          semana.sexta += 1
          break
        case 6:
          semana.sabado += 1
      }
    }
    return semana
  }

  private setMelhorDia() {
    return Object.entries(this.setSemana()).sort().at(-1)
  }
}

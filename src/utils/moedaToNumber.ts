/**
 * Recebe String '1.200,50' e retorna number: 1200.50
 */
export default function transformModaToNumber(moeda: string): number | null {
  if (!moeda) return null
  const numero = Number(moeda.replaceAll(".", "").replaceAll(",", "."))
  return isNaN(numero) ? null : numero
}

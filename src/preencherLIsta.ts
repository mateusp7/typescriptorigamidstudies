import CountList from "./Interfaces/CountList"

export default function preencherLista(lista: CountList, containerId: string) {
  const containerElement = document.getElementById(containerId)

  if (!containerElement) return

  Object.keys(lista).forEach((key) => {
    containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`
  })
}

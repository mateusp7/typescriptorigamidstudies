import CountList from "./Interfaces/CountList"

export default function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: CountList, item) => {
    if (acc[item]) acc[item] += 1
    else acc[item] = 1
    return acc
  }, {})
}

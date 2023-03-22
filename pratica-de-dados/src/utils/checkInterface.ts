export default function checkInterface<Interface>(
  obj: unknown,
  key: keyof Interface
): obj is Interface {
  if (obj && typeof obj == "object" && key in obj) return true
  else return false
}

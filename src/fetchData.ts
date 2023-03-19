export default async function getDataApi<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url)
    if (!response.ok)
      throw new Error(
        `Error ${response.status} on request ${response.statusText}`
      )
    return await response.json()
  } catch (err) {
    if (err instanceof Error) console.error(`FetchData error: ${err.message}`)
    return null
  }
}

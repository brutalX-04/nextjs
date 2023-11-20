export const getResponseApi = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASH_URL}/${resource}?${query}`)
    return response.json()
}
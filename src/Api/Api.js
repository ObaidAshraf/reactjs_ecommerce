const URL = "https://fakestoreapi.com/"

export const getAllProducts = async () => {
    const response = await fetch(URL + "products?limit=9")
    const jsonData = await response.json()
    return jsonData
}
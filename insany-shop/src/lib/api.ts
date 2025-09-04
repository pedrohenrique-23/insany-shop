const BASE_URL = "https://api.insany.co";

export async function getProducts(page = 1, limit = 10) {
  const res = await fetch(`${BASE_URL}/api/products?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json();
}

import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://api.insany.co/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao carregar os produtos");
  }

  return res.json();
}

export default async function Home() {
  // 👇 Desestrutura o objeto e pega só o array de produtos
  const { products } = await getProducts();

  return (
    <main style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Catálogo de Produtos</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((p: any) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </main>
  );
}

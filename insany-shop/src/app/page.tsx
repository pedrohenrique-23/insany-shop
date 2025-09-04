import { getProducts } from "@/lib/api";
import { Header } from "@/components/Header";

export default async function HomePage() {
  const data = await getProducts(1, 5);

  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h2>Catálogo de Produtos</h2>
        <ul>
          {data.products.map((p: any) => (
            <li key={p.id}>{p.name} - R$ {p.price}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

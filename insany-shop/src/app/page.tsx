import { getProducts } from "@/lib/api";
import { Header } from "@/components/Header";

export default async function HomePage() {
  const data = await getProducts(1, 5);

  return (
    <>
      <Header />
    </>
  );
}

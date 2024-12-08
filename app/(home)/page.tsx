import ActiveProduct from "@/components/active-product";
import { getActiveProducts } from "@/lib/server-actions";

export default async function Home() {
  const activeProduct = await getActiveProducts();

  console.log(activeProduct, "active product");

  return (
    <>
      <div className="md:w-3/5 mx-auto py-10 px-6">
        <ActiveProduct activeProducts={activeProduct} />
      </div>
    </>
  );
}

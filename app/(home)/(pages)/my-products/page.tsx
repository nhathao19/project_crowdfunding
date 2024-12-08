import { getOwnerProducts, isUserPremium } from "@/lib/server-actions";
import Image from "next/image";
import Link from "next/link";
import { PiCrownCross, PiPlusBold } from "react-icons/pi";

const MyProducts = async () => {
  const products = await getOwnerProducts();
  const isPremeium = await isUserPremium();

  return (
    <div className="mx-auto lg:w-3/5 py-10 px-6">
      {products.length === 0 ? (
        <div>
          <h1 className="text-3xl font-bold">No products found</h1>
          <p className="text-gray-500">
            Look like you don&apos;t have any products yet. Click the button
            below to get started.
          </p>

          <Link href="/new-product">
            <div className="bg-[#51CE92] text-white mt-4 w-60 h-56 flex justify-center items-center flex-col">
              <PiPlusBold className="mb-4 text-3xl" />
              <p className="text-lg">Create a product</p>
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold">Your products</h1>
          <p>Manage your products here</p>

          {isPremeium ? (
            <div className="flex gap-x-4 items-center mt-10">
              <PiCrownCross className="text-2xl text-orange-300" />
              <p className="text-lg">You are a premium user</p>
            </div>
          ) : (
            <>
              <p className="pt-6">({products.length} / 2) free products</p>
            </>
          )}

          <>
            <p className="pt-6">({products.length} / 2) free products</p>
          </>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
            {products.map((product) => (
              <Link href={`/edit/${product.id}`} key={product.id}>
                <div
                  className="rounded-lg hover:scale-105 transition-transform
                  duration-300 ease-in-out justify-center items-center border p-2"
                >
                  <Image
                    src={product.logo}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="object-cover rounded-lg h-36 w-full"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProducts;

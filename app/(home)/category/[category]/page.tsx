import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { getProductsByCategoryName } from "@/lib/server-actions";
import Image from "next/image";
import Link from "next/link";

interface IParams {
  category: string;
}

const CategoryPage: React.FC<{ params: IParams }> = async ({ params }) => {
  const capitalizeCategory =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  const products = await getProductsByCategoryName(capitalizeCategory);

  return (
    <div className="md:w-3/5 mx-auto pt-10 px-6 md:px-0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{capitalizeCategory}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-4xl font-semibold pt-10">{capitalizeCategory}</h1>
      <p className="pt-2 text-gray-500">
        Check out what&apos;s going on in the {capitalizeCategory}! Discover new
        products
      </p>

      <div className="pt-10 space-y-4">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="flex gap-x-4 items-center p-2 rounded-md border"
          >
            <Image
              src={product.logo}
              alt="logo"
              width={1000}
              height={1000}
              className="w-16 h-16 rounded-md md:w-20 md:h-20 cursor-pointer"
            />
            <div>
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-500 text-sm md:py-2">
                {product.headline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

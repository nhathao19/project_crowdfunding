import { auth } from "@/auth";
import Navbar from "@/components/navbar/navbar";
import { getProductsByUserId } from "@/lib/server-actions";
import { redirect } from "next/navigation";

const NewProductLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const authenticatedUser = await auth();
  const products = await getProductsByUserId(authenticatedUser?.user?.id || "");

  if (products.length === 2) {
    redirect("/");
  }

  return (
    <html lang="en">
      <body>
        <Navbar authenticatedUser={authenticatedUser} products={products} />
        {children}
      </body>
    </html>
  );
};

export default NewProductLayout;

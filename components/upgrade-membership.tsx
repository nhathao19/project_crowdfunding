/* eslint-disable @typescript-eslint/no-explicit-any */
import { createCheckoutSession } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import { PiX } from "react-icons/pi";
import { toast } from "sonner";

interface UpgradeMembershipProps {
  authenticatedUser: any;
}

const UpgradeMembership: React.FC<UpgradeMembershipProps> = ({
  authenticatedUser,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCallCheckoutSession = async () => {
    try {
      const result = await createCheckoutSession({
        email: authenticatedUser.user.email,
      });

      if (result && result.url) {
        window.location.href = result.url;
      } else {
        throw new Error("Error creating checkout session");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      toast(
        <>
          <div className="flex items-center gap-4 mx-auto">
            <PiX className="text-red-500 text-3xl" />
            <p className="text-md font-semibold">
              Could not create checkout session. Please try again later.
            </p>
          </div>
        </>,
        {
          position: "top-center",
        }
      );
    }
  };

  return (
    <div className="space-y-6">
      <Image
        src={"/images/start-up-14.png"}
        width={150}
        height={150}
        alt="Upgrade Membership"
        className="mx-auto"
      />
      <h1 className="text-2xl font-semibold text-center">
        Go Pro and unlock more features
      </h1>
      <p className="text-gray-600 text-center">
        Looking to create more projects ? Upgrade your membership to unlock
        unlimited projects
      </p>

      <div className="pt-4">
        <Link
          href={`https://buy.stripe.com/test_fZe01eaRJ9Qh8tq9AB`}
          className="bg-amber-400 text-white p-2 rounded-md w-full justify-center flex items-center"
        >
          Upgrade Membership
        </Link>
      </div>
    </div>
  );
};

export default UpgradeMembership;

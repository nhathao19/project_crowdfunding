import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="">
      <Link href={"/"} className="md:hidden">
        <Image
          src={"/logo/logo.svg"}
          alt="logo"
          width={50}
          height={50}
          className="p-1"
        />
      </Link>

      <Link href={"/"} className="hidden md:block">
        <Image
          src={"/logo/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          className="p-1"
        />
      </Link>
    </div>
  );
};

export default Logo;
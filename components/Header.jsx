import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 items-center justify-center">
      <div className="bg-white px-1 md:px-4 max-w-7xl mx-auto">
        <div className="flex items-center p-6 border-b-2 border-gray-600 justify-center md:space-x-10">
          <div className="flex w-1/2 md:space-x-10">
            <div className="items-center text-center justify-center">
              <Link href="/" passHref>
                <Image
                  className="hidden cursor-pointer"
                  layout="fixed"
                  src="/logo.jpg"
                  alt="Game Logo"
                  width="60"
                  height="40"
                />
              </Link>
            </div>
          </div>
          <div className="flex w-1/2 md:px-4">
            <p className="flex items-center text-center justify-center">Game</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

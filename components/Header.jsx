import { useRouter } from "next/dist/client/router";

function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <button>Hallo</button>
      </div>
    </header>
  );
}

export default Header;

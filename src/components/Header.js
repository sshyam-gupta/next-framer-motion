import Link from "next/link";

const links = [
  {
    href: "https://github.com/sshyam-gupta",
    label: "GitHub",
    isExternal: true
  },
  {
    href: "https://sshyam-gupta@netlify.com",
    label: "Resume",
    isExternal: true
  },
  { href: "/demo", label: "Responsive Test" }
];

function Header() {
  return (
    <nav className="shadow-lg fixed right-0 left-0 bg-white">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/">
        <a className="font-bold text-2xl lg:text-4xl flex items-center">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Product hunt
          </span>
        </a>
        </Link>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:block">
          <ul className="inline-flex">
            {links.map(({ href, label, isExternal }) => (
              <li key={`${href}${label}`}>
                {isExternal ? (
                    <a
                    target="_blank"
                    href={href}
                      className="px-4 font-bold hover:text-gray-800"
                    >
                      {label}
                    </a>
                ) : (
                  <Link href={href}>
                    <a
                      className="px-4 font-bold hover:text-gray-800"
                    >
                      {label}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

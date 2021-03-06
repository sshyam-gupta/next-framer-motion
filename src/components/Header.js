import Link from "next/link";

const links = [
  {
    href: "https://github.com/sshyam-gupta",
    label: "GitHub",
    isExternal: true
  },
  {
    href: "https://sshyam-gupta.netlify.com",
    label: "Resume",
    isExternal: true
  },
  { href: "/demo", label: "Demo" }
];

function Header() {
  return (
    <nav className="shadow-lg fixed right-0 left-0 bg-white z-10">
      <div className="px-8 py-5 md:px-20 flex justify-between items-center">
        <Link href="/" scroll={false}>
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
            <span className="font-semibold text-xl tracking-tight">Name</span>
          </a>
        </Link>

        <div className="lg:block">
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
                  <Link href={href} scroll={false}>
                    <a className="px-4 font-bold hover:text-gray-800">
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

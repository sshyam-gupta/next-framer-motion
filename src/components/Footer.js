function Footer() {
  return (
    <footer className="bg-gray-100 fixed bg-gray-100 bottom-0 left-0 right-0">
      <section className="px-8 py-3 md:px-20 flex justify-between items-center">
        <div>© Shyam Gupta</div>
        <div className="inline-flex">
          <LinkItem url="https://github.com/sshyam-gupta" label="GitHub" />
          <LinkItem url="https://sshyam-gupta.netlify.com" label="Resume" />
        </div>
      </section>
    </footer>
  );
}

function LinkItem({ url, label }) {
  return (
    <a
      className="px-2 text-black-200 hover:text-gray-500"
      href={url}
      target="_blank"
    >
      {label}
    </a>
  );
}

export default Footer;

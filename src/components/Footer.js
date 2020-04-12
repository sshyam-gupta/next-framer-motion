function Footer() {
  return (
    <footer className="bg-gray-100">
      <section className="px-5 py-5 flex justify-between items-center container mx-auto">
        <div>© Shyam Gupta</div>
        <div className="inline-flex">
          <LinkItem url="https://github.com/sshyam-gupta" label="GitHub" />
          <LinkItem url="https://sshyam-gupta@netlify.com" label="Resume" />
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

const Error = ({ statusCode }) => {
  return (
    <section className="container mx-auto px-6 p-10">
      <div className="flex items-center flex-col">
        <div className="w-full md:w-1/2 flex justify-center mb-10">
          <img
            src="/assets/undraw_page_not_found_su7k.svg"
            className="w-2/3"
            alt="Syncing"
          />
        </div>
        <div className="w-full md:w-1/2 text-center">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">
            {statusCode
              ? `An ${statusCode} error occurred on server`
              : "An error occurred on client"}
          </h4>
          <p className="text-gray-600 mb-8">Please try again later.</p>
        </div>
      </div>
    </section>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

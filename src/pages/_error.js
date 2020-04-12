const Error = ({ statusCode }) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">
            {statusCode
              ? `An ${statusCode} error occurred on server`
              : "An error occurred on client"}
          </p>
          <p className="subtitle">Please try again later.</p>
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

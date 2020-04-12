import useSWR from 'swr';
import absoluteUrl from 'next-absolute-url';
import fetcher from '../util/fetcher'

const Home = ({ response }) => {
  const { data } = useSWR('/api', fetcher, { initialData: response });
  console.log(data)

  return (
    <section className="container mx-auto px-6 p-10">
      <h1>sdsdf</h1>
    </section>
  );
};

Home.getInitialProps = async ({ req }) => {
  const { protocol, host } = absoluteUrl(req);

  const response = await fetcher(`${protocol}//${host}/api`);

  return { response };
};

export default Home;
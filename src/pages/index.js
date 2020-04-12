import useSWR from "swr";
import absoluteUrl from "next-absolute-url";
import { motion } from "framer-motion";

import fetcher from "../util/fetcher";
import Card from "../components/Card";

const Home = ({ response }) => {
  const { data } = useSWR("/api", fetcher, { initialData: response });

  return (
    <motion.div
      className="grid mx-auto p-8"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {data.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </motion.div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const { protocol, host } = absoluteUrl(req);
  const response = await fetcher(`${protocol}//${host}/api`);
  return { response };
};

export default Home;

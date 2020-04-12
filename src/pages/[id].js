import useSWR from "swr";
import absoluteUrl from "next-absolute-url";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import fetcher from "../util/fetcher";

const TRANSITION = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const CARD_VARIANTS = {
  initial: { scale: 0.5, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition: TRANSITION },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...TRANSITION }
  }
};

const CardById = ({ response }) => {
  const router = useRouter();

  const { data } = useSWR(`/api/${router.query.id}`, fetcher, {
    initialData: response
  });

  return (
    <motion.div initial="exit" animate="enter" exit="exit">
      <div className="w-full md:w-1/3 mx-auto p-8">
        <a className="bg-white rounded h-full text-grey-darkest no-underline ">
          <motion.div variants={CARD_VARIANTS} className="shadow-lg">
            <img
              className="w-full block rounded-t"
              src={data.image}
              alt={data.name}
            />
            <div className="px-6 py-4">
              <span className="category">{data.name}</span>
              <h2>{data.desc}</h2>
            </div>
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
};

CardById.getInitialProps = async ({ req, query }) => {
  const { protocol, host } = absoluteUrl(req);
  const response = await fetcher(`${protocol}//${host}/api/${query.id}`);
  return { response };
};

export default CardById;

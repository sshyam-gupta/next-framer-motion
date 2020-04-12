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
  initial: { scale: 0.8, opacity: 0.5 },
  enter: { scale: 1, opacity: 1, transition: TRANSITION },
  exit: {
    scale: 0.8,
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
      <div className="w-full mx-auto p-8 md:px-20 md:py-10">
        <motion.div variants={CARD_VARIANTS}>
          <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl">
            <div
              className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
              style={{ minHeight: "19rem" }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={data.image}
                alt=""
              />

              <div className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75" />
              <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
                <span className="text-center text-5xl">{data.name}</span>
              </div>
            </div>
            <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
              <div className="p-12 md:pr-24 md:pl-16 md:py-12">
                <p className="text-gray-600">
                  <span className="text-gray-900">{data.name}</span> is a{" "}
                  {data.desc}
                </p>
                <div className="mt-3 text-indigo-600">
                  <span>{data.likes} likes</span>
                </div>
                <div className="mt-1 text-indigo-600">
                  <span>{data.comments.length} comments</span>
                </div>
              </div>
              <svg
                className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
          </div>
        </motion.div>
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

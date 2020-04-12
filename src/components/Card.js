import Link from "next/link";
import { motion } from "framer-motion";

const TRANSITION = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const THUMBNAIL_VARIANTS = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition: TRANSITION },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...TRANSITION }
  }
};

const FRAME_VARIANTS = {
  hover: { scale: 0.95 }
};

const IMAGE_VARIANTS = {
  hover: { scale: 1.1 }
};

function Card({ id, image, desc, name }) {
  return (
    <motion.div className="thumbnail" variants={THUMBNAIL_VARIANTS}>
      <Link href={`/${id}`} as={`/${id}`} scroll={false}>
        <a>
          <motion.div
            className="bg-white rounded h-full text-grey-darkest no-underline shadow-lg"
            whileHover="hover"
            variants={FRAME_VARIANTS}
            transition={TRANSITION}
          >
            <motion.img
              className="w-full block rounded-t"
              src={image}
              alt={name}
              variants={IMAGE_VARIANTS}
              transition={TRANSITION}
            />
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">{name}</p>
              <p className="text-gray-700 text-base">{desc}</p>
            </div>
          </motion.div>
        </a>
      </Link>
    </motion.div>
  );
}

export default Card;

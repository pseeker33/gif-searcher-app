import {motion, useInView} from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: ({ index }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: index * .2
    }
  })
}

export const Gif = ({ gif, index }) => {
  const ref = useRef(null);
  const estaVisto = useInView(ref, {
    once: true,
  });

  return (
    <motion.img
      ref={ref}
      className="images"
      src={gif.images.original.url}
      alt={gif.title}
      //motions
      custom={{ index }}
      variants={variants}
      initial="initial"
      animate= {estaVisto ? "animate" : ""}
      whileHover={{scale: 1.2}}
    />
  );
};

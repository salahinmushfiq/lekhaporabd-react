import { motion } from "framer-motion";
import { promoImages } from "../data/promoImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const PromoImagesLeft = () => {
  return (
    <motion.div
      className="space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {promoImages.left.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Promo Left ${i}`}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
          custom={i}
          variants={fadeUp}
        />
      ))}
    </motion.div>
  );
};

export default PromoImagesLeft;

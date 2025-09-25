import { motion } from "framer-motion";

export default function SlideIn({
  children,
  duration = 0.5,
  distance = 20,
  delay = 0,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion"

export default function ChapterTitle({ title }: { title: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        scrollSnapAlign: "start",
        minHeight: "100vh",
        textAlign: "center",
        fontSize: "3rem",
        padding: "6rem 2rem",
      }}
    >
      {title}
    </motion.h1>
  )
}

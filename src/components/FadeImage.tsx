import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FadeImage({ src, alt }: { src: string; alt?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        maxWidth: "70%",
        borderRadius: "6px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      }}
    />
  )
}

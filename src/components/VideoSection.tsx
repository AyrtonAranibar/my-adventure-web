import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import HeartBackground from "./HeartBackground"

export default function VideoSection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section
      ref={ref}
      style={{
        position: "relative", 
        minHeight: "auto",    
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "6rem 2rem 4rem",
      }}
    >
    <HeartBackground count={10} />
      <motion.h2
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "5rem",
          marginBottom: "4rem",
          textAlign: "center",
        }}
      >
        Nuestro Video 💖
      </motion.h2>

      <motion.div
        style={{
          width: "100%",
          maxWidth: "800px",
          position: "relative",
          paddingBottom: "56.25%", // proporción 16:9
          height: 0,
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          y
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/6PjnxRxEr4c"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "12px",
          }}
        ></iframe>
      </motion.div>
    </section>
  )
}

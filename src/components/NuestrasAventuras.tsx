import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import CardPolaroid from "./CardPolaroid"
import CardPolaroidVideo from "./CardPolaroidVideo"

export default function NuestrasAventuras() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const base = import.meta.env.BASE_URL  // 👈 aquí tomamos el base configurado en vite.config.js

  return (
    <section
      ref={ref}
      style={{
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", 
        position: "relative",
        padding: "6rem 2rem 4rem",
      }}
    >
      <motion.h2
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "6rem",
          marginBottom: "10rem",
          textAlign: "center",
        }}
      >
        Comenzamos a tener aventuras
      </motion.h2>

      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
          y
        }}
      >
        <CardPolaroid
          src={`${base}assets/photos/20250712.jpg`}
          caption="Te comenzaba a visitar mas seguido 🏃🏻‍♂️‍➡️"
          zoom={1.1}
          rotation={-4}
          depth={1.2}
          speed={1.7}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250714.jpg`}
          caption="Tuvimos largas conversaciones en el parque :3"
          zoom={1.15}
          rotation={3}
          depth={1}
          speed={1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250720_075526.jpg`}
          caption="Fuimos a nuestro primer trekking 🖼️"
          zoom={1.15}
          rotation={3}
          depth={1}
          speed={1}
        />

        <CardPolaroidVideo
          src={`${base}assets/photos/20250720_065109.jpg`}
          videoSrc={`${base}assets/videos/20250720_065109.mp4`}
          caption="Comenzamos agarraditos de la mano ❤️"
          depth={1.1}
          speed={1.2}
          rotation={-5}
        />

        {/* ... y así sucesivamente para todos los demás CardPolaroid y CardPolaroidVideo */}
      </motion.div>
    </section>
  )
}

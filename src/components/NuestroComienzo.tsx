import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import CardPolaroid from "./CardPolaroid"
import CardPolaroidVideo from "./CardPolaroidVideo"
import HeartBackground from "./HeartBackground"

export default function NuestroComienzo() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const base = import.meta.env.BASE_URL  // 👈 prefijo dinámico

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", 
        position: "relative",
        padding: "6rem 2rem 4rem",
      }}
    >
      <HeartBackground count={10} />
      
      <motion.h2
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "6rem",
          marginBottom: "10rem",
          textAlign: "center",
        }}
      >
        Nuestro comienzo
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
          src={`${base}assets/photos/20250424.jpg`}
          caption="El primer día que nos conocimos... Henry nos presentó y comenzamos hablando por Instagram 📷"
          zoom={1.1}
          rotation={-4}
          depth={1.2}
          speed={1.7}
        />

        <CardPolaroidVideo
          src={`${base}assets/photos/20250524.png`}
          videoSrc={`${base}assets/videos/20250524.mp4`}
          caption="Comenzamos a compartir el voley con amigos 🏆"
          depth={1.1}
          speed={1.2}
          rotation={1}
        />

        <CardPolaroidVideo
          src={`${base}assets/photos/20250530.png`}
          videoSrc={`${base}assets/videos/20250530.mp4`}
          caption="Tambien compartimos historias...😽"
          depth={1.1}
          speed={1.2}
          rotation={1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250525.jpg`}
          caption="Black 🐕⚰️"
          zoom={1.15}
          rotation={3}
          depth={1.2}
          speed={1.2}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250617.jpg`}
          caption="Te acompañaba hasta tu casa, un dia vimos este gato :b"
          zoom={1.15}
          rotation={3}
          depth={1.3}
          speed={1.3}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250618.jpg`}
          caption="Gato disque 'Perdido' pero siempre vivia ahí"
          zoom={1.15}
          rotation={3}
          depth={1}
          speed={1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250624.jpg`}
          caption="Vimos a chimuelo en el cine 🎞️"
          zoom={1.1}
          depth={1.1}
          speed={1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250625.jpg`}
          caption="Nos divertiamos con los chicos del voley n.n"
          zoom={1}
          depth={1}
          speed={1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250628.jpg`}
          caption="Este día marco un antes y despues en nuestra historia..."
          zoom={1}
          rotation={5}
          depth={0.8}
          speed={0.8}
        />

        <CardPolaroidVideo
          src={`${base}assets/photos/20250706_174407.jpg`}
          videoSrc={`${base}assets/videos/20250706.mp4`}
          caption="Dejamos de vernos como amigos y comenzamos a conectar de verdad ❤️"
          depth={1.2}
          speed={1.3}
          rotation={-5}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250712_211125.jpg`}
          caption="Comenzabamos a ver peliculas juntos, eso era cuando las peliculas no nos veía a nosotros 😂"
          zoom={1.05}
          depth={1}
          speed={1}
        />
      </motion.div>
    </section>
  )
}

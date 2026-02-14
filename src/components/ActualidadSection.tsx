import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import CardPolaroid from "./CardPolaroid"
import CardPolaroidVideo from "./CardPolaroidVideo"

export default function ActualidadSection() {
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
        El Ahora 
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
          src="/src/assets/photos/20251203_225554.jpg"
          caption="Las cosas estan más calmadas"
          zoom={1.1}
          rotation={-4}
          depth={1.2}
          speed={1.1}
        />

        <CardPolaroid
          src="/src/assets/photos/20251213_233411.jpg"
          caption="Pero tambien más estables"
          zoom={1.1}
          rotation={0}
          depth={1.2}
          speed={1.1}
        />

                <CardPolaroid
          src="/src/assets/photos/20251224_202637.jpg"
          caption="El impulso del deseo está quedando atrás"
          zoom={1.1}
          rotation={-1}
          depth={1.2}
          speed={1.1}
        />

                <CardPolaroid
          src="/src/assets/photos/20251228_210400.jpg"
          caption="Y queda debajo un amor mas real entre nosotros"
          zoom={1.1}
          rotation={-3}
          depth={1.2}
          speed={1.1}
        />

                <CardPolaroid
          src="/src/assets/photos/20260101_030048.jpg"
          caption="Te quiero mucho cariño 💖"
          zoom={1.1}
          rotation={4}
          depth={1.2}
          speed={1.1}
        />

                <CardPolaroid
          src="/src/assets/photos/20260115_210505.jpg"
          caption="Aun nos deparan muchisimas aventuras más!"
          zoom={1.1}
          rotation={-1}
          depth={1.2}
          speed={1.1}
        />

                <CardPolaroid
          src="/src/assets/photos/20260128_222637.jpg"
          caption="Y espero que sean siempre contigo bb"
          zoom={1.1}
          rotation={3}
          depth={1.2}
          speed={1.1}
        />

                <CardPolaroid
          src="/src/assets/photos/20260208_185239.jpg"
          caption="Te preparé esto con mucho cariño 😄"
          zoom={1.1}
          rotation={-4}
          depth={1.2}
          speed={1.1}
        />


        <CardPolaroidVideo
          src="/src/assets/photos/20251115_191843.jpg"
          videoSrc="/src/assets/videos/20251115_191843.mp4"
          caption="Espero que te guste mucho :D"
          depth={1.1}
          speed={1.2}
          rotation={-1}
        />


      </motion.div>
    </section>
  )
}

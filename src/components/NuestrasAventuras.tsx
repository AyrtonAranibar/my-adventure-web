import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import CardPolaroid from "./CardPolaroid"
import CardPolaroidVideo from "./CardPolaroidVideo"
import HeartBackground from "./HeartBackground"

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
        position: "relative",
        minHeight: "100vh",
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

        <CardPolaroidVideo
          src={`${base}assets/photos/20250717beso.jpg`}
          videoSrc={`${base}assets/videos/20250717beso.mp4`}
          caption="Caminando juntitos :3"
          depth={1.1}
          speed={1.2}
          rotation={-2}
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

        <CardPolaroid
          src={`${base}assets/photos/20250720_080357.jpg`}
          caption="La pasamos muy bien ese dia :3"
          zoom={1}
          depth={0.9}
          speed={0.8}
          rotation={3}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250720_092256.jpg`}
          caption="Hermosa!"
          zoom={1}
          depth={1.1}
          speed={1.1}
          rotation={3}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250720_130500.jpg`}
          caption="Solo sale tu celar XD"
          zoom={1}
          depth={1.2}
          speed={1.2}
          rotation={-1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250720.jpg`}
          caption="Que bonita! ❤️"
          zoom={1}
          depth={1.2}
          speed={1.2}
          rotation={-2}
        />

        <CardPolaroidVideo
          src={`${base}assets/photos/20250720_114920.jpg`}
          videoSrc={`${base}assets/videos/20250720_114920.mp4`}
          caption="Caminando juntitos :3"
          depth={1.1}
          speed={1.1}
          rotation={-2}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250724.jpg`}
          caption="Nuestra primera fiesta juntos :3"
          zoom={1}
          depth={1}
          speed={1}
          rotation={2}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250725.jpg`}
          caption="Que bonitos somos :3"
          zoom={1}
          depth={1}
          rotation={-5}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250728_124833.jpg`}
          caption="Nuestra primera viaje juntitos💖"
          zoom={1}
          depth={1.3}
          speed={1.3}
          rotation={1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250729_175459.jpg`}
          caption="Juntitos en el bus💕"
          zoom={1}
          depth={1}
          rotation={3}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250802_173408.jpg`}
          caption="Tunkimayo verdad?🤔"
          zoom={1}
          depth={0.9}
          speed={0.9}
          rotation={-1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250802.jpg`}
          caption="En la fiestita de Vale :D"
          zoom={1}
          depth={1}
          rotation={10}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250805_204657.jpg`}
          caption="Conociendo a tus amigos del tiktok XD"
          zoom={1}
          depth={0.8}
          speed={0.8}
          rotation={-5}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250809_202850.jpg`}
          caption="Abrazaditos en tu casa💖"
          zoom={1}
          depth={1}
          rotation={1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250813_214501.jpg`}
          caption="Abrazaditos en el parque💕"
          zoom={1}
          depth={1.2}
          
          rotation={3}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250813_232417.jpg`}
          caption="😆"
          zoom={1}
          depth={0.9}
          speed={0.9}
          rotation={-5}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250817_074057.jpg`}
          caption="Nuestro segundo trekking"
          zoom={1.3}
          depth={1}
          rotation={10}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250817_084143.jpg`}
          caption="Dentro del poto del Tyson 🤣"
          zoom={1}
          depth={1.3}
          speed={1.3}
          rotation={-5}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250823_230618.jpg`}
          caption="🥴"
          zoom={1}
          depth={1.1}
          rotation={1}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250813_214501.jpg`}
          caption="Abrazaditos en el parque💕"
          zoom={1}
          depth={1.3}
          speed={1.3}
          rotation={3}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250823_230724.jpg`}
          caption="😝"
          zoom={1}
          depth={1}
          rotation={-5}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250827_230337.jpg`}
          caption="👩‍❤️‍👨"
          zoom={1}
          depth={1.2}
          speed={1.2}
          rotation={10}
        />

        <CardPolaroid
          src={`${base}assets/photos/20250930.jpeg`}
          caption="El día que me regalaste este detalle tan bonito💕💕💕"
          zoom={1}
          depth={1.4}
          speed={1.4}
          rotation={8}
        />

        <CardPolaroidVideo
          src={`${base}assets/photos/20251025_113756.jpg`}
          videoSrc={`${base}assets/videos/20251025_113756.mp4`}
          caption="Odín :) ... Me hubiese gustado haberlo podido salvar 😭"
          depth={0.9}
          speed={0.8}
          rotation={-2}
        />

        <CardPolaroid
          src={`${base}assets/photos/20251028.jpeg`}
          caption="💕😍🥰Este día comenzamos a estar🥰😍💕"
          zoom={1}
          depth={1.2}
          rotation={-1}
        />

          <CardPolaroid
          src={`${base}assets/photos/20251028.jpg`}
          caption="Los tulipanes que te regalé"
            zoom={1}
            depth={1.2}
          rotation={4}
        />

      </motion.div>
    </section>
  )
}

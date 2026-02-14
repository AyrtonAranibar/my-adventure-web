import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ParallaxSection() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Movimientos diferentes para cada capa
    const yBack = useTransform(scrollYProgress, [0, 1], [0, -30])
    const yMiddle = useTransform(scrollYProgress, [0, 1], [0, -80])
    const yFront = useTransform(scrollYProgress, [0, 1], [0, -250])

    const yTitle = useTransform(scrollYProgress, [0, 1], [0, -250])
    const opacityTitle = useTransform(scrollYProgress, [0, 0.7], [4, 0])

    return (
        <section
        ref={ref}
            style={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Fondo */}
            <motion.img
                src="/assets/photos/fondoportada.jpg"
                style={{
                    y: yBack,
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    scale: 1.1, // 👈 más grande sin romper layout
                }}
            />

            {/* Capa media */}
            <motion.img
                src="/assets/photos/portada2.png"
                style={{
                    y: yMiddle,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    scale: 1.3,
                    top: "-1%",
                    objectFit: "cover",
                }}
            />

            {/* Capa frontal       */}
            <motion.img
                src="/assets/photos/portada1.png"
                style={{
                    y: yFront,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    scale: 1.45,
                    top: "-3%",
                    objectFit: "cover",
                }}
            />

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    y: yTitle,
                    opacity: opacityTitle,
                    fontFamily: "'Caveat', cursive",
                    fontSize: "7.5rem",
                    color: "#fdf6e3",
                    textAlign: "center",
                    textShadow: "0 6px 12px rgba(0,0,0,0.7)",
                    zIndex: 10,
                }}
                >
                Nuestra historia
            </motion.h1>



        </section>
    )
}

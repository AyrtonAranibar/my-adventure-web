import { motion } from "framer-motion"
import { useRef } from "react"
import {
  formatDateFromFilename,
  getFinalRotation,
  usePolaroidScroll
} from "../utils/utils"

type CardPolaroidProps = {
  src: string
  alt?: string
  date?: string
  caption?: string
  zoom?: number
  rotation?: number
  depth?: number
  speed?: number
}

export default function CardPolaroid({
  src,
  alt = "photo",
  date,
  caption,
  zoom = 1,
  rotation,
  depth = 1,
  speed = 1,
}: CardPolaroidProps) {

  const ref = useRef<HTMLDivElement>(null)

  const autoDate = formatDateFromFilename(src)
  const finalRotation = getFinalRotation(src, rotation)
  const { y, opacity } = usePolaroidScroll(ref, speed)

  return (
    <motion.div
      ref={ref}
      style={{
        background: "#fff",
        padding: "1rem",
        paddingBottom: "2.5rem",
        width: `${300 * depth}px`,
        height: `${400 * depth}px`,
        boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
        borderRadius: "4px",
        position: "relative",
        overflow: "hidden",
        opacity,
        rotate: `${finalRotation}deg`,
        y
      }}
      whileHover={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <div
        style={{
          width: "100%",
          height: `${300 * depth}px`,
          overflow: "hidden"
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            scale: zoom
          }}
        />
      </div>

      {caption && (
        <p
          style={{
            marginTop: "0.8rem",
            fontFamily: "'Caveat', cursive",
            fontSize: `${1 * depth}rem`,
            textAlign: "center"
          }}
        >
          {caption}
        </p>
      )}

      {(date || autoDate) && (
        <span
          style={{
            position: "absolute",
            bottom: "8px",
            right: "12px",
            fontSize: `${0.7 * depth}rem`,
            color: "#666",
            fontFamily: "sans-serif"
          }}
        >
          {date ?? autoDate}
        </span>
      )}
    </motion.div>
  )
}

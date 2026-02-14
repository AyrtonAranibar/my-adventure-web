import { motion } from "framer-motion"
import { useRef, useState } from "react"
import {
  formatDateFromFilename,
  getFinalRotation,
  usePolaroidScroll
} from "../utils/utils"

type CardPolaroidVideoProps = {
  src: string
  videoSrc: string
  alt?: string
  caption?: string
  zoom?: number
  rotation?: number
  depth?: number
  speed?: number
  date?: string
}

export default function CardPolaroidVideo({
  src,
  videoSrc,
  alt = "photo",
  caption,
  zoom = 1,
  rotation,
  depth = 1,
  speed = 1,
  date
}: CardPolaroidVideoProps) {

  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [flipped, setFlipped] = useState(false)

  const autoDate = formatDateFromFilename(src)
  const finalRotation = getFinalRotation(src, rotation)
  const { y, opacity } = usePolaroidScroll(ref, speed)

  // Detectar si es touch
  const isTouch = typeof window !== "undefined" && "ontouchstart" in window

  const handleFlip = () => {
    setFlipped(!flipped)
    if (!flipped) {
      videoRef.current?.play()
    } else {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }

  return (
    <div
      style={{
        perspective: "1200px",
        width: `${300 * depth}px`,
        height: `${400 * depth}px`,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0, scale: flipped ? 1.5 : 1 }}
        whileHover={!isTouch ? { rotateY: 180, scale: 1.5 } : undefined}
        onHoverStart={!isTouch ? () => videoRef.current?.play() : undefined}
        onHoverEnd={!isTouch ? () => {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
          }
        } : undefined}
        onClick={isTouch ? handleFlip : undefined}
        transition={{
          rotateY: { duration: 0.8, ease: "easeInOut" }
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          rotate: `${finalRotation}deg`,
          y,
          opacity,
        }}
      >

        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "1rem",
            paddingBottom: "2.5rem",
            boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
            borderRadius: "4px",
            backfaceVisibility: "hidden",
            zIndex:5
          }}
        >
          <div
            style={{
              width: "100%",
              height: `${300 * depth}px`,
              overflow: "hidden"
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: `scale(${zoom})`
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
              {caption} {isTouch ? "¡Tócame!" : "¡Hazme clic!"}
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
          <span   
            style={{
              position:"absolute",
              top:"0%",
              left:"5%",
              transform:  "translate(-50%, -50%)",
              zIndex:10,
              fontSize: "5rem"
            }}
          >📽️</span>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "#000",
            borderRadius: "4px",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

      </motion.div>
    </div>
  )
}

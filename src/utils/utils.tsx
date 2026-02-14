// utils.ts
import { useScroll, useTransform } from "framer-motion"
import type { RefObject } from "react"

/* =========================
   DATE
========================= */

export function formatDateFromFilename(src: string) {
  const fileName = src.split("/").pop()?.split(".")[0]
  if (!fileName || fileName.length < 8) return null

  const year = fileName.slice(0, 4)
  const month = fileName.slice(4, 6)
  const day = fileName.slice(6, 8)

  const months = [
    "enero","febrero","marzo","abril",
    "mayo","junio","julio","agosto",
    "septiembre","octubre","noviembre","diciembre"
  ]

  const monthIndex = parseInt(month) - 1
  if (monthIndex < 0 || monthIndex > 11) return null

  return `${parseInt(day)} de ${months[monthIndex]} del ${year}`
}

/* =========================
   ROTATION
========================= */

export function generateStableRotation(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return (hash % 12) - 6
}

export function getFinalRotation(
  src: string,
  rotation?: number
) {
  return rotation !== undefined
    ? rotation
    : generateStableRotation(src)
}

/* =========================
   SCROLL ANIMATION
========================= */

export function usePolaroidScroll(
  ref: RefObject<HTMLDivElement | null>,
  speed: number
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 20%"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed])
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])

  return { y, opacity }
}

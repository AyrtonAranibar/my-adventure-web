import { motion } from "framer-motion"
import { useState, useEffect } from "react"

type Heart = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  color: string
}

function generateHearts(count: number): Heart[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 20 + Math.random() * 300,
    duration: 15 + Math.random() * 25,
    delay: Math.random() * 5,
    color: ["#ff4d6d", "#ff99cc", "#ff3366", "#cc0066"][
      Math.floor(Math.random() * 4)
    ],
    opacity: 0.3 + Math.random() * 0.5,
  }))
}

export default function HeartBackground({ count = 20 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    setHearts(generateHearts(count))
  }, [count])

  return (
    <div
      style={{
        position: "absolute",
        inset: 0, // 👈 ocupa todo el contenedor padre
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10%", opacity: 1 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            color: heart.color,
            opacity: 0.5,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

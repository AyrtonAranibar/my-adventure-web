import { useEffect, useRef, useState } from "react"

type BackgroundMusicPlayerProps = {
  tracks: string[]
}

export default function BackgroundMusicPlayer({ tracks }: BackgroundMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [currentTrack, setCurrentTrack] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState(false)

  // Cambiar canción automáticamente
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setCurrentTrack((prev) => (prev + 1) % tracks.length)
    }

    audio.addEventListener("ended", handleEnded)
    return () => audio.removeEventListener("ended", handleEnded)
  }, [tracks.length])

  // Actualizar volumen
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // Cuando cambia la canción y está en play, reproducirla
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(() => {})
    }
  }, [currentTrack, isPlaying])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        console.log("El navegador bloqueó la reproducción automática")
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={tracks[currentTrack]}
        preload="metadata"
      />

      {/* Control flotante */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "rgba(0,0,0,0.75)",
          padding: "15px",
          borderRadius: "14px",
          color: "white",
          fontSize: "14px",
          backdropFilter: "blur(12px)",
          zIndex: 9999,
          width: "180px"
        }}
      >
        <div
          style={{
            marginBottom: "10px",
            fontFamily: "'Caveat', cursive",
            fontSize: 22,
            textAlign: "center"
          }}
        >
          Música 🎵
        </div>

        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "6px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#fff",
            fontWeight: "bold"
          }}
        >
          {isPlaying ? "⏸ Pause" : "▶ Play"}
        </button>

        {/* Volumen */}
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>
    </>
  )
}

import ParallaxSection from "./components/ParallaxSection"
import NuestroComienzo from "./components/NuestroComienzo"
import BackgroundMusicPlayer from "./components/BackgroundMusicPlayer"
import NuestrasAventuras from "./components/NuestrasAventuras"
import ActualidadSection from "./components/ActualidadSection"

export default function Story() {
  return (
    <main
      style={{
        scrollSnapType: "y proximity"
      }}
    >

      <ParallaxSection />

      <NuestroComienzo/>

      <NuestrasAventuras/>

      <ActualidadSection/>

      <BackgroundMusicPlayer
        tracks={[
          "/assets/audio/Elvinodetuboca.mp3",
          "/assets/audio/Manuel.mp3",
          "/assets/audio/TeLlevoparaQueMeLleves.mp3",
          "/assets/audio/Usted.mp3",
          "/assets/audio/LaDistanci.mp3",
      ]}
      />
    </main>
  )
}
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
          "https://github.com/AyrtonAranibar/my-adventure-web/raw/refs/heads/master/src/assets/audio/Elvinodetuboca.mp3",
          "https://github.com/AyrtonAranibar/my-adventure-web/raw/refs/heads/master/src/assets/audio/Manuel.mp3",
          "https://github.com/AyrtonAranibar/my-adventure-web/raw/refs/heads/master/src/assets/audio/TeLlevoparaQueMeLleves.mp3",
          "https://github.com/AyrtonAranibar/my-adventure-web/raw/refs/heads/master/src/assets/audio/Usted.mp3",
          "https://github.com/AyrtonAranibar/my-adventure-web/raw/refs/heads/master/src/assets/audio/LaDistanci.mp3",
      ]}
      />
    </main>
  )
}
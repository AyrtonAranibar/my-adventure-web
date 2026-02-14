import ParallaxSection from "./components/ParallaxSection"
import NuestroComienzo from "./components/NuestroComienzo"
import BackgroundMusicPlayer from "./components/BackgroundMusicPlayer"
import NuestrasAventuras from "./components/NuestrasAventuras"
import ActualidadSection from "./components/ActualidadSection"
import elvino from "/assets/audio/Elvinodetuboca.mp3";
import manuel from "/assets/audio/Manuel.mp3";
import TeLlevoparaQueMeLleves from "/assets/audio/TeLlevoparaQueMeLleves.mp3";
import Usted from "/assets/audio/Usted.mp3";
import LaDistanci from "/assets/audio/LaDistanci.mp3";
import VideoSection from "./components/VideoSection"

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

      <VideoSection/>

      <ActualidadSection/>

      <BackgroundMusicPlayer
        tracks={[elvino, manuel, TeLlevoparaQueMeLleves, Usted, LaDistanci]}
      />
      
    </main>
  )
}
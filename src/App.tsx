import ChapterTitle from "./components/ChapterTitle"
import StorySection from "./components/StorySection"

export default function Story() {
  return (
    <main
      style={{
        scrollSnapType: "y proximity"
      }}
    >
      <ChapterTitle title="Nuestra aventura" />

      <StorySection>
        <p>
          Todo comenzó un día cualquiera… pero nada volvió a ser igual.
        </p>
      </StorySection>

      <StorySection>
        <img src="/src/assets/photos/colca1.jpg" alt="recuerdo" />
      </StorySection>

      <StorySection>
        <p>
          Y sin darnos cuenta, empezamos a escribir nuestra propia historia.
        </p>
      </StorySection>
    </main>
  )
}
import './App.css'
 
//customs Hooks
import { useCatImage } from './hooks/useCatImage.js' 
import { useCatFact } from './hooks/useCatFact.js' 

function App() {

  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })



  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        <article>
          {fact && <p>{fact}</p>} {/* RENDERIZADO CONDICIONAL */}
        </article>
        <article>
          {imageUrl && <img src={imageUrl} alt='cat'></img>} {/* RENDERIZADO CONDICIONAL */}
        </article>
      </section>
      <button onClick={refreshFact}>Get new Fact</button>
    </main>
  )
}

export default App

import '../styles/index.scss';
import Recipes from './Recipes';
import image from '../images/camp-bus.jpg'
import imageSvg from '../images/skate-bg-transparent.svg'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1> Hi React</h1>
        </section>
        <img src={image} alt="image" width="300"></img>
        <img src={imageSvg} alt="imageSvg" width="300"></img>
      </main>

      <Recipes/>
    </>
  )
}

export default App
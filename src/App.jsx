import Experties from "./commponent/Experties/Experties";
import Footer from "./commponent/Footer/Footer";
import Header from "./commponent/Header/Header";
import Hero from "./commponent/Header/hero/Hero";
import People from "./commponent/People/People";
import Portpholio from "./commponent/Portpholio/Portpholio";
import Works from "./commponent/Works/Works";
import css from './styles/app.module.scss'
const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <Works/>
    <Portpholio/>
    <People/>
    <Footer/>
  </div>
};

export default App;

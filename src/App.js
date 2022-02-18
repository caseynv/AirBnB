import Header from './Components/Header.js'
import Hero from './Components/Hero.js'
import Card from './Components/Card.js'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Card 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="130"
      />
    </div>
  );
}

export default App;

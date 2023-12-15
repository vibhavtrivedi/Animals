import './App.css';
import { useState } from "react";
import Animalshow from "./AnimalShow";

function randomAnimal() {
    const animals = ['dog', 'cat', 'horse', 'bird', 'cow', 'gator'];
    return animals[Math.floor(Math.random() * animals.length)]
}
function App() {
    const [animals, setAnimal] = useState([]);
    const handleClick = () => {
        setAnimal([...animals, randomAnimal()])
    };
    const renderedAnimals = animals.map((animal, index) => {
        return <Animalshow type={animal} key={index} />
    })
    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    );
}

export default App;

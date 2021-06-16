import { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './Components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect (() =>{
    fetch(`https://pixabay.com/api/?key=22093135-a106e70df79bab2533f056ffb&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  },[]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {
          images.map(image => (<ImageCard/>))
        }
      </div>
    </div>
  );
}

export default App;

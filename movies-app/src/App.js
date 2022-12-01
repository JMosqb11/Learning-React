import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './app.css'

const images = [
  'https://images.unsplash.com/photo-1532411228898-eb6c394c0bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1629316583544-7d83debbc4ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1610028877875-a1810b68db5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
]
const App = () => {

  return (
    <div>
     <Slide>
     {
        images.map((image, index) => (
          <div>
            <div key={index} className='each-slide-effect' >
              <img src={image} className='image' />

              <a href='#'>Ver más</a>
            </div>
          </div>
        )
        )
      }
     </Slide>
    </div>
  )
}

export default App;

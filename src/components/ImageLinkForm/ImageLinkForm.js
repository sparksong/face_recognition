import React from 'react';

const ImageLinkForm = () => {
  return (
    <div className='f3'>
      <p>
        { 'SmartGuy-san will detect faces in your pictures. Try it!' }
      </p>
      <div>
        <input className='f4 pa2 w-70 center' type='text'/>
        <button className='w-30 grow f4 ph3 pv2 dib white bg-light-purple'>
          Detect
        </button>
      </div>
    </div>
  )
}

export default ImageLinkForm;

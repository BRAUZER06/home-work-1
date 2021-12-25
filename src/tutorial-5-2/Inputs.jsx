import React from 'react';

const Inputs = ({ name, comment, onRemove, index}) => { 
  
  return (
    
      <div className='inputs_container' >
      <img alt='картинка' src="https://www.meme-arsenal.com/memes/5abed9f3164164ba88734fab701f2b14.jpg" width={34} height={34} />
      <button className='button_red' onClick={()=>onRemove(index)}> X </button>
      <div>
        <h4>{name} </h4>
        <p>{comment}</p>
      </div>
    </div>
    
  );
};

export default Inputs;
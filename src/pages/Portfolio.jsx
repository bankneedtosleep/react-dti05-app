import React from 'react';
import Navbar from '../components/Navbar';

export default function Portfolio() {
    const pc = { color: 'yellow'} 
    return (
    <>
      <Navbar pc={pc}/>
      <div>Portfolio</div>
    </>
  );
}

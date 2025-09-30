import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
    const ac = { color: 'yellow'}
    return (
    <>
      <Navbar ac={ac} />
      <div>About</div>
    </>
  );
}

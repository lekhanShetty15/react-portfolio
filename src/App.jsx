import React, { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue,animate} from "framer-motion";
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css'

import Header from './components/header'
import Hello from './components/hello'
import Footer from './components/footer'




const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const App = ()=>{
  const color= useMotionValue(COLORS[0])
const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

  useEffect(()=>{
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror"
    })
  }, [])


  return(
    <motion.section
    style={{
      backgroundImage
    }} 
    className='relative  overflow-hidden '>
      
     <Header />
     <Hello />
     <Footer />
     
    
     <div className='absolute inset-0 z-0'>
      <Canvas>
        <Stars radius={100} count={1000} factor={4} fade speed={2} />
      </Canvas>
     </div>
    </motion.section>
    
  )
}

export default App

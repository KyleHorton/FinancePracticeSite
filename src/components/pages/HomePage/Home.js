import React from 'react'
import HeroSection from '../../HeroSection.js'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../../data/Data.js'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home

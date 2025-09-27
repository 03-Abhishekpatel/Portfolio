import React from 'react'
import ToogleTheme from '../components/ToogleTheme';
import StarBackground from '../components/StarBackground';

function Home() {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <ToogleTheme />

            <StarBackground />
        </div>

    )
}

export default Home;

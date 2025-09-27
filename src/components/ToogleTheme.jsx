import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';
function ToogleTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme === 'dark'){
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }else{
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, [])
    const toogleTheme = () => {
        if(isDarkMode){

            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", 'light');
            console.log(isDarkMode);
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", 'dark');
            console.log(isDarkMode);
            setIsDarkMode(true);
        }
    }
    return (
        <button 
        onClick={toogleTheme}
        className={cn(
            'fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
            'focus:outline-hidden'
        )}>

            {isDarkMode ? 
            (<Sun className='h-6 w-6 text-yellow-300'/>):
            (<Moon className='h-6 w-6 text-blue-600'/>)

            }
        </button>
    )
}

export default ToogleTheme;

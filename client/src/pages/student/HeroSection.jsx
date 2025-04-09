import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'



function HeroSection() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <>
            <div className='relative bg-gradient-to-r bg-[#1988f5] dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center'>
                <div className='max-w-3xl mx-auto'>
                    <h1 className='text-white text-4xl font-bold mb-4'> Find the best courses for you </h1>
                    <p className='text-gray-200 dark:text-gray-400 mb-8'> Discover ,learn ,and UPskill with our range of course</p>
                    <form className='flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
                        <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search Courses'
                            className='flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500' />

                        <Button  type ="submit"className="bg-blue-700 dark:bg-blue-700 text-white px-8 py-6 rounded-r-full hover:bg-blue-800 dark:hover:bg-blue-700"> Search</Button>

                    </form>
                    <Button className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200">  Explore Courses</Button>
                </div>
            </div>
        </>
    )
}

export default HeroSection

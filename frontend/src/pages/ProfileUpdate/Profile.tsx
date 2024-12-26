import React from 'react'

const Profile:React.FC = () => {
    return (
        <div className='bg-black h-[100vh]'>
          <ul className='text-white bg-purple-600 h-16 flex items-center '>
            <div className='hidden sm:flex gap-4  justify-between px-6 text-xl'>
            <li>Name </li> 
            <li>ABout</li>
            <li>contact</li>
            <li>new</li>
            <li>Name </li>
            <li>ABout</li>
            <li>contact</li>

            </div>
            <p className='flex sm:hidden justify-end px-2'>three dot</p>
          </ul>
        </div>
    )
}

export default Profile

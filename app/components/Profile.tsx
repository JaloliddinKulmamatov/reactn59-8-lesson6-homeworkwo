import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div >
        <Image src="/computer.png" alt="abc" />
        <h3 className="font-bold text-xl mt-3">Lorem ipsum dolor</h3>
        <p className="mt-1 mb-1 font-light">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
        <a className=" font-bold hover:underline" href="#">
          Browse
        </a>
    </div>
  )
}

export default Profile
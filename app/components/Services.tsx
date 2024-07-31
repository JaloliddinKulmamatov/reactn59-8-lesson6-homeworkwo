import React from 'react'
import Image from 'next/image'

interface ServicesProps {
  src: string;
}

const Services: React.FC<ServicesProps> = ({ src }) => {
  return (
    <div className='flex flex-col items-center text-center w-96 mb-11'>
      <Image src={src} alt='service' />
      <h4 className='mt-4 font-semibold'>Lorem ipsum dolor</h4>
      <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Turpis donec eu mattis <br /> tincidunt viverra eu. Lacus turpis felis</p>
    </div>
  )
}

export default Services;

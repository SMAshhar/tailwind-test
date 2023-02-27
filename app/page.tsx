import Image from 'next/image'
import Link from 'next/link';
import panaversePic from '../public/p.webp';
//https://beta.nextjs.org/docs/optimizing/images

export default function Page() {
  return (
    <div className="flex">

      <div>
        <Image src={panaversePic} width={80} height={80} alt='music' />
      </div>
      <div>
        <h1>Welcome to Panaverse</h1>
        <h2>A Community of Web 3 and Metaverse Developers</h2>
        <button>Learn More</button>
        <p>
          <div>
            <Link href="/ver1" className='bg-blue-200 text-opacity-1'>Ver1</Link></div>
          <div><Link href="/ver2">Ver2 </Link></div>
          <div><Link href="/box">box </Link></div>
          <div><Link href="/flex-box">Flex box</Link></div>
          <div><Link href="/justify"> Justify</Link></div>
        </p>
      </div>
      
    </div>
  )
}
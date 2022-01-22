import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className='h-screen bg-main flex justify-center items-center'  >
      <main className='bg-card rounded-lg h-min min-w-max p-4 flex flex-col gap-y-4'>
        <Image
          src="/images/image-equilibrium.jpg"
          alt="Picture of NFT"
          width={300}
          height={300}
          className='rounded-lg'
        />
        <div className='text-2xl font-semibold text-white'>Equilibrium #3429</div>
        <div className='text-slate-400 text-base'>Our Equilibrium collection promotes
          <br />
          balance and calm.</div>
        <div className='flex justify-between items-center border-b-2 border-gray-200 border-opacity-10 py-4'>
          <div className='flex items-center gap-x-1 text-cyan'>
            <Image
              src="/images/icon-ethereum.svg"
              alt="Picture of Author"
              width={24}
              height={32}
            />&nbsp;
            <span>0.041 ETH</span>
          </div>
          <div className='flex items-center gap-x-1 text-slate-400'>
            <Image
              src="/images/icon-clock.svg"
              alt="Picture of Author"
              width={24}
              height={24} />
            <span>
              3 days left
            </span>
          </div>
        </div>
        <div className='flex items-center gap-x-2 text-slate-400  text-sm '>
          <Image
            src="/images/image-avatar.png"
            alt="Picture of Author"
            width={36}
            height={36}
            className='rounded-full border-2 border-white'
          />
          Creation of 
          <span className='text-white font-semibold '>Jules Wyvern</span>
        </div>
      </main>
    </div>
  )
}

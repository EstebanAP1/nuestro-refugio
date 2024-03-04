import NavLinks from './navlinks'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='md:fixed md:z-10 w-full max-md:pt-2 max-md:px-2 md:h-24 flex flex-col md:flex-row items-center justify-between'>
      <div className='flex bg-secondary max-md:rounded-t-xl md:rounded-br-full flex-row w-full md:w-[35%] md:h-full justify-start items-center gap-4 max-md:py-3'>
        <div className='flex items-center justify-center p-2'>
          <Image
            className='rounded-lg aspect-square'
            src='/inicio/logo.jpg'
            width={80}
            height={80}
            alt='Logo de Nuestro Refugio'
          />
        </div>
        <div>
          <h1 className='text-3xl font-bold text-principal'>Nuestro refugio</h1>
          <span className='text-sm font-bold text-tertiary'>
            Hogar gerontogeriátrico
          </span>
        </div>
      </div>
      <div className='flex max-md:w-full max-md:bg-secondary max-md:border-t-2 max-md:border-t-principal max-md:rounded-b-xl md:grow h-full'>
        <NavLinks />
      </div>
    </header>
  )
}

import Image from 'next/image'
import styles from '@/app/ui/css/inicio.module.css'

export default function Home() {
  return (
    <main className='relative w-full h-full grid md:grid-cols-2'>
      <div className='flex flex-col md:justify-center items-start w-full md:h-screen py-8 px-4 md:pl-24 gap-1 md:gap-5'>
        <h1 className='text-3xl md:text-6xl text-principal font-bold'>
          Nuestra experiencia
        </h1>
        <p className='text-secondary text-lg md:text-2xl text-pretty'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          rerum iusto nemo nihil minima tempore, eius, vero enim alias
          laudantium unde impedit repellendus modi eos ut maiores quisquam
          accusamus at.
        </p>
      </div>
      <div className='flex justify-center items-center w-full md:h-screen'>
        <Image
          src={'/inicio/ancianos.png'}
          alt='Pareja de ancianos sonriendo.'
          width={400}
          height={400}
          quality={100}
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center p-10 md:py-28 w-full md:h-screen gap-1 md:gap-4 ${styles.separationRight}`}>
        <h1 className='text-2xl md:text-4xl text-principal font-bold'>
          ¿Dónde encontrarnos?
        </h1>
        <div className='flex justify-center items-center w-full md:w-[55%] h-full bg-secondary rounded-xl'>
          *mapa*
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center p-10 md:py-28 w-full md:h-screen gap-1 md:gap-4 ${styles.separationLeft}`}>
        <h1 className='text-2xl md:text-4xl text-principal font-bold'>
          Horario de visitas
        </h1>
        <div className='flex flex-col justify-evenly items-center w-full md:w-[55%] h-full bg-secondary rounded-xl p-10 gap-8'>
          <div className='flex flex-col justify-center items-center w-full gap-5'>
            <div className='flex justify-center items-center w-full h-12 rounded-lg bg-principal'>
              <h2 className='text-lg md:text-xl text-secondary font-semibold'>
                Días de semana
              </h2>
            </div>
            <p className='md:text-lg'>
              Miércoles <span className='text-principal'>14:00 - 16:00</span>
            </p>
            <p className='md:text-lg'>
              Viernes <span className='text-principal'>14:00 - 16:00</span>
            </p>
            <div className='flex justify-center items-center w-full h-12 rounded-lg bg-principal'>
              <h2 className='text-lg md:text-xl text-secondary font-semibold '>
                Fines de semana
              </h2>
            </div>
            <p className='md:text-lg'>
              Sábado <span className='text-principal'>10:00 - 12:00</span>
            </p>
          </div>
        </div>
      </div>
      <Image
        src={'/inicio/circulo.webp'}
        alt='Circulo de fondo'
        width={340}
        height={340}
        quality={100}
        className='absolute aspect-square -left-[100px] top-[35%] md:top-[75%] -z-10'
      />
    </main>
  )
}

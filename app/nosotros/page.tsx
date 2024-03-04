export default function NostrosPage() {
  return (
    <main className='w-full h-screen flex flex-col'>
      <div className='flex flex-col h-[50%] md:justify-center items-start w-full md:w-[50%] max-md:pt-8 max-md:pb-2 md:pt-28 px-4 md:pl-32 gap-1 md:gap-5'>
        <h1 className='text-3xl md:text-6xl text-principal font-bold'>
          ¿Quiénes somos?
        </h1>
        <p className='text-secondary text-lg md:text-2xl text-pretty'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum
          alias a, quod explicabo dicta iure assumenda dignissimos officia
          excepturi nesciunt veniam iusto voluptatem numquam nulla architecto
          rerum odit? Modi.
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center md:justify-start w-full h-[50%] md:pl-32 md:py-10 max-md:pb-10 gap-8 md:gap-16'>
        <div className='flex flex-col items-center justify-center bg-secondary h-full md:h-[80%] w-[80%] md:w-[25%] rounded-xl'></div>
        <div className='flex flex-col items-center justify-center bg-secondary h-full md:h-[80%] w-[80%] md:w-[25%] rounded-xl'></div>
      </div>
    </main>
  )
}

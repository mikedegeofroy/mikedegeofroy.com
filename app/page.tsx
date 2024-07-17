import Image from 'next/image';
import arrowIcon from '@/public/arrow.svg';

const Home = () => {
  return (
    <main className='flex min-h-screen w-screen overflow-x-hidden flex-col justify-between p-5 text-xl md:text-3xl font-light'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <h1>SELECTED PROJECTS</h1>
          <Image
            className='dark:invert h-4 w-4 md:h-5 md:w-5 m-1'
            priority
            src={arrowIcon}
            alt={'arrow icon'}
          />
        </div>
        <h1 className='hidden md:block'>ADVANCED TECHNOLOGY</h1>
        <h1 className='hidden md:block'>{new Date().getFullYear()}</h1>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='cursor-pointer w-fit'>TELEGRAM FILESYSTEM</h1>
        <h1 className='cursor-pointer w-fit'>
          DISHDASH — TINDER BUT FOR PLACES
        </h1>
        <h1 className='cursor-pointer w-fit'>SIGHTQUEST</h1>
      </div>
      <div className='flex-col'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <h1>DE GEOFROY</h1>
            <Image
              className='dark:invert h-4 w-4 md:h-5 md:w-5 m-1'
              priority
              src={arrowIcon}
              alt={'arrow icon'}
            />
          </div>
          <h1 className='hidden md:block'>ABOUT ME</h1>
          <h1>BLOG</h1>
        </div>
        <div className='h-[8rem] md:h-[12rem] flex items-center'>
          <span className='text-[8rem] md:text-[12rem] font-medium'>mike*</span>
        </div>
      </div>
    </main>
  );
};

export default Home;

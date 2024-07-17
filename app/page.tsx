import Image from 'next/image';
import arrowIcon from '@/public/arrow.svg';
import Link from 'next/link';
import { allDocs } from '@/.contentlayer/generated';

const Home = () => {
  return (
    <div className='flex flex-grow overflow-x-hidden flex-col justify-between'>
      <span></span>
      <div className='flex flex-col gap-2'>
        {allDocs.slice(0, 3).map((x, indx) => {
          return (
            <Link key={indx} href={x.slug}>
              <h1 className='cursor-pointer w-fit'>{x.title}</h1>
            </Link>
          );
        })}
      </div>
      <div className='flex-col'>
        <div className='flex justify-between'>
          <Link href={'/about'}>
            <div className='flex items-center'>
              <h1>DE GEOFROY</h1>
              <Image
                className='dark:invert h-4 w-4 md:h-5 md:w-5 m-1'
                priority
                src={arrowIcon}
                alt={'arrow icon'}
              />
            </div>
          </Link>
          <Link href={'/about'}>
            <h1 className='hidden md:block'>ABOUT ME</h1>
          </Link>

          <Link href={'/blog'}>
            <h1>BLOG</h1>
          </Link>
        </div>
        <div className='h-[8rem] md:h-[12rem] flex items-center'>
          <span className='text-[8rem] md:text-[12rem] font-medium'>mike*</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

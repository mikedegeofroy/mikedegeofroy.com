import Link from 'next/link';
import { allDocs } from '@/.contentlayer/generated';

const Home = () => {
  const blog = allDocs.filter((x) => x.selected && x.slug.match('blog'));
  const projects = allDocs.filter(
    (x) => x.selected && x.slug.match('projects')
  );

  return (
    <>
      <span className='mb-5 font-medium'>Today</span>
      <p className='text-muted'>
        Software Engineering student at ITMO University and founder of
        shamps.dev, passionate about building seamless digital experiences that
        feel like magic.
      </p>
      {projects.length > 0 && (
        <div className='mt-16 sm:mt-32'>
          <span className='mb-5 block font-medium'>Projects</span>
          <div className='flex flex-col gap-2'>
            {projects.map((x, indx) => {
              return (
                <Link key={indx} href={x.slug}>
                  <div className='-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#191918] sm:py-3'>
                    <h1 className='cursor-pointer w-fit'>{x.title}</h1>
                    <p className='text-muted'>{x.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      {blog.length > 0 && (
        <div className='mt-16 sm:mt-32'>
          <span className='mb-5 block font-medium'>Blog</span>
          <div className='flex flex-col gap-2'>
            {blog.map((x, indx) => {
              return (
                <Link key={indx} href={x.slug}>
                  <div className='-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#191918] sm:py-3'>
                    <h1 className='cursor-pointer w-fit'>{x.title}</h1>
                    <p className='text-muted'>{x.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <div className='mt-16 sm:mt-36'>
        <span className='mb-5 block font-medium'>More</span>
        <p className='text-muted'>
          You can contact me at <b>@mikedegeofroy</b> on telegram.
        </p>
      </div>
    </>
  );
};

export default Home;

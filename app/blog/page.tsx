import { allDocs } from '@/.contentlayer/generated';
import Link from 'next/link';

const PostIndex = () => {
  return (
    <>
      {allDocs
        .filter((x) => x.visible)
        .map((x, indx) => {
          return (
            <Link key={indx} href={x.slug}>
              <h1 className='cursor-pointer w-fit'>{x.title}</h1>
            </Link>
          );
        })}
    </>
  );
};

export default PostIndex;

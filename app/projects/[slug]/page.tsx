import { allDocs } from '@/.contentlayer/generated';
import { Mdx } from '@/components/Mdx';
import { notFound } from 'next/navigation';

const getDocFromSlug = (slug: string) => {
  const doc = allDocs.find((x) => x.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
};

const ProjectPage = (props: any) => {
  const slug = props.params.slug;

  const doc = getDocFromSlug(slug);

  return (
    <>
      <div className='pb-10'>
        <h1 className='mt-2 scroll-m-20 text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight py-10'>
          {doc.displayTitle ?? doc.title}
        </h1>
        <p className='py-5'>{doc.description}</p>
      </div>
      <Mdx code={doc.body.code} />
    </>
  );
};

export default ProjectPage;

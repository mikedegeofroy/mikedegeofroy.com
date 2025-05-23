import { allDocs } from '@/.contentlayer/generated';
import { metadata } from '@/app/layout';
import { Mdx } from '@/components/Mdx';
import { notFound } from 'next/navigation';

const getDocFromSlug = (slug: string) => {
  const doc = allDocs.find((x) => x.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const doc = getDocFromSlug(params.slug);

  const title = doc.title;
  const description = doc.description || 'Blog post on mikedegeofroy.com';
  const imageUrl = `https://mikedegeofroy.com/api/og?title=${encodeURIComponent(
    title
  )}`;

  return {
    ...metadata,
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: title,
        },
      ],
    },
  };
}

const BlogPage = (props: any) => {
  const slug = props.params.slug;

  const doc = getDocFromSlug(slug);

  return (
    <>
      <div className='pb-10'>
        <h1 className='mt-2 scroll-m-20 text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight py-10'>
          {doc.displayTitle ?? doc.title}
        </h1>
      </div>
      <Mdx code={doc.body.code} />
    </>
  );
};

export default BlogPage;

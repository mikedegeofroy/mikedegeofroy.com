import { allDocs } from "@/.contentlayer/generated";
import { metadata } from "@/app/layout";
import { Mdx } from "@/components/Mdx";
import { notFound } from "next/navigation";

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

  return {
    ...metadata,
    title: doc.title,
    description: doc.description,
  };
}

const BlogPage = (props: any) => {
  const slug = props.params.slug;

  const doc = getDocFromSlug(slug);

  return (
    <>
      <div className="pb-10">
        <h1 className="mt-2 scroll-m-20 text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight py-10">
          {doc.displayTitle ?? doc.title}
        </h1>
      </div>
      <Mdx code={doc.body.code} />
    </>
  );
};

export default BlogPage;

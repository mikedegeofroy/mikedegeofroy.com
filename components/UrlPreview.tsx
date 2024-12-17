import { fetchMetadata, Metadata } from "@/app/actions/fetchMetadata";
import React from "react";
import { twMerge } from "tailwind-merge";

interface UrlPreviewProps {
  url: string;
  className?: string;
}

export default async function UrlPreview({ url, className }: UrlPreviewProps) {
  const metadata: Metadata | null = await fetchMetadata(url);

  if (!metadata) {
    return <></>;
  }

  return (
    <div
      className={twMerge(
        "w-full mx-auto rounded-lg overflow-hidden border",
        className,
      )}
    >
      <a
        href={metadata.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex"
      >
        {metadata.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={metadata.image}
            alt={metadata.title}
            className="w-[40%] aspect-[2/1] rounded-lg overflow-hidden object-cover"
          />
        )}
        <div className="px-4">
          <h2 className="text-lg font-semibold line-clamp-2">
            {metadata.title}
          </h2>
          <p className="text-sm mt-1 line-clamp-2">
            {metadata.description}
          </p>
        </div>
      </a>
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';

interface TelegramCommentsProps {
  postUrl: string;
  commentsLimit?: number;
}

export const TelegramComments = ({
  postUrl,
  commentsLimit = 3,
}: TelegramCommentsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (containerRef.current.children.length > 0) return;

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-discussion', postUrl);
    script.setAttribute('data-comments-limit', commentsLimit.toString());
    script.setAttribute('data-color', 'FFFFF');
    script.setAttribute('data-dark', '1');
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [postUrl, commentsLimit]);

  return <div ref={containerRef} className='w-full flex justify-center py-8' />;
};

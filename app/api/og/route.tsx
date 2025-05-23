import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const fontData = await fetch(
    new URL('/fonts/InterSemiBold.ttf', req.nextUrl.origin)
  ).then((res) => res.arrayBuffer());

  const title = new URL(req.url).searchParams.get('title') || 'My Blog';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '60px 80px',
        }}
      >
        <div
          style={{
            fontFamily: 'Inter',
            fontWeight: 800,
            fontSize: 64,
            lineHeight: 1.2,
            color: '#313131',
            maxWidth: '1000px',
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 800,
          style: 'normal',
        },
      ],
    }
  );
}

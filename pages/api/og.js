import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}
// fetching custom font stored in the public directory
const font = fetch(new URL('/public/fonts/outfit-v4-latin-500.ttf', import.meta.url)).then(res => res.arrayBuffer())

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)
    const fontData = await font

    // dynamic params
    const title = searchParams.has('title') ? searchParams.get('title')?.slice(0, 100) : 'My default title'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'white',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              style={{ marginBottom: '-30px' }}
              width="90px"
              height="90px"
              viewBox="0 0 512 512"
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M256,394.89A142.47,142.47,0,0,0,355.12,355a5.59,5.59,0,0,0-7.74-8.06A131.32,131.32,0,0,1,256,383.72c-72.76,0-131.95-59.2-131.95-132s59.19-132,132-132c2.77,0,5.55.09,8.28.26a5.59,5.59,0,1,0,.69-11.15c-3-.19-6-.28-9-.28-78.92,0-143.12,64.2-143.12,143.12S177.08,394.89,256,394.89Z" />
              <path d="M380.75,294.86a132.89,132.89,0,0,1-8.11,18.66,5.58,5.58,0,0,0,2.31,7.55,5.5,5.5,0,0,0,2.61.66,5.58,5.58,0,0,0,4.94-3,143,143,0,0,0,8.81-20.25,5.59,5.59,0,1,0-10.56-3.65Z" />
              <path d="M392.83,271.42a5.59,5.59,0,0,0,5.55-5,145.5,145.5,0,0,0,.74-14.63,143.19,143.19,0,0,0-18.05-69.62,5.58,5.58,0,0,0-9.75,5.45,132.17,132.17,0,0,1,15.94,77.67,5.59,5.59,0,0,0,5,6.12A5.44,5.44,0,0,0,392.83,271.42Z" />
              <path d="M438.84,376.19a220,220,0,0,0,38.29-124.42c0-121.93-99.2-221.13-221.13-221.13A221.19,221.19,0,0,0,146.74,59.47a5.59,5.59,0,1,0,5.53,9.71A209.93,209.93,0,0,1,256,41.81c115.77,0,210,94.19,210,210a208.84,208.84,0,0,1-36.35,118.12,5.59,5.59,0,1,0,9.23,6.3Z" />
              <path d="M125.56,80.07a5.59,5.59,0,0,0-7.86-.86c-4.19,3.36-8.31,6.92-12.25,10.59a5.58,5.58,0,1,0,7.6,8.18c3.75-3.48,7.66-6.86,11.64-10A5.59,5.59,0,0,0,125.56,80.07Z" />
              <path d="M256,472.9a222.5,222.5,0,0,0,50.3-5.74,5.59,5.59,0,0,0-2.53-10.89A211.22,211.22,0,0,1,256,461.73c-115.77,0-210-94.19-210-210A208.39,208.39,0,0,1,86,128.53,5.59,5.59,0,1,0,77,122,219.48,219.48,0,0,0,34.87,251.77C34.87,373.7,134.07,472.9,256,472.9Z" />
              <path d="M197.23,238.14a5.59,5.59,0,1,0,10.88,2.53,49.14,49.14,0,1,1,3.65,32.55,5.58,5.58,0,1,0-10,4.89,60.06,60.06,0,0,0,40.65,32.43,60.78,60.78,0,0,0,13.75,1.59,60.34,60.34,0,1,0-58.89-74Z" />
              <path d="M431.15,429a52.41,52.41,0,1,0-52.4,52.4A52.47,52.47,0,0,0,431.15,429Zm-93.64,0a41.24,41.24,0,1,1,41.24,41.23A41.28,41.28,0,0,1,337.51,429Z" />
              <path d="M331.93,176a38.7,38.7,0,1,0-38.69-38.69A38.74,38.74,0,0,0,331.93,176Zm0-66.21a27.52,27.52,0,1,1-27.52,27.52A27.55,27.55,0,0,1,331.93,109.79Z" />
            </svg>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 50,
              fontStyle: 'normal',
              color: 'black',
              marginTop: 30,
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
            }}
          >
            <b>Sai Shanmukh</b>
          </div>
          <div
            style={{
              fontSize: 20,
              fontStyle: 'normal',
              color: 'black',
              whiteSpace: 'pre-wrap',
            }}
          >
            Fullstack Developer
          </div>
          <div
            style={{
              left: 42,
              bottom: 42,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
                opacity: 0.6,
              }}
            >
              <b> shanmukh.xyz </b>
            </span>
          </div>
        </div>
      ),
      {
        width: 800,
        height: 400,
        // Supported options: 'twemoji', 'blobmoji', 'noto', 'openmoji', 'fluent' and 'fluentFlat'
        emoji: 'twemoji',
        // Using custom font
        fonts: [
          {
            name: 'Outfit',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

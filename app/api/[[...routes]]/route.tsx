/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue} = c
  
  return c.res({
    
    image: (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          background:'black',
        
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 50,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
        
          Te interesa aprender sobre tecnología, blockchain, con contenido de excelente calidad y
          ...en español ??!!
        </div>
      </div>
    ),
    intents: [
      
      <Button action='/portada'>Si !</Button>,
      
    ],
  })
})

app.frame('/portada', (c) => {
  const { buttonValue} = c
  
  return c.res({
    image: '/img-frame1.png',
    
    intents: [
      
        <Button.Link href='https://www.youtube.com/@inbestprogram'>Youtube</Button.Link>,
        <Button.Link href='https://t.me/+LR136SzDC1AzYjQx'>Telegram</Button.Link>,
        <Button.Link href='https://warpcast.com/inbestprogram'>Warpcast</Button.Link>,
        <Button.Reset>Inicio</Button.Reset>,
    ],
  })
 })


devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

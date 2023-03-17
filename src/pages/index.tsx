import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Front-End Developer | Juan Antonio Vivaldy Saragih</title>
        <meta name="description" content="This project contains my portfolio which I attach in the form of a website. I made this to implement my skills as a Full Stack Web Developer using Next JS." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className='h-screen flexCenter'>
            <h1 className='text-4xl font-bold font-sfmono'>LANDING PAGE</h1>
          </div>
      </main>
    </>
  )
}

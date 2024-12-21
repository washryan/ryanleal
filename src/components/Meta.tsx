import Head from 'next/head'

interface MetaProps {
  title?: string
  description?: string
  image?: string
}

export default function Meta({ 
  title = "Ryan Leal - Desenvolvedor Full-Stack Java",
  description = "Desenvolvedor Full-Stack Java e Front-end em formação, especializado em criar experiências digitais inovadoras e responsivas.",
  image = "/images/og-image.jpg"
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#0f1117" />
    </Head>
  )
}


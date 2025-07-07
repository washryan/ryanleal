import Head from "next/head"

interface MetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
  locale?: string
  author?: string
  keywords?: string[]
}

export default function Meta({
  title = "Ryan Leal - Desenvolvedor Full-Stack Java",
  description = "Desenvolvedor Full-Stack Java e Front-end em formação, especializado em criar experiências digitais inovadoras e responsivas. Atualmente trabalho como Assistente de TI no Assaí Atacadista.",
  image = "/images/og-image.jpg",
  url = "https://ryan-leal-portfolio.vercel.app",
  type = "website",
  siteName = "Ryan Leal Portfolio",
  locale = "pt_BR",
  author = "Ryan Leal",
  keywords = [
    "Ryan Leal",
    "Desenvolvedor Full-Stack",
    "Java Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Portfolio",
    "Assistente TI",
    "Assaí Atacadista",
    "EBAC",
    "Análise e Desenvolvimento de Sistemas",
  ],
}: MetaProps) {
  const fullTitle = title.includes("Ryan Leal") ? title : `${title} | Ryan Leal`
  const canonicalUrl = url

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ryanleall" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0f1117" />
      <meta name="msapplication-TileColor" content="#0f1117" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

      {/* Structured Data - Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ryan Leal",
            jobTitle: "Full-Stack Developer",
            description: description,
            url: canonicalUrl,
            image: image,
            sameAs: [
              "https://github.com/washryan",
              "https://www.linkedin.com/in/ryanleall/",
              "https://www.instagram.com/ryanleall",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Assaí Atacadista",
            },
            alumniOf: [
              {
                "@type": "Organization",
                name: "EBAC - Escola Britânica de Artes Criativas e Tecnologia",
              },
              {
                "@type": "Organization",
                name: "Faculdade Maurício de Nassau",
              },
            ],
            knowsAbout: [
              "Java",
              "JavaScript",
              "HTML",
              "CSS",
              "React",
              "Next.js",
              "Frontend Development",
              "Full-Stack Development",
            ],
          }),
        }}
      />

      {/* Structured Data - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            description: description,
            url: canonicalUrl,
            author: {
              "@type": "Person",
              name: author,
            },
            inLanguage: "pt-BR",
            copyrightYear: new Date().getFullYear(),
            genre: "Portfolio",
          }),
        }}
      />

      {/* Structured Data - Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Portfolio de Ryan Leal",
            description: "Portfolio profissional showcasing projetos de desenvolvimento web e habilidades técnicas",
            author: {
              "@type": "Person",
              name: "Ryan Leal",
            },
            dateCreated: "2025",
            genre: "Web Development Portfolio",
            inLanguage: "pt-BR",
          }),
        }}
      />
    </Head>
  )
}

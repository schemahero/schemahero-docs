import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SchemaHero - A modern approach to database schema migrations</title>
        <meta name="description" content="SchemaHero is a Kubernetes Operator for Declarative Schema Management for various databases." />
        <meta property="og:title" content="SchemaHero - A modern approach to database schema migrations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schemahero.io/" />
        <meta property="og:image" content="/images/schemahero-social.jpg" />
        <meta property="og:description" content="SchemaHero is a Kubernetes Operator for Declarative Schema Management for various databases." />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:500&display=swap" rel="stylesheet" />
      </Head>

      <div id="particles-js" />

      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="logo" />
            <div className="main-menu">
              <ul />
              <div style={{ marginLeft: '30px', minWidth: '98px' }}>
                <a
                  className="github-button"
                  href="https://github.com/schemahero/schemahero"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star schemahero/schemahero on GitHub"
                >
                  Star
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="strip" style={{ backgroundColor: '#fff' }}>
          <div className="container pt-2 pb-10">
            <div className="row">
              <div className="col-12">
                <div className="landing-logo" />
                <div className="content">
                  <p>Modernized Database Schema Migrations</p>
                </div>
                <div className="flex flex-row flex-wrap button-wrapper">
                  <a className="button border-button" href="https://www.youtube.com/watch?v=_fMmRgThGyA&t=3s">
                    Watch Video
                  </a>
                  <Link href="/learn/tutorial/introduction" className="button border-button">
                    Learn More
                  </Link>
                  <Link href="/docs/installing/kubectl" className="button primary-button">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="particle-bg">
          <p className="p-15">
            SchemaHero is an open-source database schema migration tool that converts a schema definition
            into migration scripts that can be applied in any environment. Written as both a CLI utility
            and a Kubernetes Operator, SchemaHero eliminates the task of creating and managing sequenced
            migration scripts that are compatible with all environments that an application is running in.
          </p>
        </div>

        <div style={{ padding: '0 10% 130px 10%' }}>
          <div className="video-container">
            <iframe
              width="896"
              height="504"
              src="https://www.youtube.com/embed/zkmtignxbv4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex alignItems--center justifyContent--center">
          <span className="u-marginRight--small github" />
          <a
            href="https://github.com/schemahero/schemahero"
            target="_blank"
            rel="noopener noreferrer"
            className="FooterItem u-marginTop--4"
          >
            View on GitHub
          </a>
        </div>

        <div className="FooterContent-wrapper flex justifyContent--center">
          <div className="Footer-container">
            <div className="TroubleshootFooter flex">
              <div className="flex alignItems--center">
                <div className="flex" style={{ lineHeight: '25px', paddingBottom: '80px' }}>
                  <span className="FooterItem">
                    <a href="https://github.com/schemahero/schemahero/blob/main/CODE_OF_CONDUCT.md">
                      Code of Conduct
                    </a>{' '}
                    | <Link href="/community">Community</Link> |{' '}
                    <Link href="/community/roadmap">Roadmap</Link> |{' '}
                    <a href="https://replicated.com/oss" target="_blank" rel="noopener noreferrer">
                      Open Source @ Replicated
                    </a>
                    <br />
                    <br />
                    <span className="footer-copyright">
                      © Copyright The SchemaHero Authors. All rights reserved.
                      <br />
                      The Linux Foundation has registered trademarks and uses trademarks. For a list of
                      trademarks of The Linux Foundation, please see our{' '}
                      <a href="https://www.linuxfoundation.org/trademark-usage">Trademark Usage page</a>.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="https://buttons.github.io/buttons.js" strategy="lazyOnload" />
      <Script
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 700 } },
              color: { value: '#ffffff' },
              shape: {
                type: 'circle',
                stroke: { width: 2, color: '#fff' },
              },
              opacity: { value: 0.5, random: false },
              size: { value: 1, random: true },
              line_linked: {
                enable: true,
                distance: 200,
                color: '#ffffff',
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: { enable: false },
                onclick: { enable: false },
                resize: true,
              },
            },
            retina_detect: true,
          })
        }}
      />

      <style jsx global>{`
        /* Hide Nextra's default layout for homepage */
        .nextra-nav-container,
        .nextra-sidebar-container,
        .nextra-toc,
        .nextra-breadcrumb,
        footer.nx-bg-gray-100 {
          display: none !important;
        }

        main.nx-w-full {
          max-width: 100% !important;
          padding: 0 !important;
        }

        article.nx-w-full {
          max-width: 100% !important;
        }

        body {
          margin: 0;
          font-family: 'Roboto', Arial, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.4;
          color: #303030;
          text-align: left;
          background-color: #fff;
        }

        #particles-js {
          background: rgb(18, 53, 121);
          background: linear-gradient(0deg, rgba(18, 53, 121, 1) 0%, rgba(50, 109, 225, 1) 58%);
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .wrapper {
          flex: 1;
        }

        .header {
          color: #326de6;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
        }

        .header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .container {
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
          margin-right: auto;
          margin-left: auto;
          max-width: 1140px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -10px;
          margin-left: -10px;
        }

        .col-12 {
          position: relative;
          width: 100%;
          padding-right: 10px;
          padding-left: 10px;
          flex: 0 0 100%;
          max-width: 100%;
        }

        .pt-2 {
          padding-top: 20px !important;
        }

        .pb-10 {
          padding-bottom: 100px !important;
        }

        .p-15 {
          padding: 150px 0 !important;
        }

        .landing-logo {
          max-width: 357px;
          height: 298px;
          margin: 0 auto;
          background-image: url(/images/schemahero-large.svg);
          background-repeat: no-repeat;
          background-size: 100%;
          overflow: visible;
        }

        .content p {
          margin: 30px auto;
          font-family: ubuntu, sans-serif;
          font-size: 22px;
          font-weight: 500;
          text-align: center;
        }

        .button-wrapper {
          margin-top: 50px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .button {
          border-radius: 0;
          min-width: 175px !important;
          margin: 0 10px 20px 10px;
          font-family: inherit;
          line-height: inherit;
          font-weight: 700;
          padding: 17px 35px !important;
          letter-spacing: 1px;
          font-size: 15px;
          border: 0;
          transition: all 0.2s ease;
          outline: 0;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .button.primary-button {
          background: linear-gradient(0deg, rgba(43, 89, 177, 1) 0%, rgba(80, 138, 252, 1) 100%);
          color: #fff;
        }

        .button.primary-button:hover {
          background: linear-gradient(0deg, rgba(25, 69, 153, 1) 0%, rgba(57, 115, 228, 1) 100%);
          text-decoration: none;
        }

        .button.border-button {
          background-color: #fff;
          border: 1px solid #326de6;
          color: #326de6;
        }

        .button.border-button:hover {
          border-color: #154fc6;
          color: #154fc6;
          text-decoration: none;
        }

        .particle-bg p {
          color: #fff;
          width: 70%;
          font-size: 1.2em;
          line-height: 2em;
          margin: 0 auto;
          text-align: center;
        }

        @media (max-width: 500px) {
          .particle-bg p {
            width: 90%;
          }
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          padding-top: 30px;
          height: 0;
          overflow: hidden;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .flex {
          display: flex;
          flex-direction: row;
        }

        .alignItems--center {
          align-items: center;
        }

        .justifyContent--center {
          justify-content: center;
        }

        .FooterContent-wrapper {
          padding: 20px 0;
          margin: 0 auto;
        }

        .FooterItem {
          font-size: 16px;
          padding: 0 10px;
          position: relative;
          color: #f5f8fc;
          font-weight: 600;
          text-align: center;
        }

        .FooterItem a {
          position: relative;
          color: #f5f8fc;
          font-weight: 700;
          text-decoration: underline;
        }

        .FooterItem a:hover {
          color: #b5cff1;
        }

        .footer-copyright {
          font-size: 12px !important;
          font-weight: normal;
        }

        .github {
          background-image: url(/images/github.svg);
          background-repeat: no-repeat;
          background-size: 20px 20px;
          width: 20px;
          height: 20px;
        }

        .u-marginTop--4 {
          margin-top: 4px;
        }

        .u-marginRight--small {
          margin-right: 8px;
        }

        .main-menu {
          display: flex;
          align-items: center;
        }

        .strip {
          background-color: #fff !important;
        }
      `}</style>
    </>
  )
}

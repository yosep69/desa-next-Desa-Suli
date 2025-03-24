import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { extractCritical } from '@emotion/server'

export default class _DOCUMENT extends Document<{
  ids: string[]
  css: string
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const page = await ctx.renderPage()
    const styles = extractCritical(page.html)
    return { ...initialProps, ...page, ...styles }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Netlify Widget */}
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <style data-emotion-css={this.props.ids.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `
            }}
          />
        </body>
      </Html>
    )
  }
}

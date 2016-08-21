import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

export default function HTML(props) {
  const { body } = props
  const head = Helmet.rewind()

  let css
  if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEqu iv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <head>
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
        </head>
        {css}
      </head>
      <body className="landing-page">
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  body: React.PropTypes.string,
}

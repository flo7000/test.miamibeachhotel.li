module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'media.test.miamibeachhotel.li'
          }
        ],
        // This will cause the browser to redirect and show the new URL
        destination: '/media/:path*',
        permanent: false
      }
    ]
  }
}

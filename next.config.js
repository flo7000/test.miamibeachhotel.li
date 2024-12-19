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
        // Use a full absolute URL so we actually switch the domain
        destination: 'https://test2.miamibeachhotel.li/media/:path*',
        permanent: false
      }
    ]
  }
}

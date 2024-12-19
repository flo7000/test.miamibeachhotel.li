module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/test2/:path*',
        has: [
          {
            type: 'host',
            value: 'test2.miamibeachhotel.li'
          }
        ]
      },
      {
        source: '/:path*',
        destination: '/media/:path*',
        has: [
          {
            type: 'host',
            value: 'media.test.miamibeachhotel.li'
          }
        ]
      }
    ]
  }
}
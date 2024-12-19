module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'media.test.miamibeachhotel.li'
            }
          ],
          destination: '/media/:path*'
        }
      ]
    }
  }
}

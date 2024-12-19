module.exports = {
  async rewrites() {
    return [
      // For test2.domain.ch
      {
        source: '/',
        destination: '/test2',
        has: [
          { type: 'host', value: 'test2.domain.ch' }
        ]
      },
      {
        source: '/:path*',
        destination: '/test2/:path*',
        has: [
          { type: 'host', value: 'test2.domain.ch' }
        ]
      },
      // For media.test.domain.ch
      {
        source: '/',
        destination: '/media',
        has: [
          { type: 'host', value: 'media.test.domain.ch' }
        ]
      },
      {
        source: '/:path*',
        destination: '/media/:path*',
        has: [
          { type: 'host', value: 'media.test.domain.ch' }
        ]
      }
    ]
  }
}

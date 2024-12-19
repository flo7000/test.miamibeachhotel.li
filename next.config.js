rewrites() {
  return {
      beforeFiles: [
          // if the host is `app.acme.com`,
          // this rewrite will be applied
          {
              source: '/:path*',
              has: [
                  {
                      type: 'host',
                      value: 'media.test.miamibeachhotel.li',
                  },
              ],
              destination: '/media/:path*',
          },
      ]
  }
}
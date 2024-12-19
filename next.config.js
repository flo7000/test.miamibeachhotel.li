module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/test-route',
          destination: '/media'
        }
      ]
    }
  }
}

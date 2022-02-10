module.exports = {
    // 解決路徑階層問題
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-credit-card/'
        : '/'
}
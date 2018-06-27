// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')({
            broswers: ['last 5 version']
        })
    ]
}
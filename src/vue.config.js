var PrerenderSpaPlugin = require('prerender-spa-plugin');
var path = require ('path')

module.exports = {
    configureWebpack: config => {
        baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue-portfolio/'
        : '/'
        if(process.env.NODE_ENV !== 'production') return

        return {
            plugins: [
                new PrerenderSpaPlugin(
                    path.resolve(__dirname, 'dist'),
                    ['/', '/about', 'portfolio/one', 'portfolio/two', 'portfolio/three', 'portfolio/four'],
                    {

                    }
                )
            ]
        }
    }
}

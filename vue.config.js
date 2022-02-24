module.exports = {
    transpileDependencies: ['vuetify'],
    configureWebpack: () => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin(
                    // Absolute path to compiled SPA
                    path.resolve(__dirname, 'dist'),
                    // List of routes to prerender
                    ['/'],
                    {
                        // options
                    },
                ),
            ],
        };
    },
};

const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

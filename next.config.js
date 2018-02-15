const withTypescript = require('@zeit/next-typescript')
const withCSS = require("./next-styles/css");
const withSass = require("./next-styles/sass");
const withStylus = require("./next-styles/stylus");

if (process.env.SASS) {
    module.exports = withTypescript(
        withCSS({
            ...withSass({
                cssModules: true,
                cssLoaderOptions: {
                    importLoaders: 2,
                    localIdentName: "[path][name]-[local]--[hash:base64:5]",
                }
            }),
            cssModules: false,
        })
    )
} else {
    module.exports = withTypescript(
        withCSS({
            ...withStylus({
                cssModules: true,
                cssLoaderOptions: {
                    importLoaders: 2,
                    localIdentName: "[path][name]-[local]--[hash:base64:5]",
                },
            }),
            cssModules: false,
        })
    )
}


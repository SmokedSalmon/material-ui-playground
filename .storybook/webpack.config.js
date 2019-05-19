// Configure storybook's webpack, using full control mode with storybook default config
// const marked = require('marked');
// const renderer = new marked.Renderer();

module.exports = async ({ config }) => {
    return {
        ...config,      // reuse default config
        module: {
            ...config.module,       // reuse default config
            rules: [
                ...config.module.rules,     // reuse default config
                {
                test: /\.md$/,
                use: [
                    {
                        loader: "markdown-loader",
                        options: {
                            pedantic: true,
                        }
                    }
                ]
            }]
        }
    };
};
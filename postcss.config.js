module.exports = (api) => {
    return {
        plugins: {
            'cssnano': {
                preset: [
                    'advanced',
                    {
                        autoprefixer: {
                            add: true,
                            remove: false
                        }
                    }
                ]
            }
        }
    }
}

module.exports = {
    purge: [
        './**/*.html',
        './**/*.tsx',
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            backgroundImage: theme => ({
             'bg': "url('/bg.png')",
            })
        }
    },
    variants: {},
    plugins: [],
}

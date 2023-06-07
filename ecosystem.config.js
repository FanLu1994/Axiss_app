module.exports = {
    apps: [
        {
            name: 'Axiss',
            port: '1818',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}

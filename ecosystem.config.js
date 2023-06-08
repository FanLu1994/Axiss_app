module.exports = {
    apps: [
        {
            name: 'Axiss',
            port: '1818',
            exec_mode: 'cluster',
            instances: '1',
            script: '.output/server/index.mjs'
        }
    ]
}

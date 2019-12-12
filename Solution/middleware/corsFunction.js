
corsFunction = (req, callback) => {

    let options;

    options = {
        origin: '*',
        allowedHeaders: 'Origin, x-Requested-With, Content-Type, Accept',
        methods: 'POST, GET, PUT, DELETE, OPTIONS'
    }

    callback(null,options)

}

module.exports = corsFunction
var express = require('express');
var router = express.Router();
//const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
//const createInstance = require('./aws/AwsPromise');

const check = (request, response, next) => {
    console.log('REQUEST CHECK CALLED', request.query);
    const validOptions = ['uptime'];
    if (request.query.script) {
        console.log('INSIDE REQUEST SCRIPT');
        if (!validOptions.includes(request.query.script)) {
            console.log('INSIDE REQUEST INVALID OPTION');
            response.send({
                result: 'error',
                error: 'Invalid Option: ' + request.query.script,
                script: request.query.script
            });
            return;
        }
    }
    next();
};

router.use(check);

router.get('/copy-get-started', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = { result: 'success', endpointCalled: '/copy-get-started', file: 'script-pusher.js' };
    console.log('Copy Get Started called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/run-get-started', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = { result: 'success', endpointCalled: '/run-get-started', file: 'script-pusher.js' };
    console.log('Run Get Started called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/remove-known-host', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = { result: 'success', endpointCalled: '/remove-known-host', file: 'script-pusher.js' };
    console.log('Remove KnownHost called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;
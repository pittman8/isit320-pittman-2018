const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test script-pusher.js', function() {
    it('should call copy-get-started route', function(done) {
        request(app)
            .get('/script-pusher/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check copy-get-started route and check JSON', function(done) {
        request(app)
            .get('/script-pusher/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/script-pusher/copy-get-started',
                instanceData: '',
                allocationId: '',
                region: ''
            });
    });

    it('should call remove-known-host route', function(done) {
        request(app)
            .get('/script-pusher/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check remove-known-host route and check JSON', function(done) {
        request(app)
            .get('/script-pusher/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/script-pusher/remove-known-host',
                instanceData: {
                    instanceId: 'i-06272fc145fe42ddc'
                },
                ec2Ip: '18.235.68.201',
                allocationId: '',
                region: ''
            });
    });
});

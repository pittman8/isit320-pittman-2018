const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test index.js', function() {

    it('should call create-educate route', function(done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check create-educate route and check JSON', function(done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', endpointCalled: '/create-educate', file: 'index.js' });
    });

    it('should call create-standard route', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check create-standard route and check JSON', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', endpointCalled: '/create-standard', file: 'index.js' });
    });

    it('should call associate-elastic-ip route', function(done) {
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check associate-elastic-ip route and check JSON', function(done) {
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', endpointCalled: '/associate-elastic-ip', file: 'index.js' });
    });

});
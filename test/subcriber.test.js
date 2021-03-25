//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

let elementId = 0;
chai.use(chaiHttp);

//Our parent block
describe('Test Subscriber api', () => {

    /*
    * Test the /GET route
    */
    describe('/GET subscribers', () => {
        it('it should GET all subscribers', (done) => {
          chai.request(server)
              .get('/subscribers')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                done();
              });
        });
    });


    /*
      * Test the /GET route
      */
    describe('/POST subscribers', () => {
          it('it should POST a subscribers', (done) => {
            let subscriber = {
              matricule: 10021,
              lastName : "FOTSO",
              firstName : "DJEMO",
              email : "aureli@freelance.com",
              phone : "237 6 90 00 00 00",
              address: []
            }

            chai.request(server)
                .post('/subscribers')
                .send(subscriber)
                .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('object');
                  elementId = res.body._id
                  done();
                });
          });
      });


      /*
      * Test the /GET item route
      */
      describe('/GET one subscriber by id', () => {
        it('it should GET one subscriber', (done) => {
          chai.request(server)
              .get('/subscribers/'+elementId )
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                done();
            });
        });
    });

      /*
        * Test the /PATCH item route
        */
      describe('/PATCH subscribers', () => {
        it('it should PATCH a subscriber', (done) => {
          let subscriberPatch = {
            matricule: 10021,
            lastName : "FOTSO TEST",
            firstName : "DJEMO",
            email : "aureli@freelance.com",
            phone : "237 6 90 00 00 00",
            address: [{
              code: 'test'
            }]
          }

          chai.request(server)
              .patch('/subscribers/'+elementId)
              .send(subscriberPatch)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                elementId = res.body._id
                done();
            });
        });
    });

    /*
      * Test the /DELETE item route
      */
    describe('/DELETE one subscriber by id', () => {
    it('it should DELETE one subscriber', (done) => {
      chai.request(server)
          .delete('/subscribers/'+elementId )
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
      });
    });

});
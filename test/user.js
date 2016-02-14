'use strict';

import {expect} from 'chai';
import Request from 'request-promise';
import IP from 'ip';

const route = `http://${IP.address()}:1998/api/users`;

describe('User Model', () => {
  describe('GET single user', () => {
    let options = {
      uri: `${route}/56b95ffa9a663798f7c9833`,
      method: 'GET',
      resolveWithFullResponse: true,
    };

    it('should have content-type of json', done => {
      Request(options)
        .then(res => {
          expect(res.headers['content-type']).to.contain('application/json');

          done();
        })
        .catch(done);
    });
  });
});

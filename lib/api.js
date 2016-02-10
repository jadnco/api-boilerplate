/* @flow */

'use strict';

import {Router} from 'express';

import User from './routes/user';

const router = Router();

/**
 * User
 */
router.route('/users')
  .post((req, res) => {
    User.create(req, res);
  });

router.route('/users/:id')
  .get((req, res) => {
    User.get(req.params.id, res);
  })
  .put((req, res) => {
    User.update(req.params.id, req, res);
  })
  .delete((req, res) => {
    User.delete(req.params.id, res);
  });

export default router;

const router = require('express').Router();

const task = require('./task.route');

const { routesConfig } = require('../../../lib/configs');

const { routes } = routesConfig.app.versions.v1;

router.use(routes.task.path, task);

module.exports = router;

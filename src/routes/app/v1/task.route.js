const router = require('express').Router();
const { routesConfig } = require('../../../lib/configs');

const { subPaths } = routesConfig.app.versions.v1.routes.task;
const {
    create,
    update,
    remove,
    get,
    assigneTask,
    getAll
} = require('../../../controllers/app/task.controller');

router.route(subPaths.root).post(create).put(update).get(get).delete(remove);
router.put(subPaths.assigneTask, assigneTask);
router.get(subPaths.getAll, getAll);

module.exports = router;

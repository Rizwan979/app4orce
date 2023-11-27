const Joi = require('joi');
const { routesConfig } = require('../../lib/configs')
const { baseURL, app, methods } = routesConfig;
const { v1 } = app.versions;
const { GET, POST, PUT, DELETE } = methods;

exports.task = {
    [[baseURL, app.path, v1.path, v1.routes.task.path, v1.routes.task.subPaths.root].join('')]: {
        [POST]: Joi.object({
            title: Joi.string().required(),
            description: Joi.string().optional(),
            dueDate: Joi.string().required(),
            status: Joi.string().valid('pending', 'completed', 'in-progress').required()
        }),
        [PUT]: Joi.object({
            taskID: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().optional(),
            dueDate: Joi.string().required(),
            status: Joi.string().valid('pending', 'completed', 'in-progress').required()
        }),
        [DELETE]: Joi.object({
            taskID: Joi.string().required(),
        }),
        [GET]: Joi.object({
            taskID: Joi.string().required()
        })

    },
    [[baseURL, app.path, v1.path, v1.routes.task.path, v1.routes.task.subPaths.assigneTask].join('')]: {
        [PUT]: Joi.object({
            taskID: Joi.string().required(),
            userId: Joi.string().required(),
        })
    },
    [[baseURL, app.path, v1.path, v1.routes.task.path, v1.routes.task.subPaths.getAll].join('')]: {
        [GET]: Joi.object({
            order: Joi.string().optional(),
            pageNo: Joi.string().optional(),
        })
    },


}

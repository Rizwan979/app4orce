const Joi = require('joi');
const { routesConfig } = require('../../lib/configs')
const { baseURL, auth, methods } = routesConfig;
const { v1 } = auth.versions;
const { GET, POST, PUT, DELETE } = methods;

exports.user = {
    [[baseURL, auth.path, v1.path, v1.routes.user.path, v1.routes.user.subPaths.signUp].join('')]: {
        [POST]: Joi.object({
            name: Joi.string().optional(),
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    },
    [[baseURL, auth.path, v1.path, v1.routes.user.path, v1.routes.user.subPaths.signIn].join('')]: {
        [POST]: Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    },
  
 
}

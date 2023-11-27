exports.routesConfig = {
  baseURL: '/api/app4orce',
  app: {
    path: '/app',
    versions: {
      v1: {
        path: '/v1',
        routes: {
          task: {
            path: '/task',
            subPaths: {
              root: '/',
              assigneTask: '/assigne-task',
              getAll: '/get-all',
            },
          },
        },
      },
    },
  },
  auth: {
    path: '/auth',
    versions: {
      v1: {
        path: '/v1',
        routes: {
          user: {
            path: '/user',
            subPaths: {
              root: '/',
              signIn: '/signin',
              signUp: '/signup',
              signOut: '/signout'
          
            },
          },
        },
      },
    },
  },
  methods: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  },
};

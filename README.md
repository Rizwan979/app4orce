# app4orce
task management demo app
after cloning the repo run the following command in terminal to start the project
    => npm install
    => npm start

for signUp
    rout: http://localhost:5000/api/app4orce/auth/v1/user/signup
    method: POST
    payload:{
        "name": "zahid ali",
        "email": "zahid@gmail.com",
        "password": "1234"
    }

for signIn
    rout: http://localhost:5000/api/app4orce/auth/v1/user/signin
    method: POST
    payload:{
        "email" :"razwanthebest@gmail.com",
        "password": "1234"
}
it will return the token save this token in Authorization Beared Token for task(CRUD)

for create task
    rout: http://localhost:5000/api/app4orce/app/v1/task/
    method: POST
    payload:{
        "title": "task 4",
        "description": "description",
        "dueDate": "2023-11-27",
        "status": "pending"
    }
    note: Authentication(please add Authorization Beared Token) and for Authorization(add in Headers:[x-user-id]:userID)

for update task
    rout: http://localhost:5000/api/app4orce/app/v1/task/
    method: PUT
    payload:{
        "taskID": "task-683776cf-e525-46fe-9037-6adac6ede2a8",
        "title": "node js update",
        "description": "description",
        "dueDate": "2023-11-27",
        "status": "pending"
}
    note: Authentication(please add Authorization Beared Token) and for Authorization(add in Headers:[x-user-id]:userID)

for DELETE task
    rout: http://localhost:5000/api/app4orce/app/v1/task/
    method: DELETE
    in params
    payload:{
        "taskID": "task-683776cf-e525-46fe-9037-6adac6ede2a8",
    }
    note: Authentication(please add Authorization Beared Token) and for Authorization(add in Headers:[x-user-id]:userID)

for get one task
    rout: http://localhost:5000/api/app4orce/app/v1/task/
    method: GET
    in params
    payload:{
        "taskID": "task-683776cf-e525-46fe-9037-6adac6ede2a8",
    }
    note: Authentication(please add Authorization Beared Token) and for Authorization(add in Headers:[x-user-id]:userID)

for assigne task
    rout: http://localhost:5000/api/app4orce/app/v1/task/
    method: PUT
    payload:{
        "taskID": "task-f22ce956-f0a7-4406-8872-2bb4ea96334e",
        "userId": "user-2fab0d44-6271-492b-ac8a-8ee5db3a31e5"
    }
    note: Authentication(please add Authorization Beared Token) and for Authorization(add in Headers:[x-user-id]:userID)
for get all task
    rout: http://localhost:5000/api/app4orce/app/v1/task/
    method: GET
    in params
    payload:{
        pageNo
    }
    note: Authentication(please add Authorization Beared Token) and for Authorization(add in Headers:[x-user-id]:userID)

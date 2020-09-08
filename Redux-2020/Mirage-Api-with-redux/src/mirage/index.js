//Here I create fake Api fake backend for testing my frontend application.
//there are few methods which is used in backend.
// 1. this.get()    whenever we need to get the data we use get method.
// 2. this.post()   whenever we need to create or add the data we use post mthod.
// 3. this.put ()   whenever we need to update our add data we use put method
// 4. this.delete() whenever we need to delete our post data we use delete method.
import { createServer } from "miragejs"
export default function () {
    let arr = [{ id: "1", text: "Hello kamali" }]
    let user = [{ id: "2", name: "Muheeb", age: 20 }]
    createServer({
        routes() {
            this.namespace = "/fakeapi"
            this.get('/getTodos', { todos: arr })
            this.get('/getUsers', { todos: user })
            this.post('/addTodos', (_, req) => {
                console.log('req', req)
                arr.push(req.requestBody)
            })
        },
    })
}
import { useState, useEffect } from "react"
import axios from 'axios'
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
function TodoList () {
    const [todos, setTodos] = useState([]) // set todo เป็น []
    const [isLoading, setIsLoading] = useState(true);
    const [todo, setTodo] = useState({name: ''})
    
    async function fetchTodo() {
        try {
            const response = await axios.get(`https://66e69b4d17055714e58a042c.mockapi.io/api/todos/todos`)
            setTodos(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    async function deleteTodo(id) {
        try {
            console.log(id);
            setIsLoading(true)
            await axios.delete(`https://66e69b4d17055714e58a042c.mockapi.io/api/todos/todos/${id}`)
            fetchTodo()
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTodo()
      }, []);
    function handleNameChange(event) {
        setTodo({
            ...todo,
            name: event.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        axios.post(`https://66e69b4d17055714e58a042c.mockapi.io/api/todos/todos`, {
            name: todo.name
        }).then(res => {
            alert('Create Successfully!')
            fetchTodo()
            setIsLoading(false)
        })
    }
    return (
        <>
        {
            isLoading && (<div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-lg"></span>
              </div>)
        }
        { !isLoading && 
        <div className="justify-center items-center h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            <div className="card max-w-96 shadow-xl mx-auto border-4 border-indigo-500/60 ...">
                <div className="card-body justify-center items-center">
                    <h2 className="card-title">Todo List!</h2>
                    <form className="flex space-x-2" onSubmit={handleSubmit}>
                        <input
                        type="text"
                        value={todo.name}
                        onChange={handleNameChange}
                        className="border border-gray-300 rounded px-4 py-2"
                        placeholder="Enter todo"
                        />
                        <button type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add
                        </button>
                    </form>
                </div>
                {
                    todos.map((todo, index) => (
                        <div key={index} className="px-3 mb-3 ">
                            <div className="grid grid-cols-10 gap-4">
                                <div className="col-start-1 col-end-8 ...">
                                    {todo.id} {todo.name}
                                </div>
                                <div className="col-start-8 col-end-11 ...">
                                    <Link to={`/todo/${todo.id}`}>
                                    <button className="bg-green-500 text-white mx-1 px-2 py-2 rounded hover:bg-green-600">
                                    <MdEdit/>
                                    </button>
                                    </Link>
                                    <button className="bg-red-500 text-white px-2 py-2 mx-1 rounded hover:bg-red-600"
                                    onClick={async () => {await deleteTodo(todo.id)}}
                                    >
                                    <MdDelete/>
                                    </button>  
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        }
        </>
    )
}
export default TodoList
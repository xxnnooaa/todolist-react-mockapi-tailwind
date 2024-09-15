import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from 'axios'
function Edit () {
    const { id } = useParams()
    const [todo, setTodo] = useState({name: ''})
    async function fetchTodo(todoTd) {
        try {
            const response = await axios.get(`https://66e69b4d17055714e58a042c.mockapi.io/api/todos/todos/${todoTd}`)
            setTodo(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTodo(id)
      }, [id]);
    function handleNameChange(event) {
        setTodo((previousState) => ({
            ...previousState,
            name: event.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://66e69b4d17055714e58a042c.mockapi.io/api/todos/todos/${id}`, {
            name: todo.name
        }).then(res => {
            alert('Update Successfully!')
            fetchTodo(id)
        })
    }
    return (
        <>
        <div className="justify-center items-center h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            <div className="card max-w-96 shadow-xl mx-auto border-4 border-indigo-500/60 ...">
                <div className="card-body justify-center items-center">
                    <h2 className="card-title">Update Todo!</h2>
                    <form className="flex space-x-2" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={todo.name}
                            onChange={handleNameChange}
                            className="border border-gray-300 rounded px-4 py-2"
                        />
                        <button 
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Edit
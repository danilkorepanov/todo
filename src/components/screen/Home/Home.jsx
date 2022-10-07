import TodoItem from "./items/TodoItem";
import React, { useState } from 'react'
import CreateTodo from "./CreateTodo/CreateTodo";


const data = [{
    _id: 'qweqwe',
    title: 'Reads Book',
    isComplited: false,

},
{
    _id: 'qw231e',
    title: 'Play game',
    isComplited: false,


},
{
    _id: 'qw2we',
    title: 'Work',
    isComplited: false,


}];





const Home = () => {
    const [todos, setTodos] = useState(data)


    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isComplited = !current.isComplited;
        setTodos(copy)
    }
    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))

    }



    return (
        <div className=" text-white w-4/5 mx-auto" >

            <h1 className='text-2xl font-bold mb-10 text-center'>Todo</h1>
            <CreateTodo setTodos={setTodos} />
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
            )
            )}



        </div>
    )
}
export default Home
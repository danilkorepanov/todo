import Check from "./Check"
import { BsTrash } from "react-icons/bs"


const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className='flex items-center justify-between mb-3 rounded-2xl
        bg-fuchsia-900 p-4 w-full' >
            <button className="flex items-center flex-auto"
                onClick={() => changeTodo(todo._id)}>
                <Check isComplited={todo.isComplited} />
                <div className={todo.isComplited ? 'line-through' : ''}>{todo.title}
                </div>

            </button>
            <button onClick={() => removeTodo(todo._id)}>
                <BsTrash className='text-gray-300 hover:text-red-900 transition-colors ease-linear duration-75' />
            </button>

        </div>

    )
}
export default TodoItem
import React, { useState } from 'react'


const CreateTodo = ({ setTodos }) => {


    const [title, setTitle] = useState('')


    const addTodo = (title) => {
        setTodos(prev => [{
            _id: new Date(),
            title,
            isComplited: false,
        },
        ...prev,
        ])
        setTitle('')
    }

    return (
        <div className='flex items-center justify-between mb-3 rounded-2xl
        p-2 px-5 w-1/4 border-2 border-purple-700'>
            <input type="text"
                className=' w-full outline-none bg-purple-900'
                onChange={e => setTitle(e.target.value)}
                placeholder="Add...."

                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}

            />

        </div>
    )
}

export default CreateTodo
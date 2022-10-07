import { BsCheck } from "react-icons/bs"

const Check = ({ isComplited }) => {
    return (
        <div className={`border-2 rounded-lg border-pink-600 ${isComplited ? 'bg-pink-600' : ''} w-6 h-6 mr-4 
        flex justify-center items-center`}>
            {isComplited && <BsCheck size={24} className='text-gray-900' />}


        </div>
    )
}
export default Check
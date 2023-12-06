import React from "react";
import { BsCheck } from "react-icons/bs";
import cn from 'classnames';

const Check = ({ isCompleted }) => {
    return (
        <div
           className={cn(
            'border-2 rounded-md border-black w-6 h-6 mr-2 flex items-center justify-center',
            {
              'bg-sky-300' : isCompleted,
            }
        )}
    >
        {isCompleted && <BsCheck size={22} />}
    </div>
 )
}

export default Check

import React from 'react'

const LIstTask = ({task,index,removeTask}) => {
  return (
    <>
        <div className='list-task'>
            {task.title}
<button onClick={()=>{removeTask(index)}} className='dlt-btn'>Delete</button>

        </div>
      
    </>
  )
}

export default LIstTask

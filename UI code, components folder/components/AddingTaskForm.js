import React from "react";

class AddingTaskForm extends React.Component{
    render(){
        return(
                                <div className='adding-tasks-box'>
                                    <div className='adding-tasks-box-title'>
                                        <p>Adding more Tasks !</p>
                                        <button>x</button>
                                    </div>
                                    <div className='adding-tasks-box-name'>
                                        <p>Task name: </p>
                                        <input 
                                            placeholder='Enter your task name...'
                                        />
                                    </div>
                                    <div className='adding-tasks-box-status'>
                                        <p>Task status: </p>
                                        <select>
                                            <option>Active</option>
                                            <option>Hide</option>
                                        </select>
                                    </div>
                                    <div className='adding-tasks-box-buttons'>
                                        <button className='adding-tasks-box-save-button'>
                                                Save
                                        </button>
                                        <button className='adding-tasks-box-clear-button'>
                                                Clear
                                        </button>
                                    </div>
                                </div>
        )
    }
}
export default AddingTaskForm;
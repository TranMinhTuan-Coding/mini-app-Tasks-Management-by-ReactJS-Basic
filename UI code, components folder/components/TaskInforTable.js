import React from "react";

class TaskInforTable extends React.Component{
    render(){
        return(
                                        <div className='tasks-infor-table'>
                                            <table class="table">
                                            <thead class="thead-dark">
                                                <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Task name</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <th scope="row"></th>
                                                    <td>
                                                        <input 
                                                            className='table-task-name-input'
                                                        />
                                                    </td>
                                                    <td>
                                                        <select
                                                            className='table-select'
                                                        >
                                                            <option>All</option>
                                                            <option>Active</option>
                                                            <option>Hide</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Task 1</td>
                                                    <td>
                                                        <div className='task-table-status'>
                                                            <p>Active</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className='task-actions-fix-button'>Fix</button>
                                                        <button className='task-actions-delete-button'>Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Task 2</td>
                                                    <td>
                                                        <div className='task-table-status'>
                                                            <p>Active</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className='task-actions-fix-button'>Fix</button>
                                                        <button className='task-actions-delete-button'>Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Task 3</td>
                                                    <td>
                                                        <div className='task-table-status'>
                                                            <p>Active</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className='task-actions-fix-button'>Fix</button>
                                                        <button className='task-actions-delete-button'>Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
        )
    }
}
export default TaskInforTable;
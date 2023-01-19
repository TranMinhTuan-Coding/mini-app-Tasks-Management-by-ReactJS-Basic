import React from "react";

class TaskItem extends React.Component{

    // Hàm quản lý chức năng sửa status active <> hide
    changeStatusTaskItemFunc00 = (id) => {
        this.props.changeStatusTaskItemFunc(id)
    };

    // Hàm quản lý chức năng Fix Item
    fixButtonFunc00 = (id) => {
        this.props.fixButtonFunc(id)
    };

    render(){
        var {index, item, status, key} =this.props;

        return(
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>
                    <div 
                        className='task-table-status'
                        
                    >
                        {/* <p className="task-table-status-active">Active</p> */}
                        <p 
                            // className="task-table-status-hide"
                            className={status? "task-table-status-active" : "task-table-status-hide"}
                            onClick={() => this.changeStatusTaskItemFunc00(item.id)}
                        > {status? "Active" : "Hide"} </p>
                    </div>
                </td>
                <td>
                    <button 
                        className='task-actions-fix-button'
                        onClick={() => this.fixButtonFunc00(item.id)}
                    >Fix</button>
                    <button 
                            className='task-actions-delete-button'
                            onClick={() => this.props.deleteItemFunc(item.id)}
                    >Delete</button>
                </td>
            </tr>
        )
    }
}
export default TaskItem;
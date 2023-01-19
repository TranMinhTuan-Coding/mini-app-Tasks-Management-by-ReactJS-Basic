import React from "react";
import TaskItem from './TaskItem';

class TaskInforTable extends React.Component{

    // Hàm quản lý sự kiện lọc theo status Active - Hide
    changeItemStatusFunc = (e) => {
        let value = e.target.value;
        this.props.filterTaskItemStatusFunc(value);
    }

    render(){
        var {tasksArray, 
            deleteItemFunc, 
            changeStatusTaskItemFunc, 
            fixButtonFunc} = this.props;

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
                                                                {/* <button onClick={() => {this.props.filterTaskItemStatusFunc("All")}}>All</button>
                                                                <button onClick={() => {this.props.filterTaskItemStatusFunc("Active")}}>Active</button>
                                                                <button onClick={() => {this.props.filterTaskItemStatusFunc("Hide")}}>Hide</button> */}
                                                            <select
                                                                onChange={this.changeItemStatusFunc}
                                                                className='table-select'
                                                            >
                                                                {/* Chú ý: Đối với sự kiện onclick, tốt nhất đặt vào 1 button riêng rẽ (trong thẻ div, ko được đặt trong thẻ select)
                                                                        vì html là thẻ select > option nên ta dùng sự kiện onchange */}
                                                                <option value="All">All</option>
                                                                <option value="Active">Active</option>
                                                                <option value="Hide">Hide</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>

                                                    {/* {
                                                        tasksArray.map((item, index) => {
                                                            return (
                                                                <TaskItem
                                                                    item={item}
                                                                    index={index}
                                                                    key={item.id}
                                                                />)
                                                        })
                                                    } */}
                                                    {/* 2 cách viết tương đương nhau khi có lệnh reuturn và trả về 1 component con */}
                                                    {
                                                        tasksArray.map((item, index) =>
                                                            (<TaskItem
                                                                item={item}
                                                                index={index}
                                                                key={item.id}
                                                                status={item.status}
                                                                deleteItemFunc={deleteItemFunc}
                                                                changeStatusTaskItemFunc={changeStatusTaskItemFunc}
                                                                fixButtonFunc={fixButtonFunc}
                                                            />)
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
        )
    }
}
export default TaskInforTable;
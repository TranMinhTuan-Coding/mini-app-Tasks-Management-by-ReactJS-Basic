import React from 'react';
import { stringify, v4 as uuidv4 } from 'uuid';

import AppTitle from './AppTitle';
import AddingTaskForm from './AddingTaskForm';
import AddingTaskButton from './AddingTaskButton';
import SearchAndFilter from './SearchAndFilter';
import TaskInforTable from './TaskInforTable';

class MainApp extends React.Component {

    constructor(props) {
        super(props);
        let arr = [];
        let data = localStorage.getItem('baseData');
        if (data) {
            arr = JSON.parse(data);
            this.state={
                tasksArray: arr,
                displayAddingTaskForm: false,
                fixingTaskItem: null,
                taskItemStatus: "All",
                searchingInputMainApp: "",

                sortBy: 'name',
                sortValue: 1,
            };

        }else{
            arr = [
                {
                    id: 1,
                    title: "Task 1",
                    status: true
                },
                {
                    id: 2,
                    title: "Task 2",
                    status: true
                },
                {
                    id: 3,
                    title: "Task 3",
                    status: false
                },
            ];
        
            this.state = {
                tasksArray: arr,
                displayAddingTaskForm: false,
                fixingTaskItem: null,
                taskItemStatus: "All",
                searchingInputMainApp: "",

                sortBy: 'name',
                sortValue: 1,
            };
            // Tạo 1 state với kiểu dữ liệu của giá trị là Boolean: 
            // true => hiển thị bảng adding Task
            // False => Tắt hiển thị bảng adding Task
            // => Toán tử 3 ngôi: displayAddingTaskForm? <AddingTaskForm/> : null
            // ý tưởng: bắt sự kiện cho các button, để thay đổi giá trị của state quản lý hiển thị

            // Lưu dữ liệu ban đầu vào local storage
            localStorage.setItem('baseData', JSON.stringify(arr));
        }
        
    }

    
// Hàm thay đổi giá trị của state displayAddingTaskForm thành false
closeAddingTaskFormButtonFunc = () => {
    this.setState({
        displayAddingTaskForm: false,
    });
}

// Hàm thay đổi giá trị của state displayAddingTaskForm
// Hàm quản lý chức năng mở adding Tasks
openAddingTaskFormButtonFunc = () => {
    if (this.state.displayAddingTaskForm) {
        this.setState({
            displayAddingTaskForm: true,
            fixingTaskItem: null,
        });
    } else {
        this.setState({
            displayAddingTaskForm: true,
            fixingTaskItem: null,
        });
    }
}

// Hàm quản lý chức năng thêm mới task Item
// Hàm nhận dữ liệu state từ AddingTaskForm qua biến x
// sau đó truyền tiếp vào 1 biến mới là newTaskObject
// Xử lý chức năng nút Fix trong hàm này!
formFuncMainApp = (x) => {
    // Code cũ:
    // var newTaskObject = {
    //     id: uuidv4(),
    //     title: x.newTaskTitle,
    //     status: x.newTaskStatus,
    // }
    // // return newTaskObject;
    // // sau đó gán thẳng giá trị newTaskObject vào state đang có:
    // if (newTaskObject.title == "") {
    //     this.setState({
    //         tasksArray: [...this.state.tasksArray]
    //     });
    // }else{
    //     this.setState({
    //         tasksArray: [...this.state.tasksArray, newTaskObject]
    //     });
    // }

    if (x.id === "") {
            var newTaskObject = {
                id: uuidv4(),
                title: x.newTaskTitle,
                status: x.newTaskStatus,
            }
            if (newTaskObject.title == "") {
                this.setState({
                    tasksArray: [...this.state.tasksArray]
                });
            }else{
                this.setState({
                    tasksArray: [...this.state.tasksArray, newTaskObject]
                });
            }
    }else {
        // Gán object trong tasksArray có id = id của x
        this.state.tasksArray.map(a => {
            if (a.id == x.id) {
                a.title = x.newTaskTitle
                a.status = x.newTaskStatus
            }
        });
        this.closeAddingTaskFormButtonFunc();

    }
    // console.log(this.state.tasksArray);
    localStorage.setItem('baseData', JSON.stringify(this.state.tasksArray));
}


// Hàm quản lý sự kiện delete task item
deleteItemFunc = (id) => {
    // console.log(x);
    var newTasksArrayUndeleted = this.state.tasksArray.filter (x => x.id !== id)
    this.setState({
        tasksArray: [...newTasksArrayUndeleted]
    });
}

// Hàm quản lý chức năng thay đổi trạng thái status của task item
changeStatusTaskItemFunc = (id) => {

    // console.log(id);

    // cách viết sai
    // if (this.state.tasksArray.map(x => x.id == id)){
    // this.setState({
    //     tasksArray: x.status == !x.status
    // });
    // }
    this.setState({
        tasksArray: this.state.tasksArray.map(x => {
            if (x.id == id) {
                x.status = !x.status;
            }
                return x;
            })
        })
    }
    
    // Hàm mở bảng form khi ấn nút fix
    showFormFix = () => {
        this.setState({
            displayAddingTaskForm: true,
        });
    }

    // Hàm quản lý chức năng Fix
    fixButtonFunc = (id) => {
        // if (!this.state.displayAddingTaskForm) {
        //     this.state.tasksArray.map(x => {
        //         if (x.id == id) {
        //             this.setState({
        //                 fixingTaskItem: x
        //             });
        //         }
        //     })
        //     this.showFormFix();
        // } else {
        //     this.state.tasksArray.map(x => {
        //         if (x.id == id) {
        //             this.setState({
        //                 fixingTaskItem: x
        //             });
        //         }
        //     });
        // }  
        this.state.tasksArray.map(x => {
            if (x.id == id) {
                this.setState({
                    fixingTaskItem: x
                });
            }
        })
        this.showFormFix();
    }

    // Hàm quản lý chức năng lọc
    // Hàm thay đổi giá trị state taskItemStatus
    filterTaskItemStatusFunc = (status) => {
        this.setState({
            taskItemStatus: status
        });
    }

    // Hàm quản lý chức năng tìm kiếm theo tên
    searchingNameTaskFunc = (x) => {
        this.setState({
            searchingInputMainApp: x
        })
        // console.log(x);
    }

    // Hàm nhận state từ SortTypes
    sortFunc00 = (x, y) => {
        var {sortBy, sortValue} = this.state;
        // console.log(x,y);
        this.setState({
            // Không nên khai báo state thành dạng object : {...,...}
            sortBy: x,
            sortValue: y,
        });
        // Truyền ngược lại 2 state trên vào component SortBy 
        // sau đó dùng hàm componentWillReceiveProps

    }

render(){
    var {displayAddingTaskForm, 
        tasksArray, 
        fixingTaskItem, 
        taskItemStatus, 
        searchingInputMainApp,
        sortBy, 
        sortValue} = this.state;

    // Logic quản lý chức năng lọc theo status:
    if (taskItemStatus == "Active") {
            tasksArray = tasksArray.filter(x => x.status);

    } else if (taskItemStatus == "Hide"){
            tasksArray = tasksArray.filter(x => !x.status);
    }

    // Logic quản lý chức năng lọc theo tên công việc:
    if (searchingInputMainApp) {
        tasksArray = tasksArray.filter(x =>
            // [Chuỗi cha].indexOf(chuỗi con) 
            x.title.toLowerCase().indexOf(searchingInputMainApp) !== -1
        );
    }

    // console.log(sortBy + " - " + sortValue);
    // Render thành công 2 state trên => sử dụng hàm sort trong JavaScript để sắp xếp
    if (sortBy === 'name') {
        tasksArray.sort((a,b) => {
            if (a.title > b.title) {
                return sortValue;           // nếu set cứng 1 và -1 thay vì sortValue và -sortValue => tăng dần
            } else if (b.title > a.title) {
                return -sortValue;
            }else{
                return 0;
            }
        })
    } else {
        tasksArray.sort((a,b) => {
            if (a.status > b.status) {
                return -sortValue;           // 1 thì là tăng dần
            } else if (b.status > a.status) {
                return sortValue;
            }else{
                return 0;
            }
        })
    }

    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <AppTitle />
                </div>
                <br />

                <div className='row'>
                    <div className='col-xl-12 main-actions-app'>
                        <div className={displayAddingTaskForm ? 'col-xl-4' : null}>
                                {displayAddingTaskForm ? <AddingTaskForm

                                                    displayAddingTaskForm={displayAddingTaskForm}
                                                    closeAddingTaskFormButtonFunc={this.closeAddingTaskFormButtonFunc}
                                                    formFuncMainApp={this.formFuncMainApp}
                                                    fixingTaskItem={fixingTaskItem}
                                                    tasksArray={tasksArray}

                            /> : null}

                        </div>
                        <div className={displayAddingTaskForm ? 'col-xl-8' : null}>
                            <div className='col-xl-4'>
                                <AddingTaskButton
                                                openAddingTaskFormButtonFunc={this.openAddingTaskFormButtonFunc}
                                                clearFormFunc={this.clearFormFunc}
                                />
                            </div>

                            <div className='col-xl-12'>
                                <SearchAndFilter 
                                    searchingNameTaskFunc={this.searchingNameTaskFunc}
                                    searchingInputMainApp={this.state.searchingInputMainApp}
                                    sortFunc00={this.sortFunc00}
                                    sortBy={sortBy}
                                    sortValue={sortValue}
                                />
                            </div>

                            <div className='col-xl-12'>
                                <TaskInforTable
                                    tasksArray={tasksArray}
                                    deleteItemFunc={this.deleteItemFunc}
                                    changeStatusTaskItemFunc={this.changeStatusTaskItemFunc}
                                    fixButtonFunc={this.fixButtonFunc}
                                    filterTaskItemStatusFunc={this.filterTaskItemStatusFunc}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default MainApp;


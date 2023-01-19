import React from "react";

class AddingTaskForm extends React.Component{


    // 02: Thiết lập chức năng thêm mới dữ liệu
    constructor(props){
        super(props)
        this.state={
                // Tạo ra thêm 1 thuộc tính id rỗng để nhận fixingTaskItem từ MainApp
                id: "",
                newTaskTitle: "",
                newTaskStatus: true,
        }
    }

    // Được gọi mỗi khi component mount
    // Hàm quản lý chức năng Fix: nhận dữ liệu fixingTaskItem từ MainApp rồi gán vào
    componentWillMount = () => {
        // console.log("mount");
        if (this.props.fixingTaskItem) {
            this.setState({
                id: this.props.fixingTaskItem.id,
                newTaskTitle: this.props.fixingTaskItem.title,
                newTaskStatus: this.props.fixingTaskItem.status,
            });
        }
    }

    // Sử dụng 1 LifeCycle khác là componentWillRecieveProps
    // ==> Khi đó dù component AddingTaskForm đã được Mount nhưng những lệnh cần thiết vẫn được gọi
    // Khi đó đang mở AddingTaskForm mà ấn fix ở Item khác => vẫn map infor sang
    // ===> còn 1 lỗi nữa: Khi đang ấn fix 1 item => infor được map sang => tắt đi
    // => ấn lại nút Open adding Task Form 
    // => thông tin cũ chưa fix vẫn còn! => sai
    // => Sửa: Đặt lại thuộc tính fixingTaskItem trong this.setState là null
    componentWillReceiveProps = (a) => {
        // console.log(a);
        if (a && a.fixingTaskItem) {
            this.setState({
                id: a.fixingTaskItem.id,
                newTaskTitle: a.fixingTaskItem.title,
                newTaskStatus: a.fixingTaskItem.status,
            });
        // Lỗi : Khi ấn sửa => map thông tin sang => ấn nút thêm cv => ko map lại bảng thành rỗng
        // sửa : 
        } else if(a && a.fixingTaskItem == null) {
            // console.log("sửa => thêm");
            this.state={
                // Tạo ra thêm 1 thuộc tính id rỗng để nhận fixingTaskItem từ MainApp
                id: "",
                newTaskTitle: "",
                newTaskStatus: true,
            }
        }
    }

    // Hàm thay đổi giá trị state rỗng đã khai báo
    newTaskInforFunc = (e) => {
        var name = e.target.name
        var value = e.target.value

        if (name === "newTaskStatus") {
            var value = e.target.value === "true"? true : false;
        };

        this.setState({
            [name]: value
        });
    }

    // Hàm sự kiện cho form
    formFunc = (e) => {
        e.preventDefault();
        // Truyền dữ liệu this.state vào hàm formFuncMainApp ở MainApp
        this.props.formFuncMainApp(this.state);

        // Nhập tên task mới => enter => clear ô input Task name
        this.setState({
            newTaskTitle: "",
        });
    }

    // Hàm quản lý sự kiện clear form 
    clearFormFunc = (e) => {
        this.setState({
            id: "",
            newTaskTitle: "", 
            newTaskStatus: true,
        });
    }

    render(){
        return(
                                <form 
                                    className='adding-tasks-box'
                                    onSubmit={this.formFunc}
                                >
                                    <div className='adding-tasks-box-title'>
                                        <p>
                                            {this.state.id !== ""? "Fix this Task!" : "Adding more Tasks !"}
                                        </p>
                                        <button
                                            onClick={() => this.props.closeAddingTaskFormButtonFunc()}
                                        >x</button>
                                    </div>
                                    <div className='adding-tasks-box-name'>
                                        <p>Task name: </p>
                                        <input 
                                            name='newTaskTitle'
                                            placeholder='Enter your task name...'

                                            onChange={this.newTaskInforFunc}
                                            value={this.state.newTaskTitle}
                                        />
                                    </div>
                                    <div className='adding-tasks-box-status'>
                                        <p>Task status: </p>
                                        <select
                                            name='newTaskStatus'

                                            onChange={this.newTaskInforFunc}
                                            value={this.state.newTaskStatus}
                                        >   
                                        {/* Trước khi xử lý chỗ này cần gán kiểu giá trị cho 2 option */}
                                            <option value={true}>Active</option>
                                            <option value={false}>Hide</option>
                                        </select>
                                    </div>
                                    <div className='adding-tasks-box-buttons'>
                                        <button className='adding-tasks-box-submit-button'>
                                                Submit
                                        </button>
                                        <button 
                                                className='adding-tasks-box-clear-button'
                                                onClick={() => this.clearFormFunc()}
                                        >
                                                Clear
                                        </button>
                                    </div>
                                </form>
        )
    }
}
export default AddingTaskForm;
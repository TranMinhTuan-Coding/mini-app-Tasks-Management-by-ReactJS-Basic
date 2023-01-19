import React from "react";

class SortTypes extends React.Component{
    // Với cách code cũ: khai báo state ở SortType rồi truyền sang MainApp xong truyền ngược lại
    // ===> gây ra lỗi

    // cách tối nhất: sự kiện onclick truyền thẳng giá trị x,y sang MainApp, MainApp nhận và lưu vào
    // 2 state rồi truyền ngược 2 state đó trở lại SortTypes thông qua componentWillReceiveProps


    // Hàm nhận ngược lại state từ MainApp
    // componentWillReceiveProps = (a) => {
    //     console.log(a);
    // }

    // Hàm thay đổi giá trị state
    sortTypesFunc = (x, y) => {
        this.props.sortFunc00(x, y)
    }

    render(){
        var {sortBy, sortValue}=this.props;

        return(
            <div className="sort-types-box">
                <p className="sort-types-box-title">Sort types</p>
                <ul className="sort-types">

                    <li 
                        onClick={() => this.sortTypesFunc('name', 1)}
                        className={(sortBy === 'name' && sortValue === 1) ? 'chosen-sort-type' : ''}
                    >Task name: A-Z</li>
                    <li
                        onClick={() => this.sortTypesFunc('name', -1)}
                        className={(sortBy === 'name' && sortValue === -1) ? 'chosen-sort-type' : ''}
                    >Task name: Z-A</li> 
                    <li 
                        onClick={() => this.sortTypesFunc('status', 1)}
                        className={(sortBy === 'status' && sortValue === 1) ? 'chosen-sort-type' : ''}
                    >Task status: Active</li>
                    <li 
                        onClick={() => this.sortTypesFunc('status', -1)}
                        className={(sortBy === 'status' && sortValue === -1) ? 'chosen-sort-type' : ''}
                    >Task status: Hide</li>
                </ul>
            </div>
        )
    }
}
export default SortTypes;
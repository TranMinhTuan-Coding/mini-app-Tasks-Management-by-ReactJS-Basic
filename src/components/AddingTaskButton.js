import React from "react";

class AddingTaskButton extends React.Component{
    render(){
        return(
                <div className='adding-tasks-button'>
                    <button
                        onClick={() => this.props.openAddingTaskFormButtonFunc()}
                    >
                            Open Adding Task Form!
                    </button>

                    {/* <button
                        onClick={this.props.generateDataFunc}
                    >
                            Get Generate Data!
                    </button> */}
                </div>
        )
    }
}
export default AddingTaskButton;
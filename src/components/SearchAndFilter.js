import React from "react";
import SortTypes from './SortTypes';

class SearchAndFilter extends React.Component{

    constructor(props){
        super(props)
        this.state={
            searchingInput: "",
        }
    }

    // Hàm quản lý sự kiện ô searching...
    searchingFunc = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        
        this.setState({
            [name] : value
        });
        // console.log(value);
    }

    searchButtonFunc = () => {
        this.props.searchingNameTaskFunc(this.state.searchingInput);
    }

    render(){
        return(
            <div className='tasks-searching-filter-box'>
                <div className='tasks-searching'>
                    <input 
                        placeholder='Searching...'
                        name='searchingInput'

                        onChange={this.searchingFunc}
                        value={this.state.searchingInput}
                    />

                    <button
                        onClick={() => this.searchButtonFunc()}
                    >
                            {/* {this.props.searchingInputMainApp !== ''? "Search":"All Tasks"} */}
                            Search
                    </button>
                </div>

                <div className='tasks-filter'>
                    <button className="sort-button">
                            Sort
                    </button>
                </div>

                <SortTypes
                    sortFunc00={this.props.sortFunc00}
                    sortBy={this.props.sortBy}
                    sortValue={this.props.sortValue}
                />

            </div>
        )
    }
}
export default SearchAndFilter;
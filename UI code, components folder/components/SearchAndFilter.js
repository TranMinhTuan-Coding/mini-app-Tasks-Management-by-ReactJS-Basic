import React from "react";

class SearchAndFilter extends React.Component{
    render(){
        return(
            <div className='tasks-searching-filter-box'>
                <div className='tasks-searching'>
                    <input 
                        placeholder='Searching...'
                    />

                    <button>
                            Search
                    </button>
                </div>

                <div className='tasks-filter'>
                    <button>
                            Filter
                    </button>
                </div>
            </div>
        )
    }
}
export default SearchAndFilter;
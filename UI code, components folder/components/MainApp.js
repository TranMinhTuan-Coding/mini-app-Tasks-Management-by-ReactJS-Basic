import React from 'react';

import AppTitle from './AppTitle';
import AddingTaskForm from './AddingTaskForm';
import AddingTaskButton from './AddingTaskButton';
import SearchAndFilter from './SearchAndFilter';
import TaskInforTable from './TaskInforTable';

class MainApp extends React.Component{
    render(){
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <AppTitle/>
                    </div>
                    <br />

                    <div className='row'>
                        <div className='col-xl-12 main-actions-app'>
                            <div className='col-xl-4'>
                                <AddingTaskForm/>
                            </div>

                            <div className='col-xl-8'>
                                    <div className='col-xl-4'>
                                        <AddingTaskButton/>
                                    </div>

                                    <div className='col-xl-12'>
                                        <SearchAndFilter />
                                    </div> 

                                    <div className='col-xl-12'>
                                        <TaskInforTable />
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


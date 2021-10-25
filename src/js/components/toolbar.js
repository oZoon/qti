import React from 'react'

import AddTask from './addTask';
// import EditTask from './editTask';

export default props => {
    const {
        numSelected,
        deleteSelected,
        addTask,
        editTask,
    } = props
    return (
        <div className={numSelected > 0 ? 'toolbar-highlight' : 'toolbar'}>
            <AddTask
                // {...propsAddTask}
            />
            {numSelected > 0 ?
                (
                    <span className="toolbar-text">{numSelected} выбрано</span>
                ) : (
                    <span className="toolbar-text">{numSelected} добавить заявку</span>
                )}
            {/* {numSelected == 1 ?
                <EditTask {...propsEditTask} />
                :
                null
            }
            {numSelected > 0 ?
                <input
                    type="button"
                    value="удалить"
                    onClick={() => onDeleteTasks()}
                />
                :
                null
            } */}
        </div>
    )
}

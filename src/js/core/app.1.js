import React from "react";
import { connect } from "react-redux";

import Content from "../containers/content";
import LoaderAnimation from '../components/loaderGif';

import { deleteTask, saveData } from "./actions/actionTaskList";

let App = (props) => {
    const {
        taskList,
        onDeleteTask,
        onSaveData,
    } = props;


    const propsLoaderAnimation = {
        state: taskList.state,
    }
    const propsContent = {
        taskList,
        onDeleteTask,
        onSaveData,
    }
    return (
        <>
            <LoaderAnimation {...propsLoaderAnimation} />
            <Content {...propsContent} />
        </>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        taskList: state.taskList,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveData: (data, taskList, index) => dispatch(saveData(data, taskList, index)),
        onDeleteTask: index => dispatch(deleteTask(index)),
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

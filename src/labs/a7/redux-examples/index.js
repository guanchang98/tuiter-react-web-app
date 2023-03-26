import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Todos from "./todos-component";
import todos from "./reducers/todos-reducer"

const store = configureStore({reducer: {hello, todos}});
const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
            </div>
            <Todos/>
            <HelloReduxExampleComponent/>
        </Provider>

    )
}

export default ReduxExamples;
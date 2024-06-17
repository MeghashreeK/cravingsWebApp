import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import indexStore from "./utils/indexStore";
import { Provider } from "react-redux";



const App = () => {
    return (
        <div className="app">
            <Provider store={indexStore}>
                <Header />
                <Outlet />
            </Provider>
        </div>
    );
};

export default App;


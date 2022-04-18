import React from "react";
import "./App.gstyle.css";
import { HashRouter, Route, RouteProps } from "react-router-dom";
import { routes } from "./Routes";

export const App = (): JSX.Element => (
    <div className="app">
        <HashRouter>
            {routes.map((route: RouteProps) => (
                <Route key={route.path as string} {...route} />
            ))}
        </HashRouter>
    </div>
);

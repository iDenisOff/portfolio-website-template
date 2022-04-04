import { RouteProps } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { routesPaths } from "./common/consts";

export const routes = [
    {
        path: [routesPaths.mainPage],
        component: MainPage,
        exact: true,
    },
] as RouteProps[];

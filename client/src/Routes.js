import React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function RoutesComponent({ routes }) {
    return (
        <Router>
            <Routes>
                {Object.keys(routes).map((key) => {
                    const route = routes[key];
                    return (
                        <Route key={`route-${route.path}`} path={route.path} element={<div>{route.component}</div>} />
                    );
                })}
            </Routes>
        </Router>
    );
}

RoutesComponent.defaultProps = {
    routes: [],
};

export default RoutesComponent;

import React, {Suspense} from 'react';
import './styles/index.scss'
import {Routes, Route, Link} from "react-router-dom";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const bool = true;
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>MAIN PAGE</Link>
            <Link to={'/about'}>ABOUT PAGE</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsync />}></Route>
                    <Route path={'/'} element={<MainAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;

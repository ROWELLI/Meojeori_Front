import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    );
}

export default Router;

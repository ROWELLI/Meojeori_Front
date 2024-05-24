import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Mypage from '../Pages/Mypage/Mypage'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Mypage' element={<Mypage />} />
        </Routes>
    );
}

export default Router;

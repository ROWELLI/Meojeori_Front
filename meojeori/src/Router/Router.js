import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Mypage from '../Pages/Mypage/Mypage'
import WritingPage from '../Pages/WritingPage/WritingPage'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Mypage' element={<Mypage />} />
            <Route path='/WritingPage' element={<WritingPage />} />
        </Routes>
    );
}

export default Router;

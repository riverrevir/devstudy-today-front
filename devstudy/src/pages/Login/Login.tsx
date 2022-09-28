import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import '../../styles/Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_HOST}/api/user/login`, {
            userId,
            password
        }).then(res => console.log(res)).catch(err => console.log(err))

    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-avatar-container">
                    <FontAwesomeIcon icon={faCircleUser} className='login-avatar' />
                </div>
                <h1 className="login-title">로그인</h1>
                <input type="text" name="email" id="email" placeholder="아이디" onChange={(e) => setUserId(e.target.value)} />
                <input type="password" name="password" id="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">
                    <small>로그인</small>
                </button>

                {/* <small className="signup-guide">
                    Not a member?
                    <Link to='/signup' className="signup-link"> signup</Link>
                </small> */}
                <div className="login-sub">
                    <div className="login-save">
                        <input type="checkbox" name="save" id="save" />
                        <span>아이디 저장</span>
                    </div>
                    <div className="login-link">
                        <Link to='/password'>비밀번호 찾기</Link>
                        <Link to='/register'>계정 만들러 가기</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
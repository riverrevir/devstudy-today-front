import { Link } from "react-router-dom";
import { FormEvent } from "react";
import '../../styles/Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-avatar-container">
                    <FontAwesomeIcon icon={faCircleUser} className='login-avatar' />
                </div>
                <h1 className="login-title">로그인</h1>
                <input type="text" name="email" id="email" placeholder="아이디" />
                <input type="password" name="password" id="password" placeholder="비밀번호" />
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
                    <div>
                        <Link to='/password'>비밀번호 찾기</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
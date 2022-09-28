import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./register-css";
import Button from "../../common/button01";
import { instance } from "../../../api";
import { useNavigate } from "react-router";
import { NavigationUtil } from "../../../util/navigation-util";

export default function Register() {
  const [inputs, setInputs] = useState({
    userId: "",
    password1: "",
    password2: "",
    sex: "",
    email: "",
  });

  const focusRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onClickCheckIdDuplicate = async () => {
    const { userId } = inputs;
    try {
      await instance.get(`user/auth/id/${userId}/exists`).then((response) => {
        if (response.data.status === true) {
          return alert(`${userId} 는 사용 하실수 없는 아이디 입니다.`);
        } else {
          alert("사용 가능한 아이디 입니다.");
        }
      });
    } catch (error) {
      if (error instanceof Error)
        console.log("userId duplicate error:", error.message);
    }
  };

  const onClickCheckEmailDuplicate = async () => {
    const { email } = inputs;
    try {
      await instance.get(`user/auth/email/${email}/exists`).then((response) => {
        if (response.data.status === true) {
          return alert(`${email} 는 사용 하실수 없는 이메일 입니다.`);
        } else {
          alert("사용 가능한 이메일 입니다.");
        }
      });
    } catch (error) {
      if (error instanceof Error)
        console.log("email duplicate error:", error.message);
    }
  };

  const onClickSubmit = async () => {
    const { userId, password1, password2, email, sex } = inputs;

    if (!userId || !password1 || !password2 || !email || !sex) {
      return alert("회원정보를 입력해주세요");
    }

    if (!/\w+@\w+\.\w+/.test(email)) {
      return alert("이메일을 옳바르게 써주세요");
    }

    if (password1 !== password2) {
      return alert("비밀번호가 일치하지않습니다");
    }

    if (password1.length <= 2) {
      return alert("비밀번호를 3자리 이상 적어주세요");
    }

    try {
      await instance
        .post(`/user/register`, {
          userId,
          password1,
          password2,
          email,
          sex,
        })
        .then((response) => {
          navigate(NavigationUtil.login);
          console.log("response:", response);
          console.log("response.data:", response.data);
        });
    } catch (error) {
      if (error instanceof Error) console.log("register error:", error.message);
    }
  };

  useEffect(() => {
    if (focusRef.current !== null) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.UserInfoWrapper>
          <S.UserIdWrapper>
            <S.UserId
              placeholder="아이디"
              name="userId"
              onChange={onChangeInputs}
              ref={focusRef}
            />
            <Button
              onClick={onClickCheckIdDuplicate}
              text={"아이디 중복확인"}
              width={"100px"}
              height={"40px"}
              color={"#fff"}
              borderRadius={"2px 0px 0px 2px"}
            />
          </S.UserIdWrapper>
          <S.Password1
            type="password"
            placeholder="비밀번호"
            name="password1"
            onChange={onChangeInputs}
          />
          <S.Password2
            type="password"
            placeholder="비밀번호 확인"
            name="password2"
            onChange={onChangeInputs}
          />
          <S.EmailWrapper>
            <S.Email
              placeholder="이메일"
              name="email"
              onChange={onChangeInputs}
              type="email"
            />
            <Button
              onClick={onClickCheckEmailDuplicate}
              text={"이메일 중복확인"}
              width={"100px"}
              height={"40px"}
              color={"#fff"}
              borderRadius={"2px 0px 0px 2px"}
            />
          </S.EmailWrapper>
          <S.GenderWrapper>
            <S.MaleWrapper>
              <label>남자</label>
              <input
                type="radio"
                name="sex"
                value="male"
                onChange={onChangeInputs}
              />
            </S.MaleWrapper>
            <S.FemaleWrapper>
              <label>여자</label>
              <input
                type="radio"
                name="sex"
                value="female"
                onChange={onChangeInputs}
              />
            </S.FemaleWrapper>
          </S.GenderWrapper>
          <Button
            onClick={onClickSubmit}
            text={"회원가입"}
            width={"260px"}
            height={"40px"}
            color={"#fff"}
          />
        </S.UserInfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}

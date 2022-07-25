import { ChangeEvent, useState } from "react";
import * as S from "./register-css";
import Button from "../../common/button01";

export default function Register() {
  const [inputs, setInputs] = useState({
    userId: "",
    password1: "",
    password2: "",
    sex: "",
    email: "",
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onClickGender = (event: any) => {
    console.log("event.target.checked:", event.target.checked);
    console.log(event.target.value);
  };

  const onClickSubmit = () => {
    const { userId, password1, password2, email } = inputs;

    if (!userId || !password1 || !password2 || !email) {
      return alert("회원정보를 입력해주세요");
    }

    if (!/\w+@\w+\.\w+/.test(email)) {
      return alert("이메일을 옳바르게 써주세요");
    }

    if (password1 !== password2) {
      return alert("비밀번호가 일치하지않습니다");
    }
  };

  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <S.UserInfoWrapper>
        <S.UserId
          placeholder="아이디"
          name="userId"
          onChange={onChangeInputs}
        />
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
        <S.Email
          placeholder="이메일"
          name="email"
          onChange={onChangeInputs}
          type="email"
        />
        <S.GenderWrapper>
          <S.MaleWrapper>
            <label>남자</label>
            <input
              type="radio"
              name="sex"
              value="male"
              onClick={onClickGender}
            />
          </S.MaleWrapper>
          <S.FemaleWrapper>
            <label>여자</label>
            <input
              type="radio"
              name="sex"
              value="female"
              onClick={onClickGender}
            />
          </S.FemaleWrapper>
        </S.GenderWrapper>
        <Button
          onClick={onClickSubmit}
          text={"회원가입"}
          width={"240px"}
          height={"40px"}
          color={"#fff"}
        />
      </S.UserInfoWrapper>
    </S.Wrapper>
  );
}

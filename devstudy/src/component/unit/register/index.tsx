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
    const { userId, password1, password2, email } = inputs;

    console.log("userID:", userId);
    console.log("password01:", password1);
    console.log("password2:", password2);
    console.log("email", email);

    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSubmit = () => {
    alert("testing");
  };

  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <input placeholder="아이디" name="userId" onChange={onChangeInputs} />
      <input
        type="password"
        placeholder="비밀번호"
        name="password1"
        onChange={onChangeInputs}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        name="password2"
        onChange={onChangeInputs}
      />
      <input placeholder="이메일" name="email" onChange={onChangeInputs} />
      <label>남자</label>
      <input type="radio" name="sex" checked onChange={onChangeInputs} />
      <label>여자</label>
      <input type="radio" name="sex" onChange={onChangeInputs} />
      <Button onClick={onClickSubmit} text={"회원가입"} />
    </S.Wrapper>
  );
}

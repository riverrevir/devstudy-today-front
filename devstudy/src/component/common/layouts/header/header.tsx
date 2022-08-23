import * as S from "./header-css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { NavigationUtil } from "../../../../util/navigation-util";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate(NavigationUtil.login);
  };

  const onClickRegister = () => {
    navigate(NavigationUtil.register);
  };

  const onClickHome = () => {
    navigate(NavigationUtil.landingpage);
  };

  return (
    <S.Wrapper>
      <S.Title onClick={onClickHome}>devStudy</S.Title>
      <S.NavWrapper>
        <S.FirstWrapper>
          <div>Product</div>
          <S.Icon icon={faCircle} />
        </S.FirstWrapper>
        <S.SecondWrapper>
          <div>Categories</div>
          <S.Icon icon={faCircle} />
        </S.SecondWrapper>
        <S.ThirdWrapper>
          <div>Contact</div>
        </S.ThirdWrapper>
      </S.NavWrapper>
      <S.ButtonWrapper>
        <S.Login onClick={onClickLogin}>로그인</S.Login>
        <S.RegisterButton onClick={onClickRegister}>회원가입</S.RegisterButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

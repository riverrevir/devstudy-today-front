import styled from "styled-components";
// import type { FormType } from "../../util/profile-validate";
import ProfileUpdateInput from "./ProfileUpdateInput";

const Inputs = [
  {
    id: 1,
    type: "text",
    title: "이름",
    formType: "username",
  },
  {
    id: 2,
    type: "email",
    title: "이메일",
    notice: "인증필요",
    formType: "email",
  },
  {
    id: 3,
    type: "text",
    title: "휴대전화",
    formType: "phone",
  },
  {
    id: 4,
    type: "password",
    title: "비밀번호",
    formType: "password",
  },
] as const;

function MyPageForm() {
  return (
    <MyPageFormContainer>
      <Header>
        <h3>기본 정보</h3>
        <Separator />
      </Header>
      <Form>
        {Inputs.map((item) => (
          <Row key={item.id}>
            <InputTitle>{item.title}</InputTitle>
            <InputContainer>
              <ProfileUpdateInput type={item.type} formType={item.formType} />
              {item.type === "email" ? (
                <InputButton>이메일 전송</InputButton>
              ) : null}
              <InputButton type="button">변경</InputButton>
            </InputContainer>
          </Row>
        ))}
      </Form>
    </MyPageFormContainer>
  );
}
export default MyPageForm;

const MyPageFormContainer = styled.div`
  /* background-color: yellow; */
  margin: 30px;
`;
const Header = styled.div``;
const Separator = styled.hr`
  border-top: 2px black solid;
`;
const Form = styled.form``;
const Row = styled.div``;
const InputTitle = styled.h5`
  margin-bottom: 0;
`;
const InputContainer = styled.div`
  margin-top: 10px;
  height: 35px;
  display: flex;
  /* align-items: stretch; */
  gap: 10px;

  @media screen and (max-width: 1670px) {
    display: grid;
    height: auto;
    & > button {
      height: 35px;
      margin-top: 10px;
    }

    & > .profile-input-wrapper > .profile-input {
      height: 35px;
      width: 100%;
    }
  }
`;
const InputButton = styled.button`
  margin: 0;
  /* height: 100%; */
  padding: 0 15px;
  background-color: white;
  border: 0.5px solid #dedede;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #dedede;
  }
`;

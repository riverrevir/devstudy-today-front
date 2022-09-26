import styled from "styled-components";

const Inputs = [
  {
    id: 1,
    type: 'text',
    title: '이름',
  },
  {
    id: 2,
    type: 'email',
    title: '이메일',
    notice: '인증필요',
    button: '이메일 전송',
  },
  {
    id: 3,
    type: 'text',
    title: '휴대전화',
  },
  {
    id: 4,
    type: 'password',
    title: '비밀번호'
  }
]

function MyPageForm() {
  return <MyPageFormContainer>
    <Header>
      <h3>기본 정보</h3>
      <Separator />
    </Header>
    <Form>
      {
        Inputs.map((item) =>
          <Row key={item.id}>
            <InputTitle>{item.title}</InputTitle>
            <InputContainer>
              <Input type={item.type} />
              {item.button ? <InputButton>{item.button}</InputButton> : null}
              <InputButton type='button'>변경</InputButton>
            </InputContainer>
          </Row>
        )
      }
    </Form>
  </MyPageFormContainer>
}
export default MyPageForm;

const MyPageFormContainer = styled.div`
  /* background-color: yellow; */
  margin: 30px;
`
const Header = styled.div`
`
const Separator = styled.hr`
  border-top: 2px black solid;
`
const Form = styled.form`
`
const Row = styled.div`
`
const InputTitle = styled.h5`
  margin-bottom: 0;
`
const InputContainer = styled.div`
  margin-top: 10px;
  height: 35px;
  display: flex;
  align-items: stretch;
  gap: 10px;
`
const Input = styled.input`
  height: 100%;
  background-color: #f5f5f5;
  border: 1px #dedede solid;
  font-size: 18px;
  outline: none;
  padding: 0 10px;
`
const InputButton = styled.button`
  margin: 0;
  height: 100%;
  padding: 0 15px;
  background-color: white;
  border: 0.5px solid #dedede;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #dedede;
  }
`
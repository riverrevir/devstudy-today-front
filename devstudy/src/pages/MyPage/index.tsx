import styled from "styled-components";

function MyPage() {
  return <Container>
    <MyPageWrapper>
      <SideMenuWrapper>

      </SideMenuWrapper>
      <FormWrapper>
        <MyPageForm>

        </MyPageForm>
      </FormWrapper>
    </MyPageWrapper>
  </Container>
}

export default MyPage;

const Container = styled.div`
  display: flex;
  height: 100%;
`

const MyPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 50%;
  aspect-ratio: 1;
  margin: auto;
  /* background-color: skyblue; */
  border-radius: 10px;
  box-shadow: 1px 0px 21px -6px rgba(0,0,0,0.46);
`
const SideMenuWrapper = styled.div`
  /* background-color: orange; */
`
const FormWrapper = styled.div`
  /* background-color: pink; */
`
const MyPageForm = styled.form`
  /* background-color: yellow; */
`
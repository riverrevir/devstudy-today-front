import styled from "styled-components";

const menuItems = [
  { id: 1, name: '내 정보' },
  { id: 2, name: '내 게시물' },
  { id: 3, name: '계정 관리' }
];

function MyPage() {
  return <Container>
    <MyPageWrapper>
      <SideMenuWrapper>
        <Header>
          <Title>안녕하세요 {'Eunkuk Kim'}님!</Title>
          <CouponInfo>사용가능한 쿠폰: {1}</CouponInfo>
        </Header>
        <MenuList>
          {menuItems.map((item) =>
            <ItemWrapper key={item.id}>
              {item.name}
            </ItemWrapper>
          )}
        </MenuList>
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
  background-color: orange;
  padding: 30px;
`
const FormWrapper = styled.div`
  /* background-color: pink; */
`
const MyPageForm = styled.form`
  /* background-color: yellow; */
`
const Header = styled.header`

`
const Title = styled.h1`
  margin-top: 0;
`
const CouponInfo = styled.p`
`
const MenuList = styled.ul`

`
const ItemWrapper = styled.li`
`
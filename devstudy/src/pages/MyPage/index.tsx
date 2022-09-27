import styled from "styled-components";
import MyPageForm from "./MyPageForm";

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
          <CouponInfo>사용가능한 쿠폰: <CouponCounter>{1}</CouponCounter></CouponInfo>
        </Header>
        <MenuList>
          {menuItems.map((item) =>
            <ItemWrapper key={item.id}>
              {item.name}
            </ItemWrapper>
          )}
        </MenuList>
      </SideMenuWrapper>
      <MyPageForm />
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
  box-shadow: 0px 4px 11px -3px rgba(130,130,130,0.56);
`
const SideMenuWrapper = styled.div`
  /* background-color: orange; */
  padding: 30px;
`
const Header = styled.header`

`
const Title = styled.h1`
  margin-top: 0;
`
const CouponInfo = styled.p`
`
const CouponCounter = styled.a`
  color: red;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 5px;
  &:hover {
    font-weight: 600;
  }
`
const MenuList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 50px;

  &:last-child {
    border-bottom: 1px solid #BCBCBC;
  }
`
const ItemWrapper = styled.li`
  border-top: 1px solid #BCBCBC;
  height: 60px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #fcfcfc;
    backdrop-filter: blur(10px);
    font-weight: 500;
  }
`
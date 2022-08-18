import { ReactChild } from "react";
import styled from "styled-components";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

interface LayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  width: 100%;
`;

export default function Layout(props: LayoutProps) {
  const hideSidebar =
    window.location.pathname === "/login" ||
    window.location.pathname === "/register" ||
    window.location.pathname === "/" ? null : (
      <Sidebar />
    );

  const hideHeader =
    window.location.pathname === "/calendar" ||
    window.location.pathname === "/home" ||
    window.location.pathname === "/mypage" ? null : (
      <Header />
    );

  return (
    <>
      {hideHeader}
      <Wrapper>
        {hideSidebar}
        <Body>{props.children}</Body>
      </Wrapper>
    </>
  );
}

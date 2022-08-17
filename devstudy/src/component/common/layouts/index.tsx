import { ReactChild } from "react";
import styled from "styled-components";
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
    window.location.pathname === "/register" ? null : (
      <Sidebar />
    );

  return (
    <Wrapper>
      {hideSidebar}
      <Body>{props.children}</Body>
    </Wrapper>
  );
}

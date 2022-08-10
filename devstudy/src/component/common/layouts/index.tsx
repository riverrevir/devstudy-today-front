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
  return (
    <Wrapper>
      <Sidebar />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}

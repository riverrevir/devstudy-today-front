import { ReactChild } from "react";
import styled from "styled-components";
import Sidebar from "./sidebar/sidebar";

interface LayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div``;

const BodyWrapper = styled.div``;

const Body = styled.div``;

export default function Layout(props: LayoutProps) {
  return (
    <Wrapper>
      <BodyWrapper>
        <Sidebar />
        <Body>{props.children}</Body>
      </BodyWrapper>
    </Wrapper>
  );
}

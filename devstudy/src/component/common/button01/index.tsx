import styled from "styled-components";

interface PropsButtons {
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
  text?: string;
  fontSize?: string;
  backgroundColor?: string;
  border?: string;
}

const StudyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: PropsButtons) => props.color};
  width: ${(props: PropsButtons) => props.width};
  height: ${(props: PropsButtons) => props.height};
  border-radius: ${(props: PropsButtons) => props.borderRadius};
  background-color: #3ba3de;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: PropsButtons) => props.color};
  font-size: ${(props: PropsButtons) => props.fontSize};
`;

export default function Button(props: PropsButtons) {
  return (
    <>
      <StudyButton
        onClick={props.onClick}
        color={props.color}
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        backgroundColor={props.backgroundColor}
      >
        <Text color={props.color} fontSize={props.fontSize}>
          {props.text}
        </Text>
      </StudyButton>
    </>
  );
}

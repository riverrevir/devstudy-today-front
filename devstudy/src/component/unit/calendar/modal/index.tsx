import styled from "styled-components";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

const Wrapper = styled.div`
  width: 300px;
  background: #d8d8d8;
  position: absolute;
  z-index: 5;
  margin: 140px auto;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: 8px;
`;

const ModalWrapper = styled.form`
  background-color: #fff;
  width: 280px;
  height: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

const Title = styled.h3`
  padding-top: 12px;
`;

const XIcon = styled(FontAwesomeIcon)`
  width: 38px;
  height: 18px;
  position: absolute;
  right: 0px;
  top: 10px;
  :hover {
    cursor: pointer;
  }
`;

// const EventInput = styled.input`
//   width: 200px;
//   height: 40px;
//   padding: 8px;
//   border-radius: 10px;
//   ::placeholder {
//     opacity: 0.5;
//   }
// `;

const CheckboxWrapper = styled.div`
  width: 150px;
  height: 120px;
  margin-top: 8px;
`;

const HighestLabel = styled.label`
  font-weight: 500;
  font-size: 20px;
  margin: 4px;
  color: #ff6666;
`;

const NormalLabel = styled.label`
  font-weight: 500;
  font-size: 20px;
  margin: 4px;
  color: #5ced73;
`;

const LowestLabel = styled.label`
  font-weight: 500;
  font-size: 20px;
  margin: 4px;
  color: #00d2ff;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

const ButtonWrapper = styled.div`
  width: 280px;
`;

const SubmitButton = styled.input`
  width: 120px;
  height: 40px;
  border: none;
  margin-right: 6px;
  background: #abf7b1;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const CancelButton = styled.input`
  width: 120px;
  height: 40px;
  border: none;
  margin-left: 6px;
  background: #ffb5b7;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default function Modal(props: any) {
  // const [schedule, setSchedule] = useState<any[]>([]);

  const onChangeEvents = (event: any) => {
    console.log(event.target.value);
  };

  const onClickCancel = () => {
    props.setIsModal(false);
  };

  const onClickSubmit = () => {
    props.setIsModal(false);
  };

  return (
    <Wrapper>
      <XIcon icon={faX} onClick={onClickCancel} />
      <ModalWrapper>
        <Title>작업 우선 순위</Title>
        {/* <EventInput placeholder="스케줄 적기" onChange={onChangeEvents} /> */}
        <CheckboxWrapper>
          <HighestLabel>Highest</HighestLabel>
          <Checkbox
            type="radio"
            name="options"
            value="highest"
            onChange={onChangeEvents}
          />
          <NormalLabel>Normal</NormalLabel>
          <Checkbox
            type="radio"
            name="options"
            value="normal"
            onChange={onChangeEvents}
          />
          <LowestLabel>Lowest</LowestLabel>
          <Checkbox
            type="radio"
            name="options"
            value="lowest"
            onChange={onChangeEvents}
          />
        </CheckboxWrapper>
        <ButtonWrapper>
          <SubmitButton type="button" value="Ok" onClick={onClickSubmit} />
          <CancelButton type="button" value="Cancel" onClick={onClickCancel} />
        </ButtonWrapper>
      </ModalWrapper>
    </Wrapper>
  );
}

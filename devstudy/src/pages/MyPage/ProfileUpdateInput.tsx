import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import validate from "../../util/profile-validate";
import type { FormType } from '../../util/profile-validate';

interface Props {
  type: 'text' | 'email' | 'password';
  formType: FormType;
}

function ProfileUpdateInput({ type, formType }: Props) {
  const [result, setResult] = useState({
    isValid: true,
    error: ""
  });
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setResult(validate(e.target.value, formType));
  }
  return <InputWrapper>
    <Input type={type} onChange={handleChange} />
    <Description>{result ? result.error : null}</Description>
  </InputWrapper>
}
export default ProfileUpdateInput;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
`
const Input = styled.input`
  /* height: 100%; */
  background-color: #f5f5f5;
  border: 1px #dedede solid;
  font-size: 18px;
  outline: none;
  padding: 0 10px;
`
const Description = styled.p`
  position: absolute;
  bottom: -15px;
  width: 350px;
  margin: 0;
  color: red;
  font-size: 12px;
`
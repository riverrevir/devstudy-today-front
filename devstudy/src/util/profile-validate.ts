export type FormType = "username" | "email" | "phone" | "password";

function validate(state: string, formType: FormType) {
  let isValid = false;

  const usernameRegex = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /^\d{3}\d{3,4}\d{4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const errorMsgs = {
    username: "이름은 2글자 이상입니다.",
    email: "유효한 이메일 형식이 아닙니다",
    phone: "유효한 핸드폰 번호 형식이 아닙니다.",
    password: "비밀번호는 대소문자/한글/특수문자를 포함하고 8글자 이상입니다.",
  };

  if (formType === "username" && usernameRegex.test(state)) isValid = true;
  if (formType === "email" && emailRegex.test(state)) isValid = true;
  if (formType === "phone" && phoneRegex.test(state)) isValid = true;
  if (formType === "password" && passwordRegex.test(state)) isValid = true;

  if (isValid) return { isValid, error: "" };
  else return { isValid, error: errorMsgs[formType] };
}
export default validate;

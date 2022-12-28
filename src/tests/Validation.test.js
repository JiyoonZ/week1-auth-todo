import { validation } from '../utils/validation';

describe('validation function test: 로그인/회원가입 유효성 검사', () => {
  test('이메일 입력이 @을 포함하고, @ 이후 영어로 끝나는 문자를 포함하는 경우 성공', () => {
    const validEmail = (value) => {
      // expect(validation('email', value)).toBe(true);
      expect(validation('email', value)).toBeTruthy();
    };
    validEmail('abc@naver.com');
    validEmail('abc@test12TEST');
    validEmail('abc@abckdjls');
    validEmail('123@gmail.com');
  });
  test('이메일 입력시 @을 포함하지 않으며 @ 이후 3 개 이하의 문자를 포함하는 경우, 알파벳으로 끝나지 않는 경우 실패 ', () => {
    const inVaildEmail = (value) => {
      // expect(validation('email', value)).toBe(false);
      expect(validation('email', value)).toBeFalsy();
    };
    inVaildEmail('abcabc');
    inVaildEmail('abc@ab123');
    inVaildEmail('abc@abc');
  });
  test('비밀번호 입력이 8-30 자의 문자인 경우 통과됩니다. ', () => {
    const validPassword = (value) => {
      expect(validation('password', value)).toBe(true);
    };
    validPassword('12345678');
    validPassword('abc@klsdajk3928239ssjdhfks');
  });
});

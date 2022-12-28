export const INPUT = {
  PLACEHOLDER: {
    email: '이메일 주소를 입력하세요.',
    password: '비밀번호를 입력하세요.',
  },
  MIN_LEN: {
    email: undefined,
    password: 8,
  },
};

export const RES_MSG = {
  SUCCESS(SignState) {
    return `${HOME_TITLE[SignState]}에 성공하였습니다`;
  },
  FAIL(SignState) {
    return `${HOME_TITLE[SignState]}에 실패하였습니다. 재시도해주세요.`;
  },
};

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const HOME_TITLE = {
  SIGN_UP: '회원 가입',
  SIGN_IN: '로그인',
};
export const SUBMIT_BTN = {
  SIGN_UP: '계정 생성',
  SIGN_IN: '로그인',
};
export const TOGGLE_TEXT = {
  SIGN_UP: '로그인으로 이동하기',
  SIGN_IN: '회원 가입으로 이동하기',
};

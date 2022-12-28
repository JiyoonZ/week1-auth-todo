import { render } from '@testing-library/react';
import SignForm from '../components/SignForm';
import TextInput from '../components/TextInput';
import { INPUT, SIGN_IN, SUBMIT_BTN } from '../utils/constants';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';

describe('로그인/회원가입 페이지', () => {
  test('초기 HOME 화면에서의 Title은 회원가입이다', () => {
    const { getByText } = render(<Home />, { wrapper: Router });
    expect(getByText('회원 가입')).toBeInTheDocument();
  });

  test('로그인 페이지일때 버튼의 value는 로그인이다', async () => {
    const { getByDisplayValue } = render(<SignForm signState={SIGN_IN} />, {
      wrapper: Router,
    });
    const btnEle = getByDisplayValue(`${SUBMIT_BTN[SIGN_IN]}`);
    expect(btnEle).toBeInTheDocument();
  });

  test('email 일때 input 태그의 placeHolder 테스트 ', () => {
    const type = 'email';
    const { getByPlaceholderText } = render(<TextInput type={type} />);
    const input = getByPlaceholderText(INPUT.PLACEHOLDER[type]);
    expect(input).toBeInTheDocument();
  });
});

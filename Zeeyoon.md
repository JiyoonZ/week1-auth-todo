# Testing: Jest

> React 공식 문서에서는 react-testing-library 를 권장(Enzyme 도 많이 사용)
>
> - Enzyme : props, state 를 확인하는 등 컴포넌트의 내부 기능에 자주 접근
> - react-testing-library : 렌더링된 결과에 보다 집중 (실제 화면에 어떤것이 보여지는지 DOM 에 신경)
> - Jest : 테스팅 프레임워크
> - Enzyme/react-testing-library : 리액트 테스팅 라이브러리
> - Cypress/TestCafe : E2E 테스트 도구

## 3.1 함수 단위 테스트(Unit test)

- 최소 단위로 기능이 잘 작동하는지 확인 (함수, class, 등..)
- 1주차 우리의 과제에서의 단위테스트
  - 아이디/비밀번호 유효성검사
  - State 상태값에 따른 올바른 돔이 렌더링 되었는지 확인

🏁 commit : https://github.com/JiyoonZ/week1-auth-todo/commit/3818468239927c44975516d49b302c7ac9967ec9

## 3.2 리액트 컴포넌트 테스트(E2E test)

- 브라우저 위에 제대로 작동하는지 테스트
- 종단 간 테스트는 다른 말로 사용자 입장에서 테스트하는 것이다. 사용자에게 노출되는 부분을 직접 점검하는 것이다.
- Cypress(E2E 테스트 도구) 를 많이 사용

## 🌱 React + Jest

> `__test__` 폴더 안에 넣거나 <br/> > `파일명.test.확장자` 를 이름으로 만들면 npm test 시 자동으로 테스트 파일로 인식

- react-testing-library + Jest (jest 는 CRA에서 자동적으로 설치)

  ```jsx
  npm install --save react-testing-library jest-dom
  npm i --save @types/jest
  ```

  ```jsx
  npm i --D @testing-library/jest-dom @testing-library/react
  npm install --save react-testing-library jest-dom
  npm i --save @types/jest
  ```

  - CRA 프로젝트가 아니라면 src 폴더에 setupTests.js 파일 생성

  ```jsx
  import '@testing-library/jest-dom';
  ```

🏁 jest-do 문서 : https://github.com/testing-library/jest-dom
🏁 react-testing-library 문서 : https://testing-library.com/docs/

## 🔑 Jest 유용한 Matchers

### 1️⃣ describe(), it(),test() 키워드

- describe()- 설명할 테스트 대상을 명시, 작은 단위의 테스트코드 그룹화
- it() - 테스트 대상의 행동을 설명 ,it() 내부에는 또다른 describe 와 it 이 올 수 없다.

### 2️⃣ Jest - Matchers

- toBe()

```jsx
const fn = require('./fn');

test('1은 1이야', () => {
  expect(1).tobe(1);
});

test('1더하기 2는 3이야', () => {
  expect(fn.add(1, 2)).tobe(3);
});
```

- toEqual()
  - 배열이나 객체를 비교할때

```jsx
//아래코드는 error 객체나 배열을 재귀적으로 돌면서 toEqual 을 사용해야함
test('이름과 나이를 전딜받아 객체를 반환', () => {
  expect(fn.makeUser('Zeeyoon', 27)).toBe({
    name: 'Zeeyoon',
    age: 27,
  });
});

/**
 * 2. toEqual
 */
// toEqual 을 사용해서 깊은 비교
test('이름과 나이를 전달받아 객체를 반환', () => {
  expect(fn.makeUser('Zeeyoon', 27)).toEqual({
    name: 'Zeeyoon',
    age: 27,
  });
});
```

- toStrictEqual()
  - 기존 함수에서 요구하는 매개변수, 객체의 구조를 엄격하게 검사
  - undefined 값까지 검사

```jsx
const fn = require('./fn');

/**
 * toStrictEqual
 */
// 좀더 엄격하게 검사하기위해서는 toStrictEqual() 사용 (undefined 값까지 엄격하게 검사)
test('이름과 나이와 성별을 전달받아 객체를 반환', () => {
  expect(fn.makeUser('Zeeyoon', 27)).toStrictEqual({
    name: 'Zeeyoon',
    age: 27,
  });
});
```

```jsx
//toBeNull
//toBeUndefined
//toBeDefined
test('null 은 null 입니다.', () => {
  expect(null).toBeNull();
});

// toBeTruty
// toBeFalsy
test('0은 false 입니다.', () => {
  expect(fn.add(1, -1)).toBeFalsy();
});
test('빈문자열이 아닌 문자열은 true 입니다.', () => {
  expect(fn.add('Hello', ' World!')).toBeTruty();
});
```

- 그외 비교

```jsx
.toBeGreaterThan //크다
.toBeGreateThanOrEqual // 크거나 같다
.toBeLessThan //작다
.toBeLessThanOrEqual // 작거나 같다.
.toBeCloseTo //소수점 같은 딱떨어지지 않는 값을 비교할때
```

- `.toHaveLength()` : 검증 대상의 배열의 길이를 검증한다.

```jsx
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the number of shopping list', () => {
  expect(shoppingList).toHaveLength(5);
});
```

- `.toContain()` : 검증 대상의 배열에 특정 원소가 있는지를 검증한다.

```jsx
const familyMem = ['Tom', 'Mike', 'Emily', 'June'];

test('가족 구성원에 June 이 있나요?', () => {
  expect(familyMem).toContain('June');
  expect(new Set(familyMem)).toContain('June');
});
```

- `.toMatch()` : 검증 대상에 대해 정규식 기반으로 검증이 필요할 경우 사용한다.

```jsx
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('Hello world 에는 알파벳 h 가 있나요? (대소문자 x)', () => {
  expect('Hello world').toMatch(/h/i);
});
```

- `.toThrow()` : exception 발생 여부를 검증한다. 문자열 혹은 정규식을 인자로 넘기면 에러 메시지와 동일한지 검증한다.

```jsx
function ErrorTrigger() {
  throw new Error('Error Message');
}

test('에러가 잘 발생하고 있나요?', () => {
  expect(ErrorTrigger).toThrow();
  expect(ErrorTrigger).toThrow(Error);
  expect(ErrorTrigger).toThrow('Error');
  //  Expected substring: "jdk"
  // Received message:   "you are using the wrong JDK"

  expect(ErrorTrigger).toThrow('Error Messag');
  expect(ErrorTrigger).toThrow(/error/i);
});
```

## 3.3 merge 단계에서 필요한 테스트

- git workFlow 에 추가하여 main 혹은 master 브랜치에 머지할때마다 테스트하도록 추가
- 이때 테스트해야하는 부분이 앞으로 우리팀에서 어떤 부분인지에 대한 고민필요

  - 라우팅이 제대로 되었는가? (url에 따라 올바른 컴포넌트 렌더링)

- 팀프로젝트에 공통으로 나오는 util 에서 다양한 테스트가 필요한 경우 유닛테스트를 도입해도 좋을것 같다.

## Celuveat-ui-library

### 라이브러리 동작 환경

```
react >= 18 version
react.dom >= 18 version
```

### DropDown

```tsx
<DropDown>
  <DropDown.Trigger>trigger</DropDown.Trigger>
  <DropDown.Options>
    <DropDown.Option>DROP_DOWN_ITEMS</DropDown.Option>
    <DropDown.Option>DROP_DOWN_ITEMS</DropDown.Option>
  </DropDown.Options>
</DropDown>
```

- 다음과 같은 컴포넌트를 구성하면 다음과 같은 DropDown 스타일과 기능을 사용할 수 있다.

![드랍다운](https://github.com/turtle601/maneoung-ui-library/assets/78203399/2fc750a4-048c-4cff-a0e8-d9e0f5410a0e)

## 사용법

Trigger

```tsx
- isCustom: 사용자가 버튼의 자신만의 스타일을 적용하고 싶을 때 사용, 스타일링한 하위 컴포넌트에 스타일을 적용
  - 사용 시 주의사항
   1. 자식 태그는 꼭 하나만 적용. (아닐 경우 에러)
   2. 자식 태그를 컴포넌트로 넘겨줄 경우 해당 컴포넌트에 onClick, as, 속성을 넘겨주어야 한다.

- externalClick: trigger를 click했을 때 DropDown.Options리스트를 끄고 키는 기능 이외의 다른 기능을 추가하고 싶을 때 사용
```

Options

```tsx
- isCustom: 사용자가 버튼의 자신만의 스타일을 적용하고 싶을 때 사용, 스타일링한 하위 컴포넌트에 스타일을 적용
  - 사용 시 주의사항
   1. 자식 태그는 꼭 하나만 적용. (아닐 경우 에러)
   2. 자식 태그를 컴포넌트로 넘겨줄 경우 해당 컴포넌트에 onClick, as, 속성을 넘겨주어야 한다.

- externalClick: trigger를 click했을 때 DropDown.Options리스트를 끄고 키는 기능 이외의 다른 기능을 추가하고 싶을 때 사용
```

Option

```tsx
- isCustom: 사용자가 버튼의 자신만의 스타일을 적용하고 싶을 때 사용, 스타일링한 하위 컴포넌트에 스타일을 적용
  - 사용 시 주의사항
   1. 자식 태그는 꼭 하나만 적용. (아닐 경우 에러)
   2. 자식 태그를 컴포넌트로 넘겨줄 경우 해당 컴포넌트에 onClick, as, externalClick 속성을 넘겨주어야 한다.

- externalClick: trigger를 click했을 때 DropDown.Options리스트를 끄고 키는 기능 이외의 다른 기능을 추가하고 싶을 때 사용
```

자세한 건 코드 샌드박스를 통해서 확인해보세요!! 

[링크](https://codesandbox.io/s/optimistic-edison-kn7d6p?file=/src/App.tsx)
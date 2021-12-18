# Draggable

## 요구사항

- 박스를 만든다. -> O
- 외부라이브러리 없이 드래그를 구현한다. -> O
- HTML Drag & Drop API를 사용하지 않는다. -> O
- 현재 윈도우 영역을 넘어가지 않는다. -> O
- Box컴포넌트를 감싸는 Draggable 컴포넌트 -> O

## 회고

- 약 2.5일간의 시간이 주어졌었고 최선을 다했다.
- 처음에는 타입스크립트로 가점을 얻기위해 도전을 했었다가 몇가지 에러를 잡지 못해서, 중간에 자바스크립트로 프로젝트를 새로 시작했다.
- 처음에는 HTML Drag & Drop API가 브라우저에 있는 이벤트객체라고 생각하고, 이벤트객체를 안쓰면 어떻게 하지? 하며 계속 고민했었다.
- HTML Drag & Drop API랑 브라우저 API는 다른것으로 알고 계속 프로젝트를 진행했다.
- useRef를 이용해서 draggable container를 지정해서 addEventlistener 메소드를 이용하여 pointerdown 이벤트와 pointermove pointerup pointercancel 이벤트를 지정해주어 drag함수를 만들었다.
- 위치상태는 useState를 줘서 box컴포넌트 props로 전달해줬고 box 위치를 동적으로 바꾸었다.
- 사용자가 박스를 바깥으로 움직였을때에는 화면에 do not overflow this area가 띄우게했다.

## 아쉬운점

1. 타입스크립트로 구현하지 못한점
2. 여러개의 박스를 만들고 싶어서 map을 이용해서 박스를 화면에 렌더링시켜줬는데, 첫번째 박스만 정상적으로 동작하고 나머지는 제대로 동작하지 않았다.

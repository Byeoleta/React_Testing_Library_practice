import { render, screen } from "@testing-library/react";
import Counter from "../Counter";

const CounterProps = {
  count: 0,
  onIncrease: jest.fn(),
  onDecrease: jest.fn(),
};
// CounterProps는 컴포넌트 Counter에 넣어줄 프롭스
// jest.fn()는 가짜 함수

describe("<Counter/>", () => {
  test("스크린에 'Counter'라는 텍스트가 보이는지 확인하는 테스트", () => {
    render(<Counter {...CounterProps} />);

    const text = screen.getByText("Counter");
    // screen.getByText()는 스크린에서 괄호안의 ""안 텍스트를 가지고 있는 HTMLEliment 찾아줌
    expect(text).toBeInTheDocument();
    // 위에서 text라는 변수에 넣어준 HTMLElimentrk Counter 컴포넌트 안에 있는지 테스트

    // const text = screen.getByText(/Count/i);
    // expect(text).toBeInTheDocument();
    // // 정확한 Counter를 찾는게 아니라 "Count"를 포함하고 있는 텍스트 찾고 싶을 땐 이런 정규식 사용
  });

  test("증가 버튼 클릭 시 onIncrease 함수 실행되는지 확인하는 테스트", () => {
    render(<Counter {...CounterProps} />);

    const button = screen.getByRole("button", { name: "증가" });
    // getByRole 메서드 사용해서 "button" 태그의 name이 "증가"인 Eliment 불러옴
    button.click();
    expect(CounterProps.onIncrease).toHaveBeenCalled();
  });

  test("감소 버튼을 클릭했을 떄 onDecrease 함수가 실행되는지 테스트", () => {
    render(<Counter {...CounterProps} />);

    const button = screen.getByRole("button", { name: "감소" });
    button.click();
    expect(CounterProps.onDecrease).toHaveBeenCalled();
  });
});

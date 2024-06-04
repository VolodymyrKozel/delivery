import styled from "styled-components/native";

const sizes = {
  auto: "auto",
  small: 1,
  medium: 2,
  large: 3,
};

const positions = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => `
        ${positions[position]}: ${sizes === "auto" ? "auto" : theme.space[sizes[size]]};`};
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

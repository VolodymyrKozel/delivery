import styled from "styled-components/native";

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variant && textStyles[variant](theme)}
`;

defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
flex - wrap: wrap;
margin - top: 0px;
margin - bottom: 0px;
`;

const body = (theme) => `
    font-family: ${theme.fonts.body};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.semibold};
`;

const caption = (theme) => `
    font-family: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;
const error = (theme) => `
    color: ${theme.colors.text.error};
`;
const hint = (theme) => `
    font-family: ${theme.fontSizes.body};
`;

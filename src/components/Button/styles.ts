import styled from 'styled-components';

export const ButtonContainer = styled.button.attrs((props: { disabled?: boolean }) => ({
  disabled: props.disabled,
}))<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: 42px;
  background-color: #81259D;
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

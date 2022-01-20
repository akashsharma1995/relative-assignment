import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background: linear-gradient(to top, #5225d9, #ad8eff);
  padding: 10px 20px;
  border-radius: 15px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;
  border: none;

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CustomButton = (props) => {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default CustomButton;
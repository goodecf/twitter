import styled from 'styled-components';
import { Modal, Button, Image, Form } from 'semantic-ui-react'

export const SignupModal = styled(Modal)`
  && {
    width: 60%;
    height: 70%;
    max-width: 700px;
    border-radius: 30px;
  }
`;

export const ModalHeader = styled(Modal.Header)`
  &&&& {
    display: flex;
    justify-content: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`;

export const Icon = styled(Image)`
  &&& {
    margin: 0px auto 0px 50%;
    width: 25px;
    height: 25px;
  }
`;

export const NextBtn = styled(Button)`
  && {
    margin: 0px;
    width: 75px;
    max-width: 75px;
    border-radius: 15%;
    disabled: ${props => props.disabled}
  }
`;

export const SignupForm = styled(Form)`
  && {
    width: 50%;
  }
`;

export const Text = styled.p`
  display: block;
  margin-bottom: 0px;
  font-size: 16px;
  color: gray;
  margin-bottom: 15px;
`;

export const TextBold = styled(Text)`
  font-weight: bold;
  color: black;
  margin-top: 20px;
  margin-bottom: 00px;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;
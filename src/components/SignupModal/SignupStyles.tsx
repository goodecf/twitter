import styled from 'styled-components';
import { Modal, Button, Image, Form, Input, Icon } from 'semantic-ui-react'

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

export const TwitIcon = styled(Image)`
  &&& {
    width: 25px;
    height: 25px;
    margin-left: auto;
  }
`;

export const TwitIconCenter = styled(TwitIcon)`
  &&& {
    margin-right: auto;
    margin-left: 0px;
  }
`;

export const IconPageTwo = styled(Icon)`
  && {
    align-self: flex-start;
    margin: 0px auto 0px 0px;
    padding: 0px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const NextBtn = styled(Button)`
  && {
    margin: 0px 0px 0px auto;
    width: 75px;
    max-width: 75px;
    border-radius: 15%;
    disabled: ${props => props.disabled}
  }
`;

export const SignupForm = styled(Form)`
  &&&&&& {
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  display: block;
  font-size: 16px;
  color: gray;
  margin-bottom: 15px;
`;

export const TextSecondPage = styled(Text)`
  margin: 20px 0px 30px 0px;
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

export const SignupButton = styled(Button)`
  &&& {
    width: 100%
  }
`;

export const Container = styled(Modal.Content)`
  &&&& {
    display: flex
    flex-direction: column;
  }
`;

export const LabelInput = styled(Input)`
  && {
    margin-bottom: 10px;
  }
`;
import React, { useEffect } from 'react';
import { Modal, Form } from 'semantic-ui-react';

// @ts-ignore
import TwitterLogo from '../../images/logo512.png';
import { InputFields } from './Interfaces';
import {
  ModalHeader,
  TextSecondPage,
  SignupButton,
  LabelInput,
  IconPageTwo,
  TwitIconCenter
} from './SignupStyles';

interface Props {
  inputs: InputFields,
  setInputs: Function,
  backPage: Function
};

const Signup2 = (props: Props) => {
  const formatBirthDate = () => {
    return `${props.inputs.month} ${props.inputs.day}, ${props.inputs.year}`;
  };

  return (
    <>
      <ModalHeader>
        <IconPageTwo
          name="arrow left"
          onClick={() => props.backPage()}
          data-cy="goBack"
          cursor="pointer"
        />

        <TwitIconCenter src={TwitterLogo} size="mini" />
      </ModalHeader>

      <Modal.Content>
        <h3>Create your account</h3>

        <Form>
          <LabelInput
            required
            data-cy="name-2"
            value={props.inputs.name}
            label="name"
            fluid
          />

          <LabelInput
            required
            data-cy="email-2"
            value={props.inputs.email}
            label="email"
            fluid
          />

          <LabelInput
            required
            data-cy="birthDate-2"
            value={formatBirthDate()}
            label="birth date"
            fluid
          />
        </Form>

        <TextSecondPage>
          By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Others will be able to find you by email or phone number when provided · Privacy Options
        </TextSecondPage>

        <SignupButton color="twitter" data-cy="signupBtn">
          Sign up
          </SignupButton>
      </Modal.Content>
    </>
  )
};

export default Signup2;
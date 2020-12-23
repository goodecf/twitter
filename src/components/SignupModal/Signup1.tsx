import React, { ChangeEvent, } from 'react';
import { Modal, Form, Select } from 'semantic-ui-react'

// @ts-ignore
import TwitterLogo from '../../images/logo512.png';
import { InputFields } from './Interfaces';
import { months, days, years } from './DateOfBirth';
import {
  ModalHeader,
  NextBtn,
  TwitIcon,
  SignupForm,
  TextBold,
  Text,
  Label
} from './SignupStyles';

interface Props {
  nextPage: Function,
  inputs: InputFields,
  setInputs: Function
};

const Signup1 = (props: Props) => {
  const { nextPage, setInputs, inputs } = props;

  const inputsAllFilled = (): boolean => {
    return inputs.name !== ''
      && inputs.email !== ''
      && inputs.month !== ''
      && inputs.year !== -1
      && inputs.day !== -1;
  };

  const updateInputObj = (e: ChangeEvent<HTMLInputElement>, prop: string) => {
    setInputs({
      ...inputs,
      [prop]: e.currentTarget.value
    });
  };

  const updateInputObjDropdown = (e: ChangeEvent<HTMLInputElement>, data: any, prop: string) => {
    setInputs({
      ...inputs,
      [prop]: data.value
    });
  }

  return (
    <>
      <ModalHeader>
        <TwitIcon src={TwitterLogo} size="mini" />

        <NextBtn
          color="twitter"
          onClick={() => nextPage()}
          disabled={!inputsAllFilled()}
          data-cy="next"
        >
          Next
        </NextBtn>
      </ModalHeader>

      <Modal.Content>
        <h3>Create your account</h3>

        <SignupForm>
          <Form.Input
            placeholder="Name"
            required
            onChange={(e) => updateInputObj(e, 'name')}
            value={props.inputs.name}
            data-cy="name"
            type="text"
          />
          <Form.Input
            placeholder="Email"
            required
            onChange={(e) => updateInputObj(e, 'email')}
            value={props.inputs.email}
            data-cy="email"
          />
        </SignupForm>

        <TextBold>Date of birth</TextBold>

        <Text>
          This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
        </Text>

        <Form>
          <Label aria-label="Month">Month</Label>
          <Form.Field
            control={Select}
            options={months}
            value={props.inputs.month}
            placeholder="Month"
            onChange={(e: ChangeEvent<HTMLInputElement>, data: object) => updateInputObjDropdown(e, data, 'month')}
            id="Month"
            data-cy="month"
          />

          <Label aria-label="Day">Day</Label>
          <Form.Field
            control={Select}
            options={days}
            value={props.inputs.day}
            placeholder="Day"
            onChange={(e: ChangeEvent<HTMLInputElement>, data: object) => updateInputObjDropdown(e, data, 'day')}
            id="Day"
            data-cy="day"
          />

          <Label aria-label="Year">Year</Label>
          <Form.Field
            control={Select}
            options={years}
            value={props.inputs.year}
            placeholder="Year"
            onChange={(e: ChangeEvent<HTMLInputElement>, data: object) => updateInputObjDropdown(e, data, 'year')}
            id="Year"
            data-cy="year"
          />
        </Form>
      </Modal.Content>
    </>
  )
};

export default Signup1;
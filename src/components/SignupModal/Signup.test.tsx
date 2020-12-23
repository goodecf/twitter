import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Signup1 from './Signup1';
import { InputFields } from './Interfaces';

const inputs: InputFields = {
  name: '',
  email: '',
  month: '',
  day: 0,
  year: 2020
};

describe('Signup1', () => {
  beforeEach(() => {
    render(<Signup1
      inputs={inputs}
      setInputs={() => { }}
      nextPage={(): ReactElement => { return <></> }
      }
    />);
  });


  it('has all input fields', () => {
    const nameField = screen.getByPlaceholderText('Name');
    const emailField = screen.getByPlaceholderText('Email');
    const monthSelector = screen.getByLabelText('Month');
    const daySelector = screen.getByLabelText('Day');
    const yearSelector = screen.getByLabelText('Year');

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(monthSelector).toBeInTheDocument();
    expect(yearSelector).toBeInTheDocument();
    expect(daySelector).toBeInTheDocument();
  });

  it('next button defaults to disabled', () => {
    const nexBtn = screen.getByRole('button', {
      name: 'Next'
    });
    expect(nexBtn).toBeInTheDocument();
    expect(nexBtn).toBeDisabled();
  });
});
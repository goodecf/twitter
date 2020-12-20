import React from 'react';

import { ModalHeader } from './SignupStyles';

interface Props {
  inputs: Object,
  setInputs: Function
};

const Signup2 = (props: Props) => {
  return (
    <ModalHeader>
      Part two.
    </ModalHeader>
  )
};

export default Signup2;
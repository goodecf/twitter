import React, { useState } from 'react';

import { SignupModal } from './SignupStyles';
import { InputFields } from './Interfaces';
import Signup1 from './Signup1';
import Signup2 from './Signup2';

interface Props {
  setOpen: Function,
  open: boolean,
  children?: any
};

const Signup = (props: Props) => {
  const { open, setOpen } = props;
  const [pageState, setPageState] = useState<number>(0);
  const [inputs, setInputs] = useState<InputFields>({
    'name': '',
    'email': '',
    'month': '',
    'day': -1,
    'year': -1,
  });

  const nextPage = () => setPageState(() => pageState + 1);
  const backPage = () => setPageState(() => pageState - 1);

  const pages = [
    <Signup1 inputs={inputs} setInputs={setInputs} nextPage={nextPage} />,
    <Signup2 inputs={inputs} setInputs={setInputs} backPage={backPage} />
  ];

  return (
    <SignupModal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      setOpen={setOpen}
    >
      {pages[pageState]}
    </SignupModal>
  );
};

export default Signup;
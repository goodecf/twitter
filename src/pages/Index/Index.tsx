import React from 'react';
import { Button, Icon, Image } from 'semantic-ui-react';

import './Index.css';
// @ts-ignore
import TwitterLogo from '../../images/logo512.png';
import Signup from '../../components/SignupModal/Signup';

interface Props { };

const Index = (props: Props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="container">
      <Signup open={open} setOpen={setOpen} />
      <div className="container-child left">
        <p className="text text-left">
          <Icon name="search" />
          Follow your interests.
        </p>

        <p className="text text-left">
          <Icon name="users" />
          Hear what people are talking about.
        </p>

        <p className="text text-left">
          <Icon name="chat" />
          Join the conversation.
        </p>
      </div>

      <div className="container-child right">
        <Image src={TwitterLogo} size="mini" />

        <p className="text text-large">
          See what’s happening in the world right now
        </p>

        <p className="text">Join Twitter today.</p>

        <Button
          color="twitter"
          className="signup btn"
          onClick={() => setOpen(!open)}
        >
          Sign up
        </Button>

        <Button className="btn login">Log in</Button>
      </div>
    </div >
  )
};

export default Index;
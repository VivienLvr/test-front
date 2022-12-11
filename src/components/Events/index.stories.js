import React from 'react';
import { storiesOf } from "@storybook/react";

import Events from "./";

import events from '../../mocks/events.json'

storiesOf('Exercise/Components/Events', module)
  .add('default', () => (
    <Events events={events}/>
  ));

import React from 'react';
import { storiesOf } from "@storybook/react";

import Pane from "./";
import Img from "./gardener_cover.png";

storiesOf('Exercise/Components/Pane', module)
  .add('default', () => (
    <Pane 
    event={
      {
        title:"Le printemps des jardiniers",
        address: {
          place: "Domaine de la Grange - la Prévôté",
          city: "Savigny-le-Temple",
          postal_code: "77547"
        },
        date: "03/29/2021"
      }}/>
  )).add('with cover', () => (
    <Pane event={
      {
        cover: Img, 
        title:"Le printemps des jardiniers",
        address: {
          place: "Domaine de la Grange - la Prévôté",
          city: "Savigny-le-Temple",
          postal_code: "77547"
        },
        date: "03/29/2021"
      }} cover={true} />
  ));

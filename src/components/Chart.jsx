import React from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import * as _ from 'lodash';
import './Chart.css';

function average(numbers) {
  return _.round(_.sum(numbers)/numbers.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={150} width={200} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{`${average(props.data)} ${props.units}`}</div>
    </div>
  );
}

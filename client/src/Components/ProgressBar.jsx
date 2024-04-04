import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'

const ProgressBar = ({percentage}) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  )
}

export default ProgressBar

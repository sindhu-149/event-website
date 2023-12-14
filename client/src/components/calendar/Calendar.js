// import React from 'react';
// import './calendar.css';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// const Calendar = ({ onClose }) => {
//   return (
//     <div className='cal'>
//       <button onClick={onClose}>Close</button>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker orientation="portrait" />
//     </LocalizationProvider>
//     </div>
//   );
// };

// export default Calendar;

import React from 'react';
import './calendar.css';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const Calendar = ({ onClose, onDateChange }) => {
  return (
    <div className='cal'>
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <button onClick={onClose}>Close</button> */}
      <DemoContainer
        components={['DesktopDatePicker']}
      >


        <DemoItem >
          <DesktopDatePicker />
        </DemoItem>

      </DemoContainer>
    </LocalizationProvider>

    </div>
  );
};

export default Calendar;

import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import '../css/Calendar.css';

moment.locale('fi', {
  week: {
      dow: 1,
      doy: 1,
  },
});

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const testEvents = [
  {
    id: 0,
    title: 'Toinen tapahtuma',
    start: new Date(2018, 0, 23, 16, 0, 0),
    end: new Date(2018, 0, 23, 17, 0, 0)
  },
  {
    id: 1,
    title: 'Päivän tapahtuma',
    allDay: true,
    start: new Date(2018, 0, 21),
    end: new Date(2018, 0, 22),
  }
];

class Calendar extends Component {

  render() {
    return (
      <div className="Calendar">
        <BigCalendar
          views={['month', 'week']}
          events={testEvents}
          onSelectEvent={(event) => console.log(event.title)}
        />
      </div>
    );
  }
}

export default Calendar;

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import DayItem from '../DayItem/index'
import DateItem from '../DateItem/index'
import './index.css'

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
    dayNumber: 1,
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
    dayNumber: 2,
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
    dayNumber: 3,
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
    dayNumber: 4,
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
    dayNumber: 5,
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
    dayNumber: 6,
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
    dayNumber: 7,
  },
]

const MonthItem = props => {
  const {
    onClickDate,
    monthInfo,
    onClickIncrementMonth,
    onClickDecrementMonth,
    activeEmojiUrl,
  } = props
  const {monthName, dates} = monthInfo

  const onSelectDate = date => {
    onClickDate(date)

    const dateIndex = dates.findIndex(element => element.date === date)
    dates[dateIndex].emojiUrl = activeEmojiUrl
  }

  const onIncrementMonth = () => {
    onClickIncrementMonth()
  }

  const onDecrementMonth = () => {
    onClickDecrementMonth()
  }

  return (
    <li className="month-item">
      <div className="part1">
        <MdOutlineKeyboardArrowLeft
          className="arrow-icon"
          type="button"
          onClick={onDecrementMonth}
        />
        <h1 className="month-name">{monthName}</h1>
        <MdOutlineKeyboardArrowRight
          className="arrow-icon"
          type="button"
          onClick={onIncrementMonth}
        />
      </div>
      <ul className="days-list">
        {daysList.map(eachDay => (
          <DayItem key={eachDay.id} dayInfo={eachDay} />
        ))}
      </ul>
      <ul className="dates-list">
        {dates.map(eachDate => (
          <DateItem
            key={eachDate.id}
            dateInfo={eachDate}
            onSelectDate={onSelectDate}
          />
        ))}
      </ul>
    </li>
  )
}

export default MonthItem
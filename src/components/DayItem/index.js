import './index.css'

const DayItem = props => {
  const {dayInfo} = props
  const {day} = dayInfo

  return <li className="day-item">{day}</li>
}

export default DayItem

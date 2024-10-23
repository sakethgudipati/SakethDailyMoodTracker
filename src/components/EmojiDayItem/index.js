import './index.css'

const EmojiDayItem = props => {
  const {day} = props

  return <option value={day}>{day}</option>
}

export default EmojiDayItem
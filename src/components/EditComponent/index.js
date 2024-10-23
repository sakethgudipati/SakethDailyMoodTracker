import EmojiNameItem from '../EmojiNameItem/index'
import EmojiDayItem from '../EmojiDayItem/index'
import './index.css'

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

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

const EditComponent = props => {
  const {displayDate} = props
  return (
    <div className="edit-component-container">
      <div className="edit-container">
        <select className="emoji-name-list">
          {emojisList.map(eachEmojiName => (
            <EmojiNameItem
              key={eachEmojiName.id}
              name={eachEmojiName.emojiName}
            />
          ))}
        </select>
        <select className="day-name-list">
          {daysList.map(eachDay => (
            <EmojiDayItem key={eachDay.id} day={eachDay.day} />
          ))}
        </select>
      </div>
      <h1 className="date-display">{displayDate}</h1>
    </div>
  )
}

export default EditComponent

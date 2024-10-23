import {Component} from 'react'
import './index.css'

class DateItem extends Component {
  state = {
    isTrue: false,
  }

  render() {
    const {isTrue} = this.state
    const {dateInfo, onSelectDate} = this.props
    const {date, emojiUrl} = dateInfo

    const onClickDateItem = () => {
      onSelectDate(date)
      this.setState(prevState => ({isTrue: !prevState.isTrue}))
    }

    return (
      <li
        className={isTrue ? 'date-item' : 'date-item2'}
        type="button"
        onClick={onClickDateItem}
      >
        <p className="date-para">{date}</p>
        {isTrue ? (
          <img src={emojiUrl} className="emoji-image-url" alt="emoji" />
        ) : (
          ''
        )}
      </li>
    )
  }
}

export default DateItem

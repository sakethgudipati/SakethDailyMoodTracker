import {Component} from 'react'
import MonthItem from '../MonthItem/index'
import EmojiItem from '../EmojiItem/index'
import EditComponent from '../EditComponent/index'
import Navbar from '../Navbar/index'
import EmojiCountContext from '../../Context/EmojiCountContext'
import './index.css'

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    count: 0,
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    count: 0,
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    count: 0,
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    count: 0,
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    count: 0,
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

class Home extends Component {
  state = {
    activeEmojiId: '380e6284-a454-11ec-b909-0242ac120002',
    month: 1,
    displayDate: '01',
  }

  onClickEmoji = id => {
    this.setState({activeEmojiId: id})
  }

  onClickDate = (date, monthList, updateMonthCount) => {
    this.setState({displayDate: date})
    const {activeEmojiId, month} = this.state

    // Increment emoji count locally
    const emojiIndex = emojisList.findIndex(
      element => element.id === activeEmojiId,
    )
    emojisList[emojiIndex].count += 1

    // Update month count via context
    const monthIndex = monthList.findIndex(eachMonth => eachMonth.id === month)
    if (monthIndex !== -1) {
      console.log('Updating month count:', monthList[monthIndex]) // Log month being updated
      updateMonthCount(monthList[monthIndex].id)
    } 
    else {
      console.log('Error: Month not found in monthList')
    }
  }

  onClickIncrementMonth = () => {
    const {month} = this.state
    if (month < 12) {
      this.setState(prevState => ({month: prevState.month + 1}))
    }
  }

  onClickDecrementMonth = () => {
    const {month} = this.state
    if (month > 1) {
      this.setState(prevState => ({month: prevState.month - 1}))
    }
  }

  render() {
    const {activeEmojiId, month, displayDate} = this.state

    return (
      <EmojiCountContext.Consumer>
        {value => {
          const {monthList, updateMonthCount} = value

          console.log('monthList in Home:', monthList) // Log monthList here

          if (!monthList) {
            return <p>Error: monthList is undefined</p>
          }

          // Ensure monthList exists and filter it based on the current month
          const filteredMonthList = monthList.filter(
            each => each.month === month,
          )
          const filteredEmoji = emojisList.filter(
            eachEm => eachEm.id === activeEmojiId,
          )

          return (
            <>
              <Navbar />
              <div className="mood-tracker-container">
                <h1 className="main-head">Moods in a Month</h1>
                <div className="whole">
                  <ul className="month-container">
                    {filteredMonthList.map(eachMonth => (
                      <MonthItem
                        key={eachMonth.month}
                        monthInfo={eachMonth}
                        activeEmojiUrl={filteredEmoji[0].emojiUrl}
                        // Passing monthList and updateMonthCount to onClickDate
                        onClickDate={date => this.onClickDate(date, monthList, updateMonthCount)}
                        onClickIncrementMonth={this.onClickIncrementMonth}
                        onClickDecrementMonth={this.onClickDecrementMonth}
                        displayDate={displayDate}
                      />
                    ))}
                  </ul>
                  <div className="customize-container">
                    <ul className="emoji-list">
                      {emojisList.map(eachEmoji => (
                        <EmojiItem
                          key={eachEmoji.id}
                          emojiInfo={eachEmoji}
                          onClickEmoji={this.onClickEmoji}
                          isActive={activeEmojiId === eachEmoji.id}
                        />
                      ))}
                    </ul>
                    <EditComponent displayDate={displayDate} />
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </EmojiCountContext.Consumer>
    )
  }
}

export default Home

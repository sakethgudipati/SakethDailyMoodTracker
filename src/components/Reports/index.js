import {Component} from 'react'
import EmojiReportItem from '../EmojiReportItem/index'
import Navbar from '../Navbar/index'
import MonthOptionItem from '../MonthOptionItem/index'
import BarGraph from '../BarGraph/index'
import './index.css'

const monthsList = [
  {
    id: 10001,
    monthName: 'January',
  },
  {
    id: 10002,
    monthName: 'February',
  },
  {
    id: 10003,
    monthName: 'March',
  },
  {
    id: 10004,
    monthName: 'April',
  },
  {
    id: 10005,
    monthName: 'May',
  },
  {
    id: 10006,
    monthName: 'June',
  },
  {
    id: 10007,
    monthName: 'July',
  },
  {
    id: 10008,
    monthName: 'August',
  },
  {
    id: 10009,
    monthName: 'September',
  },
  {
    id: 10010,
    monthName: 'October',
  },
  {
    id: 10011,
    monthName: 'November',
  },
  {
    id: 10012,
    monthName: 'December',
  },
]

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

class Reports extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="reports-route">
          <h1 className="reports-head">Overall Emoji Report</h1>
          <ul className="overall-report-container">
            {emojisList.map(eachItem => (
              <EmojiReportItem key={eachItem.id} itemInfo={eachItem} />
            ))}
          </ul>
          <div className="heading-and-filter">
            <h1 className="reports-head">Monthly Reports</h1>
            <select className="month-options">
              {monthsList.map(eachMonthName => (
                <MonthOptionItem
                  key={eachMonthName.id}
                  monthName={eachMonthName.monthName}
                />
              ))}
            </select>
          </div>
          <BarGraph />
        </div>
      </>
    )
  }
}

export default Reports

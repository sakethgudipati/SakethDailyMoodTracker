import './index.css'

const MonthOptionItem = props => {
  const {monthName} = props

  return <option value={monthName}>{monthName}</option>
}

export default MonthOptionItem
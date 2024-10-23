import './index.css'

const EmojiReportItem = props => {
  const {itemInfo} = props
  const {emojiName, emojiUrl} = itemInfo

  return (
    <li className="emoji-report-item">
      <p className="emoji-name">{emojiName}</p>
      <img src={emojiUrl} className="emoji-url" alt="emoji" />
      <p className="emoji-count">24</p>
    </li>
  )
}

export default EmojiReportItem

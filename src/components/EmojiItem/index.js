import './index.css'

const EmojiItem = props => {
  const {emojiInfo, onClickEmoji, isActive} = props
  const {id, emojiName, emojiUrl} = emojiInfo

  const onEmojiSelect = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-item" type="button" onClick={onEmojiSelect}>
      <p className={isActive ? 'active-head' : 'emoji-name'}>{emojiName}</p>
      <img
        src={emojiUrl}
        className={isActive ? 'active-emoji-url' : 'emoji-url'}
        alt="emoji url"
      />
    </li>
  )
}

export default EmojiItem
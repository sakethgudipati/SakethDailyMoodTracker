import './index.css'

const EmojiNameItem = props => {
  const {name} = props

  return <option value={name}>{name}</option>
}

export default EmojiNameItem
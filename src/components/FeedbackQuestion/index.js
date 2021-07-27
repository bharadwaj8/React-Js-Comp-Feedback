import './index.css'

const FeedbackQuestion = props => {
  const {each, setEmotion} = props

  const {name, imageUrl} = each

  const answerEmotion = () => {
    setEmotion()
  }
  return (
    <li className="emoji">
      <button className="button" type="button" onClick={answerEmotion}>
        <img src={imageUrl} alt={name} className="emoji-icon" />
      </button>
      <p className="desc">{name}</p>
    </li>
  )
}

export default FeedbackQuestion

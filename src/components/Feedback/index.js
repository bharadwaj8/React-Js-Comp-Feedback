import {Component} from 'react'
import './index.css'
import FeedbackQuestion from '../FeedbackQuestion'

class Feedback extends Component {
  state = {emotion: 1}

  setEmotion = () => {
    this.setState({emotion: 0})
  }

  render() {
    const {feedbackData} = this.props
    const {emojis, loveEmojiUrl} = feedbackData
    const {emotion} = this.state

    console.log(emotion)
    return (
      <div className="bg">
        {emotion ? (
          <div className="feedback-question">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(each => (
                <FeedbackQuestion
                  each={each}
                  key={each.id}
                  setEmotion={this.setEmotion}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="feedback-answer">
            <img src={loveEmojiUrl} alt="loveEmoji" className="emoji-icon" />
            <h1 className="heading">Thank You!</h1>
            <p className="desc">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback

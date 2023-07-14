import './index.css'

const FailureView = props => {
  const {onClickTryAgain} = props

  const onClickTry = () => {
    onClickTryAgain()
  }

  return (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/saikrishaboga-ccbp-tect/image/upload/v1643992995/Book-Hub%20/Group_7522failureView_xgsn71.png"
        alt="failure view"
        className="book-item-failure"
      />
      <p className="book-item-failure-message">
        Something went wrong. Please try again
      </p>
      <button type="button" className="try-again-button" onClick={onClickTry}>
        Try Again
      </button>
    </div>
  )
}

export default FailureView

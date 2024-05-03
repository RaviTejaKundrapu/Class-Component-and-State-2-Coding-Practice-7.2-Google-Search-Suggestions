import './index.css'

const SuggestionItem = props => {
  const {searchItem, sendSearchedSuggestionToInputBox} = props
  const {suggestion} = searchItem

  const onsendSearchToInput = () => {
    sendSearchedSuggestionToInputBox(suggestion)
  }

  return (
    <li className="eachList">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-icon"
        onClick={onsendSearchToInput}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-img"
          alt="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

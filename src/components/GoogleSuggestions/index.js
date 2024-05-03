import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  getSearchItem = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  sendSearchedSuggestionToInputBox = suggestion => {
    const searchInputDisplayInInput = suggestion
    this.setState({searchInput: searchInputDisplayInInput})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <div className="searchAndSuggesstionsContainer">
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              onChange={this.getSearchItem}
              value={searchInput}
              className="input-box"
              placeholder="Search Google"
            />
          </div>
          <ul className="search-suggestion-container">
            {searchResult.map(each => (
              <SuggestionItem
                key={each.id}
                searchItem={each}
                sendSearchedSuggestionToInputBox={
                  this.sendSearchedSuggestionToInputBox
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

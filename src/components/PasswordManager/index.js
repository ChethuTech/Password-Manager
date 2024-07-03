import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import PasswordList from '../PasswordList'
import './index.css'

const backgoundColorsClassNameList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
]
const intialListOfPasswords = [
  {
    id: 1,
    website: 'facebook',
    name: 'Kalki',
    password: 'kalki2024asdfsfvsdgbfjhnghkjhjkhcdfcjgcfzzz',
    profileColor: backgoundColorsClassNameList[0],
  },
  {
    id: 2,
    website: 'apple',
    name: 'Kalki',
    password: 'kalki2024',
    profileColor: backgoundColorsClassNameList[1],
  },
  {
    id: 3,
    website: 'x',
    name: 'Kalki',
    password: 'kalki2024',
    profileColor: backgoundColorsClassNameList[2],
  },
  {
    id: 4,
    website: 'google',
    name: 'Kalki',
    password: 'kalki2024',
    profileColor: backgoundColorsClassNameList[3],
  },
]

class PasswordManager extends Component {
  state = {
    listOfPasswords: [],
    filteredListOfPasswords: [],
    currentName: '',
    currentWebsiteName: '',
    currentPassword: '',
    showPassword: false,
    searchValue: '',
  }

  onChangePassword = event => {
    this.setState({currentPassword: event.target.value})
  }

  onChangeName = event => {
    this.setState({currentName: event.target.value})
  }

  onChangeWebsiteName = event => {
    this.setState({currentWebsiteName: event.target.value})
  }

  addNewPassword = event => {
    event.preventDefault()
    const {currentName, currentPassword, currentWebsiteName} = this.state
    const newPassword = {
      id: uuidv4(),
      name: currentName,
      password: currentPassword,
      website: currentWebsiteName,
      profileColor:
        backgoundColorsClassNameList[
          Math.ceil(Math.random() * backgoundColorsClassNameList.length) - 1
        ],
    }
    this.setState(prevState => ({
      listOfPasswords: [...prevState.listOfPasswords, newPassword],
      currentName: '',
      currentPassword: '',
      currentWebsiteName: '',
    }))
  }

  onSearchPassword = event => {
    const {listOfPasswords} = this.state
    const filteredListOfPasswords = listOfPasswords.filter(eachItem =>
      eachItem.website.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    this.setState({filteredListOfPasswords, searchValue: event.target.value})
    console.log(filteredListOfPasswords)
  }

  changeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deletePassword = id => {
    this.setState(prevState => ({
      listOfPasswords: prevState.listOfPasswords.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  settingUpFilteredList = () => {
    const {searchValue, listOfPasswords, filteredListOfPasswords} = this.state

    return searchValue.length === 0 ? listOfPasswords : filteredListOfPasswords
  }

  render() {
    const {
      listOfPasswords,
      showPassword,
      currentName,
      currentPassword,
      currentWebsiteName,
      searchValue,
    } = this.state
    const filteredListOfPasswords = this.settingUpFilteredList()

    const numberOfPasswords = listOfPasswords.length

    return (
      <div className='bg'>
        <div className='bg-container'>
          <img
            className='app-logo'
            src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png '
            alt='app logo'
          />

          <div className='add-new-password-container'>
            <form className='form' onSubmit={this.addNewPassword}>
              <h1 className='form-heading'> Add New Password</h1>

              <label className='form-label'>
                <div className='form-label-img-container'>
                  <img
                    className='form-label-img'
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
                    alt='website'
                  />
                </div>
                <input
                  onChange={this.onChangeWebsiteName}
                  value={currentWebsiteName}
                  type='text'
                  placeholder='Enter Website'
                  className='form-label-input'
                />
              </label>

              <label className='form-label'>
                <div className='form-label-img-container'>
                  <img
                    className='form-label-img'
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
                    alt='username'
                  />
                </div>
                <input
                  onChange={this.onChangeName}
                  value={currentName}
                  type='text'
                  placeholder='Enter Username'
                  className='form-label-input'
                />
              </label>

              <label className='form-label'>
                <div className='form-label-img-container'>
                  <img
                    className='form-label-img'
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
                    alt='password'
                  />
                </div>
                <input
                  onChange={this.onChangePassword}
                  value={currentPassword}
                  type='password'
                  placeholder='Enter Password'
                  className='form-label-input'
                />
              </label>

              <button className='add-btn' type='submit'>
                Add
              </button>
            </form>

            <div className='password-manager-img-container'>
              <img
                className='password-manager-img-lg'
                src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
                alt='password manager'
              />

              <img
                className='password-manager-img-sm'
                src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
                alt='password manager'
              />
            </div>
          </div>

          <div className='your-password-container'>
            <div className='your-password-header'>
              <div className='your-password-heading-count-container'>
                <h1 className='your-password-heading'>Your Passwords</h1>
                <p className='your-password-count'>{numberOfPasswords}</p>
              </div>

              <label className='search-label'>
                <div className='search-label-img-container'>
                  <img
                    className='search-label-img'
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
                    alt='search'
                  />
                </div>
                <input
                  onChange={this.onSearchPassword}
                  value={searchValue}
                  className='search-input'
                  type='search'
                  placeholder='Search'
                />
              </label>
            </div>
            <hr />

            <label className='show-passwords-label'>
              <input
                onChange={this.changeShowPassword}
                checked={showPassword}
                className='show-passwords-label-checkbox'
                type='checkbox'
              />
              Show Passwords
            </label>

            {filteredListOfPasswords.length === 0 && (
              <div className='no-passwords-container'>
                <img
                  className='no-passwords-img'
                  src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
                  alt='no passwords'
                />
                <p className='no-passwords'> No Passwords</p>
              </div>
            )}
            <ul className='list-of-passwords'>
              {filteredListOfPasswords.map(eachItem => (
                <PasswordList
                  onDelete={this.deletePassword}
                  passwordDetails={{...eachItem, showPassword}}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

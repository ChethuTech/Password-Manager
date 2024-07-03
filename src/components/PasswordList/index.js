import './index.css'

const PasswordList = props => {
  const {passwordDetails, onDelete} = props
  const {id, website, name, password, profileColor, showPassword} =
    passwordDetails

  const deleteThePassword = () => {
    onDelete(id)
  }

  return (
    <li>
      <div className={`profile-pic-container ${profileColor}`}>
        <h1 className={`profile-pic `}> {website[0]}</h1>
      </div>

      <div className="text-container">
        <p className="website-text"> {website} </p>
        <p className="name-text"> {name} </p>

        {showPassword ? (
          <p className="password-text">{password}</p>
        ) : (
          <img
            className="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>

      <button
        data-testid="delete"
        onClick={deleteThePassword}
        className="delete-btn"
        type="button"
      >
        <img
          className="delete-btn-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordList

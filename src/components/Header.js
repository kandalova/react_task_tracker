import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} color={showAdd ? 'pink' : 'green'} text={showAdd ? ' Close' : 'Add'}/>
    </header>
    // <h1 style={headerStyle}>{title}</h1>
  )
}

Header.defaultProps = {
  title: 'My Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

//CSS in JS
// const headerStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
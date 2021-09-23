import { Component } from 'react'

const styles = {
  button : {
    backgroundColor : '#0a283e',
    color : '#eee',
    padding : '15px 20px',
    border: NamedNodeMap,
    borderRadius : '5px',
    cursor: 'pointer'
  }


}

class Button extends Component {
	render() {
		return ( <button style={styles.button} {...this.props} />)
	}
}

export default Button

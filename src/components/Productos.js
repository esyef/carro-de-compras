import { Component } from 'react'
import Producto from './Producto'

const styles = {
  productos : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'Space-between',
  }
}

class Productos extends Component {
	render() {
		const { productos, agregarAlCarro } = this.props
    console.log('Productos', this.props)

		return (
			<div style={styles.productos}>
				{productos.map((producto) => (
					<Producto
						agregarAlCarro={agregarAlCarro}
						key={producto.name}
						producto={producto}
					/>
				))}
			</div>
		)
	}
}

export default Productos

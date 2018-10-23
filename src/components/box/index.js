import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import { Container  } from './styled-components'
class Box extends Component {
	render () {
		return(
			<Container> 
				BOX
			</Container>
		)
	}
}

Box.propTypes = {}
export default Box;

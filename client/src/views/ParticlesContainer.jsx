import React from 'react'
import Particles from 'react-particles-js';
import particleConfig from '../config/particlesjs-config'

const ParticlesContainer = () => {

	const style = {
		width: '100%',
		height: '100%',
		background: '#cc1626'
	}

	return (
		<div style={style}>
			<Particles params={particleConfig} height="100vh" width="100vw" />
		</div>
	)
}

export default ParticlesContainer

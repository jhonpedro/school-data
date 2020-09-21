import styled from 'styled-components'

export const Container = styled.div`
	max-width: 49rem;
	font-size: 1.5rem;
	width: 100%;
	margin-bottom: 1.5rem;

	height: 5rem;
	position: relative;

	p {
		font-size: 1rem;
		color: var(--color-primary);
		position: absolute;
		z-index: 1;
		top: 0.3rem;
		left: 1.5rem;
		transition: 0.5s;
		border-top-left-radius: 0.9rem;
		border-top-right-radius: 0.9rem;
	}

	:focus-within {
		p {
			font-size: 1.3rem;
			background-color: var(--color-light);
			padding: 0.1rem 1rem;
			padding-bottom: 1.1rem;
			top: -1.3rem;
			left: 0;
		}
	}
`

export const Input = styled.input`
	width: 100%;
	padding: 1.4rem;
	border: none;
	border-radius: 0.9rem;
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
	background-color: var(--color-light);
`

import { Box } from '@/styles/box'
import { colors } from '@/styles/variables'
import styled from 'styled-components'

export const ModalDialog = styled.dialog`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${colors.white};
	border: 2px solid ${colors.primary500};
	border-radius: 0.5rem;
	overflow: hidden;

	&::backdrop {
		background-color: rgba(0, 0, 0, 0.35);
	}
`

export const Modal = styled.main`
  ${Box}
	display: flex;
	flex-direction: column;
	min-width: 30rem;
	background-color: var(--color-white);
	margin: 0;
	gap: 2rem;
`

export const ModalHeader = styled.header`
	border-radius: 0.5rem 0.5rem 0 0;
	background-color: var(--color-primary);

	& > h2 {
		color: var(--color-white);
	}
`

export const ModalSection = styled.section`
	white-space: pre-line;
	height: 100%;
`

export const ButtonsSection = styled(ModalSection)`
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
	height: auto;
	& > button {
		font-size: 1rem;
	}
`

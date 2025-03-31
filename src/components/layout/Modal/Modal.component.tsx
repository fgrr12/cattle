import { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/Button'
import { useAppStore } from '@/store/useAppStore'

import type { ModalProps } from './Modal.types'

import * as S from './Modal.styles'

export const Modal: FC<ModalProps> = ({ title, message, open, canCancel, onAccept, ...rest }) => {
	const { modalRef } = useModal(open)
	const { defaultModalData, setModalData } = useAppStore()

	const onCancel = () => {
		setModalData(defaultModalData)
	}

	return (
		<S.ModalDialog ref={modalRef} closedBy="any" {...rest}>
			<S.Modal>
				<S.ModalHeader>
					<h2>{title}</h2>
				</S.ModalHeader>
				<S.ModalSection>
					<p>{message}</p>
				</S.ModalSection>
				<S.ButtonsSection>
					<Button onClick={onAccept}>Aceptar</Button>
					{canCancel && (
						<form onSubmit={onCancel} method="dialog">
							<Button type="submit">Cancelar</Button>
						</form>
					)}
				</S.ButtonsSection>
			</S.Modal>
		</S.ModalDialog>
	)
}

const useModal = (open?: boolean) => {
	const modalRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (!modalRef.current) return
		open ? modalRef.current.showModal() : modalRef.current.close()
	}, [open])

	return { modalRef }
}

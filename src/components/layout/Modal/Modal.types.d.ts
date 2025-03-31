import type { DialogHTMLAttributes } from 'react'

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
	title: string
	message: string
	open: boolean
	canCancel: boolean
	onAccept?: () => void
}

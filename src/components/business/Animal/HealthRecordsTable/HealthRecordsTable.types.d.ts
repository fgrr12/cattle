import type dayjs from 'dayjs'

export interface HealthRecordsTableProps {
	healthRecords: HealthRecord[]
	user: boolean
}

declare interface HealthRecord {
	animalUuid: string
	reason: string
	notes: string
	type: string
	reviewedBy: string
	date: dayjs.Dayjs | string
	weight?: number
	temperature?: number
	medication?: string
	dosage?: string
	frequency?: string
	duration?: string
}

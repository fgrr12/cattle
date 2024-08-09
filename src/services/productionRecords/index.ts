import { firestore } from '@/config/environment'
import dayjs from 'dayjs'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import type { GetProductionRecordResponse, SetProductionRecordProps } from './types'

const collectionName = 'productionRecords'

export module ProductionRecordsService {
	// Gets

	export const getProductionRecords = async (
		animalUuid: string
	): Promise<GetProductionRecordResponse[]> => {
		const productionRecords = await getDocs(
			query(
				collection(firestore, collectionName),
				where('animalUuid', '==', animalUuid),
				where('status', '==', true)
			)
		)
		const response = productionRecords.docs.map((doc) => ({ ...doc.data(), uuid: doc.id }))

		return response as GetProductionRecordResponse[]
	}

	export const getProductionRecord = async (uuid: string): Promise<GetProductionRecordResponse> => {
		const document = doc(firestore, collectionName, uuid)
		const productionRecord = await getDoc(document)

		return productionRecord.data() as GetProductionRecordResponse
	}

	// Sets

	export const setProductionRecord = async (
		productionRecordData: SetProductionRecordProps,
		createdBy: string | null
	) => {
		productionRecordData.date = formatDate(productionRecordData.date)
		const createdAt = dayjs().toISOString()

		const document = doc(firestore, collectionName, productionRecordData.uuid)
		await setDoc(document, { ...productionRecordData, createdAt, createdBy }, { merge: true })
	}

	// Update

	export const updateProductionRecord = async (
		productionRecordData: SetProductionRecordProps,
		updatedBy: string | null
	) => {
		productionRecordData.date = formatDate(productionRecordData.date)
		const updateAt = dayjs().toISOString()

		const document = doc(firestore, collectionName, productionRecordData.uuid)
		await setDoc(document, { ...productionRecordData, updateAt, updatedBy }, { merge: true })
	}

	// Delete

	export const updateProductionRecordsStatus = async (uuid: string, status: boolean) => {
		const document = doc(firestore, collectionName, uuid)
		const updateAt = dayjs().toISOString()

		await setDoc(document, { status, updateAt }, { merge: true })
	}
}

const formatDate = (date: dayjs.Dayjs | string) => {
	return dayjs(date).toISOString()
}

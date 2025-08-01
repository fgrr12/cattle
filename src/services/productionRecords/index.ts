import dayjs from 'dayjs'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'

import { firestore } from '@/config/firebaseConfig'

import { formatDate } from '@/utils/formatDate'

const collectionName = 'productionRecords'

// Gets

const getProductionRecords = async (
	animalUuid: string,
	limit?: number
): Promise<ProductionRecord[]> => {
	const productionRecords = await getDocs(
		query(
			collection(firestore, collectionName),
			where('animalUuid', '==', animalUuid),
			where('status', '==', true)
		)
	)
	let response = productionRecords.docs.map((doc) => ({
		...doc.data(),
		uuid: doc.id,
	})) as ProductionRecord[]

	// Sort by date descending
	response = response.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)))

	// Apply limit if specified (for performance optimization)
	if (limit && limit > 0) {
		response = response.slice(0, limit)
	}

	return response as ProductionRecord[]
}

const getProductionRecord = async (uuid: string): Promise<ProductionRecord> => {
	const document = doc(firestore, collectionName, uuid)
	const productionRecord = await getDoc(document)

	return productionRecord.data() as ProductionRecord
}

// Sets

const setProductionRecord = async (productionRecordData: ProductionRecord, createdBy: string) => {
	productionRecordData.date = formatDate(productionRecordData.date)
	const createdAt = dayjs().toISOString()

	const document = doc(firestore, collectionName, productionRecordData.uuid)
	await setDoc(document, { ...productionRecordData, createdAt, createdBy }, { merge: true })
}

// Update

const updateProductionRecord = async (
	productionRecordData: ProductionRecord,
	updatedBy: string | null
) => {
	productionRecordData.date = formatDate(productionRecordData.date)
	const updateAt = dayjs().toISOString()

	const document = doc(firestore, collectionName, productionRecordData.uuid)
	await setDoc(document, { ...productionRecordData, updateAt, updatedBy }, { merge: true })
}

// Delete

const updateProductionRecordsStatus = async (uuid: string, status: boolean) => {
	const document = doc(firestore, collectionName, uuid)
	const updateAt = dayjs().toISOString()

	await setDoc(document, { status, updateAt }, { merge: true })
}

export const ProductionRecordsService = {
	getProductionRecords,
	getProductionRecord,
	setProductionRecord,
	updateProductionRecord,
	updateProductionRecordsStatus,
}

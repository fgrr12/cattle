import { AppRoutes } from '@/config/constants/routes'
import dayjs from 'dayjs'
import { useLocation, useNavigate } from 'react-router-dom'

import { ActionButton } from '@/components/ui/ActionButton'
import { Table } from '@/components/ui/Table'

import type { ProductionRecordsTableProps } from './ProductionRecordsTable.types'

import * as S from './ProductionRecordsTable.styles'

export const ProductionRecordsTable: FC<ProductionRecordsTableProps> = ({
	productionRecords,
	user,
}) => {
	const location = useLocation()
	const navigate = useNavigate()

	const handleAddHealthRecord = () => {
		const animalUuid = location.pathname.split('/').pop()
		const path = AppRoutes.ADD_PRODUCTION_RECORD.replace(':animalUuid', animalUuid || '')
		navigate(path)
	}
	return (
		<S.TableContainer>
			<S.CenterTitle>
				<S.Label>Production Records</S.Label>
				{user && (
					<ActionButton
						title="Add Production Record"
						icon="i-material-symbols-add-circle-outline"
						onClick={handleAddHealthRecord}
					/>
				)}
			</S.CenterTitle>
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell>Date</Table.HeadCell>
						<Table.HeadCell>Quantity</Table.HeadCell>
						<Table.HeadCell>Notes</Table.HeadCell>
						{user && <Table.HeadCell>Actions</Table.HeadCell>}
					</Table.Row>
				</Table.Head>
				<Table.Body>
					{productionRecords.map((productionRecord) => (
						<Table.Row key={crypto.randomUUID()}>
							<Table.Cell data-title="Date">
								{dayjs(productionRecord.date).format('MM/DD/YYYY')}
							</Table.Cell>
							<Table.Cell data-title="Type">{productionRecord.quantity}</Table.Cell>
							<Table.Cell data-title="Notes">{productionRecord.notes}</Table.Cell>
							{user && (
								<Table.Cell data-title="Actions">
									<ActionButton title="Edit" icon="i-material-symbols-edit-square-outline" />
									<ActionButton title="Delete" icon="i-material-symbols-delete-outline" />
								</Table.Cell>
							)}
						</Table.Row>
					))}
					{productionRecords.length === 0 && (
						<Table.Row>
							<Table.Cell colSpan={user ? 12 : 11}>No production records found</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</S.TableContainer>
	)
}

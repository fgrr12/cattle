import { AppRoutes } from '@/config/constants/routes'
import { useLocation, useNavigate } from 'react-router-dom'

import { ActionButton } from '@/components/ui/ActionButton'
import { Table } from '@/components/ui/Table'

import { RelatedAnimalsService } from '@/services/relatedAnimals'

import type { RelatedAnimalsTableProps } from './RelatedAnimalsTable.types'

import * as S from './RelatedAnimalsTable.styles'

export const RelatedAnimalsTable: FC<RelatedAnimalsTableProps> = ({
	title,
	animals,
	user,
	type,
	removeRelation,
}) => {
	const location = useLocation()
	const navigate = useNavigate()

	const handleAddRelatedAnimals = () => {
		const animalUuid = location.pathname.split('/').pop()
		const path = AppRoutes.ADD_RELATED_ANIMALS.replace(':animalUuid', animalUuid || '')
		navigate(path)
	}

	const handleViewRelatedAnimal = (animalUuid: string) => () => {
		const path = AppRoutes.ANIMAL.replace(':animalUuid', animalUuid)
		navigate(path)
	}

	const handleDeleteRelatedAnimal = (animalUuid: string) => async () => {
		await RelatedAnimalsService.deleteRelatedAnimal(animalUuid)
		animals = animals.filter((animal) => animal.uuid !== animalUuid)
		removeRelation(animalUuid)
	}

	return (
		<S.TableContainer>
			<S.CenterTitle>
				<S.Label>{title}</S.Label>
				{user && (
					<ActionButton
						title={title.startsWith('Parents') ? 'Add Parent' : 'Add Child'}
						icon="i-material-symbols-add-circle-outline"
						onClick={handleAddRelatedAnimals}
					/>
				)}
			</S.CenterTitle>
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell>Animal ID</Table.HeadCell>
						<Table.HeadCell>Breed</Table.HeadCell>
						<Table.HeadCell>Relation</Table.HeadCell>
						{user && <Table.HeadCell>Actions</Table.HeadCell>}
					</Table.Row>
				</Table.Head>
				<Table.Body>
					{animals?.map((animal) => (
						<Table.Row key={crypto.randomUUID()}>
							<Table.Cell data-title="Animal ID">{animal[type].animalId}</Table.Cell>
							<Table.Cell data-title="Breed">{animal[type].breed}</Table.Cell>
							<Table.Cell data-title="Relation">{animal[type].relation}</Table.Cell>
							{user && (
								<Table.Cell data-title="Actions">
									<ActionButton
										title="View"
										icon="i-material-symbols-visibility-outline"
										onClick={handleViewRelatedAnimal(animal[type].animalUuid)}
									/>
									<ActionButton
										title="Delete"
										icon="i-material-symbols-delete-outline"
										onClick={handleDeleteRelatedAnimal(animal.uuid)}
									/>
								</Table.Cell>
							)}
						</Table.Row>
					))}
					{animals.length === 0 && (
						<Table.Row>
							<Table.Cell colSpan={user ? 12 : 11}>No related animals found</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</S.TableContainer>
	)
}

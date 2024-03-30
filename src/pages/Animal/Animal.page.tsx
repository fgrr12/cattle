// Styles
import { Table } from '@/components/ui/Table'
import { AnimalMock } from '@/mocks/Animal/Animal.mock'
import { useEffect, useState } from 'react'
import * as S from './Animal.styles'
import type { IAnimal } from './Animal.types'

export const Animal: FC = () => {
	const [animal, setAnimal] = useState<IAnimal>(ANIMAL_INITIAL_STATE)

	useEffect(() => {
		setAnimal(AnimalMock)
	}, [])

	return (
		<S.Container>
			<S.ImageContainer>
				<S.Image src={animal.picture} alt={animal.species} />
			</S.ImageContainer>

			<S.InfoContainer>
				<S.Label>Animal ID</S.Label>
				<div>
					<div>
						<S.Label>Species</S.Label>
						<S.Value>{animal.species}</S.Value>
					</div>
					<div>
						<S.Label>Breed</S.Label>
						<S.Value>{animal.breed}</S.Value>
					</div>
					<div>
						<S.Label>Gender</S.Label>
						<S.Value>{animal.gender}</S.Value>
					</div>
					<div>
						<S.Label>Color</S.Label>
						<S.Value>{animal.color}</S.Value>
					</div>
					<div>
						<S.Label>Weight</S.Label>
						<S.Value>{animal.weight}</S.Value>
					</div>
					<div>
						<S.Label>Birth Date</S.Label>
						<S.Value>{animal.birthDate?.format('MM/DD/YYYY')}</S.Value>
					</div>
					<div>
						<S.Label>Purchase Date</S.Label>
						<S.Value>{animal.purchaseDate?.format('MM/DD/YYYY')}</S.Value>
					</div>
				</div>
			</S.InfoContainer>

			<S.RelatedAnimalsContainer>
				<S.Label>Related Animals</S.Label>
				{animal.relatedAnimal?.map((relatedAnimal) => (
					<div key={relatedAnimal.animalId}>
						<div>
							<S.Label>Species</S.Label>
							<S.Value>{relatedAnimal.species}</S.Value>
						</div>
						<div>
							<S.Label>Breed</S.Label>
							<S.Value>{relatedAnimal.breed}</S.Value>
						</div>
						<div>
							<S.Label>Gender</S.Label>
							<S.Value>{relatedAnimal.gender}</S.Value>
						</div>
						<div>
							<S.Label>Relation</S.Label>
							<S.Value>{relatedAnimal.relation}</S.Value>
						</div>
					</div>
				))}
			</S.RelatedAnimalsContainer>

			<S.TableContainer>
				<S.Label>Health Records</S.Label>
				<Table>
					<Table.Head>
						<Table.Row>
							<Table.HeadCell>Reason</Table.HeadCell>
							<Table.HeadCell>Notes</Table.HeadCell>
							<Table.HeadCell>Type</Table.HeadCell>
							<Table.HeadCell>Reviewed By</Table.HeadCell>
							<Table.HeadCell>Date</Table.HeadCell>
							<Table.HeadCell>Weight</Table.HeadCell>
							<Table.HeadCell>Temperature</Table.HeadCell>
							<Table.HeadCell>Heart Rate</Table.HeadCell>
							<Table.HeadCell>Blood Pressure</Table.HeadCell>
							<Table.HeadCell>Medication</Table.HeadCell>
							<Table.HeadCell>Dosage</Table.HeadCell>
							<Table.HeadCell>Frequency</Table.HeadCell>
							<Table.HeadCell>Duration</Table.HeadCell>
						</Table.Row>
					</Table.Head>
					<Table.Body>
						{animal.healthRecords?.map((healthRecord) => (
							<Table.Row key={healthRecord.animalId}>
								<Table.Cell>{healthRecord.reason}</Table.Cell>
								<Table.Cell>{healthRecord.notes}</Table.Cell>
								<Table.Cell>{healthRecord.type}</Table.Cell>
								<Table.Cell>{healthRecord.reviewedBy}</Table.Cell>
								<Table.Cell>{healthRecord.date.format('MM/DD/YYYY')}</Table.Cell>
								<Table.Cell>{healthRecord.weight}</Table.Cell>
								<Table.Cell>{healthRecord.temperature}</Table.Cell>
								<Table.Cell>{healthRecord.heartRate}</Table.Cell>
								<Table.Cell>{healthRecord.bloodPressure}</Table.Cell>
								<Table.Cell>{healthRecord.medication}</Table.Cell>
								<Table.Cell>{healthRecord.dosage}</Table.Cell>
								<Table.Cell>{healthRecord.frequency}</Table.Cell>
								<Table.Cell>{healthRecord.duration}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</S.TableContainer>
		</S.Container>
	)
}

const ANIMAL_INITIAL_STATE: IAnimal = {
	animalId: 0,
	species: '',
	breed: '',
	gender: '',
	color: '',
	weight: 0,
}

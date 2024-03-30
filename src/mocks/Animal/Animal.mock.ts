import type { AnimalInformation } from '@/pages/Animal/Animal.types'
import dayjs from 'dayjs'

export const animalMock: AnimalInformation = {
	animalId: 1,
	species: 'Cow',
	breed: 'Angus',
	gender: 'Male',
	color: 'Black',
	weight: 1500,
	picture: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
	relatedAnimals: {
		parents: [
			{
				animalId: 2,
				species: 'Cow',
				breed: 'Angus',
				gender: 'Male',
				relation: 'Father',
			},
			{
				animalId: 3,
				species: 'Cow',
				breed: 'Angus',
				gender: 'Female',
				relation: 'Mother',
			},
		],
		children: [
			{
				animalId: 4,
				species: 'Cow',
				breed: 'Angus',
				gender: 'Female',
				relation: 'Daughter',
			},
			{
				animalId: 5,
				species: 'Cow',
				breed: 'Angus',
				gender: 'Female',
				relation: 'Daughter',
			},
		],
	},
	healthRecords: [
		{
			animalId: 1,
			reason: 'Annual Checkup',
			notes: 'Everything looks good',
			type: 'Checkup',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Annual Vaccination',
			notes: 'Vaccinated for common diseases',
			type: 'Vaccination',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Surgery',
			notes: 'Spayed',
			type: 'Surgery',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Pregnant',
			notes: 'Due in 3 months',
			type: 'Pregnant',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Deworming',
			notes: 'Dewormed',
			type: 'Deworming',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Birth',
			notes: 'Gave birth to 2 healthy calves',
			type: 'Birth',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Annual Checkup',
			notes: 'Everything looks good',
			type: 'Checkup',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Annual Vaccination',
			notes: 'Vaccinated for common diseases',
			type: 'Vaccination',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Surgery',
			notes: 'Spayed',
			type: 'Surgery',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Pregnant',
			notes: 'Due in 3 months',
			type: 'Pregnant',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
		{
			animalId: 1,
			reason: 'Deworming',
			notes: 'Dewormed',
			type: 'Deworming',
			reviewedBy: 'Dr. Smith',
			date: dayjs(),
			weight: 1500,
			temperature: 101,
			medication: 'None',
			dosage: 'None',
			frequency: 'None',
			duration: 'None',
		},
	],
	birthDate: dayjs(),
	purchaseDate: dayjs(),
}

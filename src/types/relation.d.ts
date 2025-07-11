interface Relation {
	uuid: string
	parent: RelatedAnimal
	child: RelatedAnimal
	createdAt?: string
	updatedAt?: string
}

interface RelatedAnimal {
	animalUuid: string
	animalId: string
	breed: string
	relation: Relationship
}

interface RelatedAnimalList {
	parents: Relation[]
	children: Relation[]
}

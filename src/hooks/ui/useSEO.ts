import { useEffect } from 'react'

interface SEOOptions {
	title?: string
	description?: string
	keywords?: string
	image?: string
	noIndex?: boolean
	canonical?: string
}

export const useSEO = ({
	title,
	description,
	keywords,
	image,
	noIndex = false,
	canonical,
}: SEOOptions) => {
	useEffect(() => {
		const updateMetaTag = (selector: string, content: string) => {
			let element = document.querySelector(selector) as HTMLMetaElement
			if (element) {
				element.content = content
			} else {
				element = document.createElement('meta')
				if (selector.includes('property=')) {
					element.setAttribute('property', selector.match(/property="([^"]*)"/)![1])
				} else if (selector.includes('name=')) {
					element.setAttribute('name', selector.match(/name="([^"]*)"/)![1])
				}
				element.content = content
				document.head.appendChild(element)
			}
		}

		if (title) {
			document.title = title
			updateMetaTag('meta[name="title"]', title)
			updateMetaTag('meta[property="og:title"]', title)
			updateMetaTag('meta[property="twitter:title"]', title)
		}

		if (description) {
			updateMetaTag('meta[name="description"]', description)
			updateMetaTag('meta[property="og:description"]', description)
			updateMetaTag('meta[property="twitter:description"]', description)
		}

		if (keywords) {
			updateMetaTag('meta[name="keywords"]', keywords)
		}

		if (image) {
			updateMetaTag('meta[property="og:image"]', image)
			updateMetaTag('meta[property="twitter:image"]', image)
		}

		if (noIndex) {
			updateMetaTag('meta[name="robots"]', 'noindex, nofollow')
		}

		if (canonical) {
			let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
			if (canonicalLink) {
				canonicalLink.href = canonical
			} else {
				canonicalLink = document.createElement('link')
				canonicalLink.rel = 'canonical'
				canonicalLink.href = canonical
				document.head.appendChild(canonicalLink)
			}
		}

		return () => {}
	}, [title, description, keywords, image, noIndex, canonical])
}

/**
 * Specific hook for animal detail pages
 */
export const useAnimalSEO = (animal?: {
	animalId: string
	species?: string
	breed?: string
	gender?: string
}) => {
	const title = animal
		? `${animal.animalId} - ${animal.species || 'Animal'} Details | Cattle Farm Management`
		: 'Animal Details | Cattle Farm Management'

	const description = animal
		? `View detailed information for ${animal.animalId}, a ${animal.gender || ''} ${
				animal.breed || animal.species || 'animal'
			}. Access health records, breeding history, and production data.`
		: 'View detailed animal information including health records, breeding history, and production data.'

	const keywords = animal
		? `${animal.animalId}, ${animal.species}, ${animal.breed}, animal details, livestock information, cattle records`
		: 'animal details, livestock information, cattle records, animal management'

	useSEO({
		title,
		description,
		keywords,
		noIndex: false,
	})
}

/**
 * Specific hook for employee pages
 */
export const useEmployeeSEO = (employee?: { name: string; role: string }) => {
	const title = employee
		? `${employee.name} - ${employee.role} | Farm Employee Management`
		: 'Employee Management | Cattle Farm Management'

	const description = employee
		? `View information for ${employee.name}, ${employee.role} at the farm. Manage employee details and responsibilities.`
		: 'Manage farm employees, assign roles, and track staff responsibilities in your agricultural operation.'

	const keywords = employee
		? `${employee.name}, ${employee.role}, farm employee, staff management, agricultural worker`
		: 'employee management, farm staff, agricultural workers, workforce management'

	useSEO({
		title,
		description,
		keywords,
		noIndex: true,
	})
}

/**
 * Specific hook for task pages
 */
export const useTaskSEO = (task?: { title: string; description?: string; type?: string }) => {
	const pageTitle = task
		? `${task.title} - Farm Task | Task Management`
		: 'Task Management | Cattle Farm Management'

	const pageDescription = task
		? `Farm task: ${task.title}. ${task.description || 'Manage and track this agricultural activity.'}`
		: 'Schedule and manage farm tasks, track completion status, and organize daily agricultural activities.'

	const keywords = task
		? `${task.title}, ${task.type || 'farm task'}, agricultural activity, task management, farm scheduling`
		: 'task management, farm scheduling, agricultural tasks, farm activities, task tracking'

	useSEO({
		title: pageTitle,
		description: pageDescription,
		keywords,
		noIndex: false,
	})
}

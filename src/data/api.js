import photo from '../assets/photo.jpg'
import photoFlip from '../assets/photo-flip.jpg'

// fake api file to return the recipes database
export default function getRecipes() {
	return [{
		name : 'Chicken Thighs',
		id : 100,
		mainImage : photo,
		isHighlighted : false,
		isSelected : false,
		steps : [{
			order : 1,
			caption : 'Use scissors to cut the excess fat off the chicken',
			image : null
		},{
			order : 2,
			caption : 'Marinate chicken thighs in salad dressing',
			image : null
		},{
			order : 3,
			caption : 'Grill chicken on the grill for about 4-7 minutes each side'
		}]
	},{
		name : 'Hamburger Patty Salad',
		id : 101,
		mainImage : photoFlip,
		isHighlighted : false,
		isSelected : false,
		steps : [{
			order : 1,
			caption : 'Mix meat, seasoning and raw egg into a ziplock baggy',
			image : null
		},{
			order : 2,
			caption : 'Form into patties, and begin to grill for 8-13 minutes turning several times throughout',
			image : null
		},{
			order : 3,
			caption : 'Chop up tomatos, and mix with spinach into a bowl',
			image : null
		}]
	}]
}
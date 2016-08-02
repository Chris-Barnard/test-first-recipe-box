import photo from '../assets/photo-chicken.jpg'
import photoFlip from '../assets/photo-burger.jpg'
import photoDefault from '../assets/photo.jpg'
import chckenCut from '../assets/chicken-cut.jpg'
import chickenMarinate from '../assets/chicken-marinate.jpg'
import chickenGrill from '../assets/chicken-grill.jpg'

// fake api file to return the recipes database
export default function getRecipes() {
	return [{
		name : 'Chicken Thighs',
		id : 100,
		mainImage : photo,
		mainCaption : 'Oh boy! These will be amazing!',
		isHighlighted : false,
		isSelected : false,
		steps : [{
			id : 1,
			caption : 'Use scissors to cut the excess fat off the chicken',
			image : chckenCut,
			timeEstimate : 3,
		},{
			id : 2,
			caption : 'Marinate chicken thighs in salad dressing',
			image : chickenMarinate,
			timeEstimate : 30,
		},{
			id : 3,
			caption : 'Grill chicken on the grill for about 4-7 minutes each side',
			image : chickenGrill,
			timeEstimate : 6,
		}]
	},{
		name : 'Hamburger Patty Salad',
		id : 101,
		mainImage : photoFlip,
		mainCaption : 'Yummy in my tummy! These look great!',
		isHighlighted : false,
		isSelected : false,
		steps : [{
			id : 1,
			caption : 'Mix meat, seasoning and raw egg into a ziplock baggy',
			image : null,
			timeEstimate : 3,
		},{
			id : 2,
			caption : 'Form into patties, and begin to grill for 8-13 minutes turning several times throughout',
			image : null,
			timeEstimate : 3,
		},{
			id : 3,
			caption : 'Chop up tomatos, and mix with spinach into a bowl',
			image : null,
			timeEstimate : 3,
		}]
	},{
		name : 'Item #3',
		id : 102,
		mainImage : photoDefault,
		mainCaption : 'Lorem Ipsum - Make me happy :)',
		isHighlighted : false,
		isSelected : false,
		steps : [{
			id : 1,
			caption : 'Get reality show',
			image : null,
			timeEstimate : 3,
		},{
			id : 2,
			caption : 'Piss off and horrify most of the world',
			image : null,
			timeEstimate : 3,
		},{
			id : 3,
			caption : 'Become President',
			image : null,
			timeEstimate : 3,
		}]
	}]
}
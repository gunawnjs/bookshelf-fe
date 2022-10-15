const modal = document.querySelector('.modal-wrapper');
const modalBlur = document.querySelector('.modal-background');
modal.style.visibility = 'hidden';

const path = window.location.pathname;
const dir = path.substring(0, path.lastIndexOf('/'));
const currentDir = path.substring(path.lastIndexOf('/')+1);

// console.log(dir)
// console.log(currentDir);

const fab = document.getElementById('#fab');

if(currentDir != 'index.html'){
	fab.style.visibility = 'hidden';
} 

fab.addEventListener('click', () => {
	modal.style.visibility = 'visible';
});

const back = document.getElementById('#back');
back.style.cursor = 'pointer';
back.addEventListener('click', ()=>{
	modal.style.visibility = 'hidden';
});
modalBlur.addEventListener('click', ()=>{
	modal.style.visibility = 'hidden';
});

const sidebar = document.querySelector('.sidebar');
const burger = document.querySelector('.mdi-menu')
burger.style.cursor = 'pointer';
document.querySelector('.card-wrapper').style.marginLeft = '3rem';
burger.addEventListener('click', ()=>{
	if(sidebar.style.visibility == 'visible'){
		sidebar.style.visibility = 'hidden';
		document.querySelector('.card-wrapper').style.marginLeft = '0';
	} else {
		sidebar.style.visibility = 'visible';
		document.querySelector('.card-wrapper').style.marginLeft = '3rem';
	}
})

// card-list menu dropdown

// const menu = document.querySelector('.menu');
// const dropdown = document.querySelector('.dropdown');
// menu.style.cursor = 'pointer';
// dropdown.style.visibility = 'hidden';
// menu.addEventListener('click',()=>{
// 	if(dropdown.style.visibility == 'hidden'){
// 		dropdown.style.visibility = 'visible';
// 	} else {
// 		dropdown.style.visibility = 'hidden';
// 	}
// });

// const listMenu = document.querySelectorAll('div.dropdown button');
	// for(let i = 0; i < listMenu.length; i++){
	// 	listMenu[i].addEventListener('click',()=>{
	// 		if(dropdown.style.visibility == 'visible'){
	// 			dropdown.style.visibility = 'hidden';
	// 		} 
	// 	});
	// }

// end dropdow
const topMenu = document.querySelectorAll('.sidebar .group-top li');
const forAnchor = ['index.html', 'archive.html'];
const mdi = ['mdi mdi-home', 'mdi mdi-inbox'];

for(let i=0; i<topMenu.length; i++){
	const anchor = document.createElement('a');
	const span = document.createElement('span');
	anchor.setAttribute('href', ...forAnchor[i].split(' '));

	topMenu[i].append(anchor);
	anchor.append(span);

	span.classList.add(...mdi[i].split(' '));

}

const submitBtn = document.querySelector('.submit');
submitBtn.style.backgroundColor = 'inherit';
submitBtn.style.border = 'none';
submitBtn.style.cursor = 'pointer';
submitBtn.style.fontSize = 'inherit';

submitBtn.addEventListener('click', ()=>{
	modal.style.visibility = 'hidden';
});

// const card = document.querySelector('.card');
// for(let i=0; i<5; i++){
// 	console.log(i);
// }

// [
// 	{
// 	  id: string | number,
// 	  title: string,
// 	  author: string,
// 	  year: number,
// 	  isComplete: boolean,
// 	}
// ]

const books = [];
const RENDER_EVENT = 'render-books';
// console.log(books);

const generateId = () => {
	return +new Date();
}

const generateBook = (id, title, author, year, isComplete) => {
	return {
		id,
		title,
		author,
		year,
		isComplete
	}
}

const addBook = () => {
	const title = document.getElementById('title').value;
	const author =  document.getElementById('author').value;
	const year = document.getElementById('year').value;

	const id = generateId();
	const data = generateBook(id, title, author, year, false);
	books.push(data);
	
	document.dispatchEvent(new Event(RENDER_EVENT));
}

const createList = (books) => {
	const card = document.createElement('div');
	card.classList.add('card');
	card.setAttribute('id', `book-${books.id}`);
	
	const content = document.createElement('div');
	content.classList.add("content");

	const title = document.createElement('h3');
	const info = document.createElement('p');
	title.innerText = books.title;
	
	const infoBook = `by ${books.author} - published ${books.year}`
	info.innerText = infoBook;

	const menu = document.createElement('span');
	menu.classList.add('mdi', 'mdi-dots-vertical', 'menu');
	const dropdown = document.createElement('div');
	dropdown.classList.add('dropdown');

	menu.style.cursor = 'pointer';

	const dropdownWrapper = document.createElement('div');
	dropdownWrapper.classList.add('dropdown-wrapper');

	dropdownWrapper.append(dropdown);

	const buttons = 
	[
		`<button><span class="mdi mdi-check"></span>Done</button>
		<button><span class="mdi mdi-trash-can"></span>Delete</button>`
	];

	dropdownWrapper.style.visibility = 'hidden';
	menu.addEventListener('click',()=>{
		if(dropdownWrapper.style.visibility == 'hidden'){
			dropdownWrapper.style.visibility = 'visible';
		} else {
			dropdownWrapper.style.visibility = 'hidden';
		}
	});

	
	card.append(content, menu, dropdownWrapper);
	content.append(title, info);
	dropdown.innerHTML = buttons;

	return card;

}

document.addEventListener('DOMContentLoaded', ()=>{
	const submitForm = document.getElementById('form');
	submitForm.addEventListener('submit', (event)=>{
		event.preventDefault();
		addBook();
	});
	// console.log('DOM');
});

document.addEventListener(RENDER_EVENT, function(){

	const uncompleted = document.getElementById('bookList');
	uncompleted.innerHTML = '';

	for(const list of books){
		const data = createList(list);
		uncompleted.append(data);
		// console.log(data)
	}
})

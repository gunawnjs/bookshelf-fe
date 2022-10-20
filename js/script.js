const modal = document.querySelector('.modal-wrapper');
const modalBlur = document.querySelector('.modal-background');
modal.style.visibility = 'hidden';

const submitBtn = document.querySelector('.submit');
submitBtn.style.backgroundColor = 'inherit';
submitBtn.style.border = 'none';
submitBtn.style.cursor = 'pointer';
submitBtn.style.fontSize = 'inherit';

submitBtn.addEventListener('click', ()=>{
	modal.style.visibility = 'hidden';
});

const path = window.location.pathname;
const dir = path.substring(0, path.lastIndexOf('/'));
const currentDir = path.substring(path.lastIndexOf('/')+1);

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
burger.addEventListener('click', ()=>{
	if(sidebar.style.visibility == 'visible'){
		sidebar.style.visibility = 'hidden';
		document.querySelector('.card-wrapper').style.marginLeft = '0';
	} else {
		sidebar.style.visibility = 'visible';
		document.querySelector('.card-wrapper').style.marginLeft = '3rem';
	}
})

const magnify = document.querySelector('.mdi-magnify');
const header = document.querySelector('.header');
const searchWrapper = document.querySelector('.search-bar--wrapper');
const backHeader = document.querySelector('.mdi-arrow-left');
magnify.style.cursor = 'pointer';
backHeader.style.cursor = 'pointer';
magnify.addEventListener('click', ()=>{
	if(searchWrapper.style.display == 'none'){
		searchWrapper.style.removeProperty('display');
		header.style.display = 'none';
	}
});
backHeader.addEventListener('click', ()=>{
	if(header.style.display == 'none'){
		searchWrapper.style.display = 'none';
		header.style.removeProperty('display');
	}
})

const topMenu = document.querySelectorAll('.sidebar .group-top li');
const mdi = ['mdi mdi-home', 'mdi mdi-inbox'];
const ids = ['home', 'archive']

for(let i=0; i<topMenu.length; i++){
	const anchor = document.createElement('a');
	const span = document.createElement('span');

	topMenu[i].append(anchor);
	anchor.append(span);

	span.classList.add(...mdi[i].split(' '));
	span.setAttribute('id', ...ids[i].split(' '));
	
}


const home = document.getElementById('home');
const archive = document.getElementById('archive');
const sidebarContent = [home, archive]

for(const sidebar of sidebarContent){
	sidebar.style.cursor = 'pointer';
}

const mainHeader = document.createElement('h3');
mainHeader.classList.add('main-header');

archive.addEventListener('click', ()=>{
	if(completed.style.display == 'none'){
		mainHeader.innerText = 'Just finished';
		completed.prepend(mainHeader);
		completed.style.removeProperty('display');
		uncompleted.style.display = 'none';
		fab.style.display = 'none';
	}
});

home.addEventListener('click', ()=>{
	if(uncompleted.style.display == 'none'){
		mainHeader.innerText = 'Recently added';
		uncompleted.prepend(mainHeader);
		uncompleted.style.removeProperty('display');
		completed.style.display = 'none';
		fab.style.removeProperty('display');
	}
});





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

// const searchbar = document.getElementById('searchBar');
// searchbar.addEventListener('keyup', (e)=>{
// 	const searchValue = e.target.value;
// 	const filteredBooks = books.filter((book) => {
// 		return book.title.includes(searchValue);
// 	});
// 	displayBook(filteredBooks);
// });

// const displayBook = (books) => {
// 	const htmlString = books.map((books)=>{
// 		let cardList = [];
// 		// console.log(cardList);
		
// 		if(books.isComplete == false){
// 			cardList = `
// 				<div class="card-wrapper" id="uncompleted">
// 					<div class="card">
// 						<div class="content">
// 							<h3>${books.title}</h3>
// 							<p>by ${books.author} - published ${books.year}</p>
// 						</div>
// 						<span id="menu" class="mdi mdi-dots-vertical menu"></span>
// 						<div class="dropdown-wrapper" style="display:none;">
// 							<div class="dropdown">
// 								<button class="done-button"><span class="mdi mdi-check"></span>Done</button>
// 								<button class="delete-button"><span class="mdi mdi-trash-can"></span>Delete</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			`
// 			} else if(books.isComplete != false) {
// 			cardList = `
// 				<div class="card-wrapper" id="completed" style="display:none;">
// 					<div class="card">
// 						<div class="content">
// 							<h3>${books.title}</h3>
// 							<p>by ${books.author} - published ${books.year}</p>
// 						</div>
// 						<span id="menu" class="mdi mdi-dots-vertical menu"></span>
// 						<div class="dropdown-wrapper" style="display:none;">
// 							<div class="dropdown">
// 								<button class="undo-button"><span class="mdi mdi-undo"></span>Done</button>
// 								<button class="delete-button"><span class="mdi mdi-trash-can"></span>Delete</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			`
// 		}
// 		return cardList;
// 	}).join('');

// 	main.innerHTML = htmlString;
	
// 	// console.log(htmlString);
// }

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

const findBook = (bookId) => {
	for(const bookList of books){
		if(bookList.id === bookId){
			return bookList;
		}
	}
	return null;
}

const findBookIndex = (bookId) => {
	for(const index in books){
		if(books[index].id === bookId){
			return index;
		}
	}
	return -1;
}

const addBook = () => {
	const title = document.getElementById('title').value;
	const author =  document.getElementById('author').value;
	const year = document.getElementById('year').value;

	const id = generateId();
	const data = generateBook(id, title, author, year, false);
	books.push(data);
	
	document.dispatchEvent(new Event(RENDER_EVENT));
	saveData();
}

const createList = (books) => {
	const card = document.createElement('div');
	card.classList.add('card');
	card.setAttribute('id', `book-${books.id}`);
	
	const content = document.createElement('div');
	content.classList.add("content");

	const title = document.createElement('h3');
	const info = document.createElement('p');

	if(window.innerWidth < 500){
		let titleLimit = books.title;
		titleLimit = titleLimit.slice(0, 18) + "...";
		title.innerText = titleLimit;
	} else {
		title.innerText = books.title;
	}
	
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

	dropdownWrapper.style.display = 'none';
	menu.addEventListener('click', ()=>{
		if(dropdownWrapper.style.display == 'none'){
			dropdownWrapper.style.removeProperty('display');
		} else {
			dropdownWrapper.style.display = 'none';
		}
	});

	const deleteBtn = document.createElement('button');
	const spanTrash = document.createElement('span');
	deleteBtn.classList.add('delete-button');
	spanTrash.classList.add('mdi', 'mdi-trash-can');
	deleteBtn.append(spanTrash, 'Delete');

	deleteBtn.addEventListener('click', ()=>{
		deleteBook(books.id);
	});

	if(!books.isComplete){
		const doneBtn = document.createElement('button');
		const spanCheck = document.createElement('span');
		doneBtn.classList.add('done-button');
		spanCheck.classList.add('mdi', 'mdi-check');
		doneBtn.append(spanCheck, 'Done');

		doneBtn.addEventListener('click', ()=>{
			finishedReading(books.id);
		})

		const btnList = [doneBtn, deleteBtn];

		for(const buttons of btnList){
			buttons.addEventListener('click', ()=>{
				if(dropdownWrapper.style.visibility == 'hidden'){
					dropdownWrapper.style.visibility = 'visible';
				} else {
					dropdownWrapper.style.visibility = 'hidden';
				}
			});
		}

		dropdown.append(doneBtn, deleteBtn);
	} else {
		const undoBtn = document.createElement('button');
		const spanUndo = document.createElement('span');
		undoBtn.classList.add('undo-button');
		spanUndo.classList.add('mdi' ,'mdi-undo');
		undoBtn.append(spanUndo, 'Undo');

		undoBtn.addEventListener('click', ()=>{
			undoBook(books.id)
		});

		const btnList = [undoBtn, deleteBtn];

		for(const buttons of btnList){
			buttons.addEventListener('click', ()=>{
				if(dropdownWrapper.style.visibility == 'hidden'){
					dropdownWrapper.style.visibility = 'visible';
				} else {
					dropdownWrapper.style.visibility = 'hidden';
				}
			});
		}

		dropdown.append(undoBtn, deleteBtn);
	}

	

	card.append(content, menu, dropdownWrapper);
	content.append(title, info);

	return card;

}

const finishedReading = (bookId) => {
	const bookTarget = findBook(bookId);

	if (bookTarget == null) return;

	bookTarget.isComplete = true;
	document.dispatchEvent(new Event(RENDER_EVENT));
	saveData();
}

const deleteBook = (bookId) => {
	const bookTarget = findBookIndex(bookId);

	if(bookTarget === -1) return;

	books.splice(bookTarget, 1);
	document.dispatchEvent(new Event(RENDER_EVENT));
	saveData();
}

const undoBook = (bookId) => {
	const bookTarget = findBook(bookId);

	if(bookTarget == null) return;

	bookTarget.isComplete = false;
	document.dispatchEvent(new Event(RENDER_EVENT));
	saveData();
}

const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOK_APPS';

const isStorageExist = () =>{
	if(typeof (Storage) === undefined){
		alert('Browser kamu tidak mendukung local storage');
		return false;
	}
	return true;
}

const saveData = () => {
	if(isStorageExist()){
		const parsed = JSON.stringify(books);
		localStorage.setItem(STORAGE_KEY, parsed);
		document.dispatchEvent(new Event(SAVED_EVENT));
	}
}

const loadDataFromStorage = () => {
	const serializedData = localStorage.getItem(STORAGE_KEY);
	let data = JSON.parse(serializedData);

	if(data !== null){
		for(const book of data){
			books.push(book)
		}
	}

	document.dispatchEvent(new Event(RENDER_EVENT));
}

document.addEventListener(SAVED_EVENT, ()=>{
   console.log(localStorage.getItem(STORAGE_KEY));
})


document.addEventListener('DOMContentLoaded', ()=>{
	const submitForm = document.getElementById('form');
	submitForm.addEventListener('submit', (event)=>{
		event.preventDefault();
		addBook();
	});
	if(isStorageExist()){
		loadDataFromStorage();
	}
});
	
document.addEventListener(RENDER_EVENT, ()=>{

	const uncompleted = document.getElementById('uncompleted');
	uncompleted.innerHTML = '';

	const completed = document.getElementById('completed');
	completed.innerHTML = '';

	for(const list of books){
		const data = createList(list);
		if(list.isComplete == false){
			uncompleted.append(data);
		} else if (list.isComplete != false) {
			completed.append(data);
		} 
	}

});
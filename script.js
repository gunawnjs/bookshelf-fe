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

const menu = document.querySelector('.menu');
const dropdown = document.querySelector('.dropdown');
menu.style.cursor = 'pointer';
dropdown.style.visibility = 'hidden';
menu.addEventListener('click',()=>{
	if(dropdown.style.visibility == 'hidden'){
		dropdown.style.visibility = 'visible';
	} else {
		dropdown.style.visibility = 'hidden';
	}
});

const listMenu = document.querySelectorAll('div.dropdown button');
for(let i = 0; i < listMenu.length; i++){
	listMenu[i].addEventListener('click',()=>{
		if(dropdown.style.visibility == 'visible'){
			dropdown.style.visibility = 'hidden';
		} 
	});
}

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


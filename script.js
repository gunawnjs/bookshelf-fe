const modal = document.querySelector('.modal-wrapper');
const modalBlur = document.querySelector('.modal-background');
modal.style.visibility = 'hidden';

const fab = document.getElementById('#fab');
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

const topSideMenu = document.querySelectorAll('.sidebar .group-top li');
for(let i = 0; i < topSideMenu.length; i++){
	topSideMenu[i].style.cursor = 'pointer';
}

const botSideMenu = document.querySelector('.sidebar .group-bottom li');
botSideMenu.style.cursor = 'pointer';

const linkContent = ['index.html', 'archive.html'];
const link = document.createElement('a');


console.log(linkContent);
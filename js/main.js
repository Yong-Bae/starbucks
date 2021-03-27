

// 클래스가 search인 요소..css선택자 .search
const searchEl = document.querySelector('.search');

//.search 클래스중에 input를 찾아라..
const searchInputEl = searchEl.querySelector('input');

//search라는 클래스를 가지고 있는 div 요소 이벤트
searchEl.addEventListener('click', function() {

  //Logic
  searchInputEl.focus();

});

// 검색란에서 포커스를 할경우~~~
searchInputEl.addEventListener('focus', function() {

  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');

});

// 검색란에서 포커스가 해제될경우~~~
searchInputEl.addEventListener('blur', function() {

  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');

});

class libraryPage {
  constructor() {
    this.libraryList = document.querySelector('[data-page="library"]');
    this.pageUlr = 'https://image.tmdb.org/t/p/w500/';
  }
  drawFilmList(params) {
    this.libraryList.innerHTML = '';
    this.movieMasyv = JSON.parse(localStorage.getItem(params));
    
    if (this.movieMasyv == null || this.movieMasyv.length === 0){
      this.libraryList.innerHTML = "<p class='text-warning'>You do not have movies. Add them.</p>"
    } else {
      this.movieMasyv = this.movieMasyv.map(obj => this.createLibraryCardFunc(obj)).join('');
      this.libraryList.innerHTML = this.movieMasyv;}
  }
  createLibraryCardFunc(obj) {
    obj.backdrop_path? this.src = this.pageUlr+obj.backdrop_path : null;
    obj.poster_path? this.src = this.pageUlr+obj.poster_path : null;
  
    return `<li class="list-items" data-id="${obj.id}">
          <img src="${this.src}" alt="${obj.original_title}" class="list-items__img">
          <div class="layout">
              <p class="list-items__title">${obj.original_title}</p>
          </div>   
          </li>`;
  }
}

const filmLibraryPage = new libraryPage();
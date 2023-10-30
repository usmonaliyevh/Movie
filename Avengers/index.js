let moviesList = document.querySelector('.movies-list')
    allMovies = document.querySelector('.main-row h2 span')
    viewedMovies = document.querySelector('.main-row h3 span')
    addMovies = document.querySelector('.main-row h4 span')
    addMovieBtn = document.querySelector('.addMovie')
    movieName = document.querySelector('.movieName')
    movieViews = document.querySelector('.movieViews')

    let data = [
        {id: 1, title: 'Qasoskorlar: Intho', views: 670, like: false, viewed: false,},{id: 2, title: 'Qasoskorlar: Altron davri', views: 700, like: true, viewed: true,},{id: 3, title: 'Qasoskorlar: Tanosning qaytishi', views: 890, like: false, viewed: true,},
    ];

    let viewedMoviesCount = 0;

    data.forEach(item => {
        moviesList.innerHTML += `
        <div class="row movies-list-item ${item.viewed && 'viewed'}">
        <div class="col-6">
            <h5>${item.title}</h5>
        </div>
        <div class="col-3">
            <h5>${item.views}</h5>
        </div>
        <div class="col-3">
            <button class="btn btn-outline-secondary">Viewed</button>
            <button class="btn btn-outline-secondary">Delete</button>
            <button class="btn btn-outline-secondary">Like</button>
        </div>
    </div>
        `
    });
    allMovies.innerHTML = data.length;
    viewedMovies.innerHTML = viewedMoviesCount;
    addMovieBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (movieName.value.trim() != '' && movieViews.value.trim() != '') {
            data.push({id: data[data.length - 1].id + 1, title: movieName.value, views: movieViews.value, like: moviesList.innerHTML += `
            <div class="row movies-list-item ${item.viewed && 'viewed'}">
            <div class="col-6">
                <h5>${item.title}</h5>
            </div>
            <div class="col-3">
                <h5>${item.views}</h5>
            </div>
            <div class="col-3">
                <button class="btn btn-outline-secondary">Viewed</button>
                <button class="btn btn-outline-secondary">Delete</button>
                <button class="btn btn-outline-secondary">Like</button>
            </div>
        </div>
        
            `})
            alert.innerHTML = `
                <div class="alert alert-success mt-3" role="alert">
                Ma'lumot qo'shildi</div>

            `
        }
    })
   
    setTimeout(() => {
        alert.innerHTML = ''
    }, 2000)
    function viewdFunc(id) {
        let selectedMovie = document.querySelector(',movieOrder_' + id);
        selectedMovie,ClassList,toggle('viewed')
        data.filter(e => {
            if (e.id == id) {
              e.viewed = !0,viewed  
            }
        });
        let viewedMovies = data.filter(c => {
            return c
        })
        

    }
    console.log(viewedMovies);
    
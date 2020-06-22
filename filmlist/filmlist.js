const addbtn=document.getElementById('add-movie-btn');
const search=document.getElementById('search-btn');

movies=[];

const showmovie = (filter='') => {
    cleeninpputs();
    const listofmovie=document.getElementById('movie-list');
    if (movies.lenght===0){
        listofmovie.classList.remove('visible');
        return;
    }else{
        listofmovie.classList.add('visible')
    }
    const filtermovies=!filter ? movies:movies.filter(movie=>movie.info.title.includes(filter));
    listofmovie.innerHTML='';

    filtermovies.forEach((movie)=>{
        const moviel=document.createElement('li');
        let text=movie.info.title+ ' - ';
        for(const key in movie.info){
            if (key !== 'title') {
                text=text + `${key}: ${movie.info[key]}`;
            }
        }
        moviel.textContent=text;
        listofmovie.append(moviel);
    });
}
    const cleeninpputs = ()=>{
        const infoofmovie=document.getElementById('user-input');
        const userinputs=infoofmovie.querySelectorAll('input');
        for(const userinput of userinputs){
            userinput.value='';
        }

    }
const addbtnhandeler = () =>{
    const title=document.getElementById('title').value;
const exname=document.getElementById('extra-name').value;
const exvalue=document.getElementById('extra-value').value;

    if(title.trim()===''||exname.trim()===''||exvalue.trim()==='') return;
    const newmovie = {
        info:{
            title,
            [exname]:exvalue
        },
        id: Math.random()
    };
    movies.push(newmovie);
    showmovie();
}
const searchhandeler = () =>{
    const filteritem=document.getElementById('filter-title').value;
    showmovie(filteritem);

}

addbtn.addEventListener('click',addbtnhandeler);
search.addEventListener('click',searchhandeler);
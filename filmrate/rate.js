const addmoviemodal=document.getElementById('add-modal');
const addnewmovie=document.getElementById('header-btn');
const backdrop=document.getElementById('backdrop');
const canclebtn=addmoviemodal.querySelector('.canclbtn');
const addbtn=addmoviemodal.querySelector('.addbtn');
const entrytext=document.getElementById('entry-text');
const userinputs=addmoviemodal.querySelectorAll('input');
const listroot=document.getElementById('listofmovie');

const movies=[];

const updateui = () =>{
    if(movies.length===0) {
        entrytext.style.display='block';
    }else{
        entrytext.style.display= 'none';
    } 
}
const togglbackdrop = () =>{
    backdrop.classList.toggle('visible')
} 
const togglmovie = () => {
    addmoviemodal.classList.toggle('visible');
    togglbackdrop();
};
const backdropclickhandeler = () =>{
    togglmovie();
};
const canclehandeler = () =>{
    togglmovie();
};
const clearinputs= () =>{
    for(const userinput of userinputs){
        userinput.value='';
    }
}
const deletehandeler=(movieid)=>{
    let moviecounter=0;
    for(const movie of movies){
        if(movie.id===movieid){
            break;
        }
        moviecounter++;
    }
    movies.splice(moviecounter,1);
    listroot.children[moviecounter].remove();
    updateui();
}
const showmovielements=(id,titl,imgul,rateing)=>{
    const newmovieelements=document.createElement('li');
    newmovieelements.className='movie-element';
    newmovieelements.innerHTML=`
    <div class="movie-element-img">
        <img src="${imgul}" alt="${titl}">
    </div>
    <div class="movie-element-info">
        <h2>${titl}</h2>
        <p>${rateing}/5 stars </p>
    </div>
    `;
    listroot.append(newmovieelements);
    newmovieelements.addEventListener('click',deletehandeler.bind(null,id));
}

const addhandeler = () =>{
    const titlevalue=userinputs[0].value;
    const imurlvalue=userinputs[1].value;
    const rativalue=userinputs[2].value;

    if(titlevalue.trim()===''||
    imurlvalue.trim()===''||
    rativalue.trim()===''||
    +rativalue<1 ||
    +rativalue>5){
        alert('pleas enter valid values.');
        return;
    }
    const newmovie = {
        id:Math.random().toString(),
        title: titlevalue,
        image: imurlvalue,
        rating: rativalue
    };    
    movies.push(newmovie);
    console.log(movies);
    togglmovie();
    clearinputs();
    showmovielements(newmovie.id,newmovie.title ,newmovie.image ,newmovie.rating);
    updateui();
};
addnewmovie.addEventListener('click',togglmovie);
backdrop.addEventListener('click',backdropclickhandeler);
canclebtn.addEventListener('click',canclehandeler);
addbtn.addEventListener('click',addhandeler)
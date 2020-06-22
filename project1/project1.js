const progbar=document.getElementById('programmingbar');
const recbar=document.getElementById('recorderbar');
const phsbar=document.getElementById('Philosophybar');
const sptbar=document.getElementById('sportbar');
const langbar=document.getElementById('languagebar');
const bomobar=document.getElementById('bmbar');


const progchng=document.getElementById('progchange');
const recchng=document.getElementById('rechange');
const phschng=document.getElementById('phschange');
const sptchng=document.getElementById('spchange');
const langchng=document.getElementById('langchange');
const bomochng=document.getElementById('bmchange');


chngprogrambar();
chngrecorderbar();
chngPhilosophybar();
chngsportbar();
chnglanguagebar();
chngbookmoviebar();


function chngprogrambar(){
    progbar.value=prompt('What percentage of your programming plan done?','100');
}
function chngrecorderbar(){
    recbar.value=prompt('What percentage of your learning recorder plan done?','100');
}
function chngPhilosophybar(){
    phsbar.value=prompt('What percentage of your Philosophy plan done?','100');
}
function chngsportbar(){
    sptbar.value=prompt('What percentage of your sport plan done?','100');
}
function chnglanguagebar(){
    langbar.value=prompt('What percentage of your learning language plan done?','100');
}
function chngbookmoviebar(){
    bomobar.value=prompt('What percentage of your book/movie done?','100');
}


progchng.addEventListener('click',chngprogrambar);
recchng.addEventListener('click',chngrecorderbar);
phschng.addEventListener('click',chngPhilosophybar);
sptchng.addEventListener('click',chngsportbar);
langchng.addEventListener('click',chnglanguagebar);
bomochng.addEventListener('click',chngbookmoviebar);
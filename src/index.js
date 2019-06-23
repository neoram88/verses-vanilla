import appTemplate from './app.html';
import showAuthors from './app';

const ROOT_REF=document.getElementById('root');
ROOT_REF.innerHTML=appTemplate;
showAuthors();
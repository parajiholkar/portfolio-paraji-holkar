  
document.getElementById('Education').addEventListener('click',(e)=>{
    e.preventDefault();
    this.document.getElementById('About').getAttribute('hidden') = true ;
    this.document.getElementsByClassName('education').getAttribute('hidden') = false ;
});
document.getElementById('Project').addEventListener('click',(e)=>{
    e.preventDefault();
    this.document.getElementById('About').getAttribute('hidden') = true ;
    this.document.getElementsByClassName('project').getAttribute('hidden') = false ;
});
document.getElementById('Contact').addEventListener('click',(e)=>{
    e.preventDefault();
    this.document.getElementById('About').getAttribute('hidden') = true ;
    this.document.getElementsByClassName('contact').getAttribute('hidden') = false ;
});


function validateForm(){
    let x=document.forms["register"]["fname"].value;
    if(x==""){
        alert("First Name must be filled out");
        return false;
    }
}
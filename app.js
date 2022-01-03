const firstName = document.querySelector(".first-name-para");
const lastName = document.querySelector(".last-name-para");
const password = document.querySelector(".password-para");
const email = document.querySelector(".email-para");

function submitted(){
    let x = document.forms["form1"]["first-name"];
    let a = document.forms["form1"]["last-name"];
    let p = document.forms["form1"]["password"];
    let s = document.forms["form1"]["email-address"];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let y = x.value.trim().length;
    let b = a.value.trim().length;
    let q = p.value.trim().length;
    let t = s.value.trim().length;

    if(y===0 && b!=0 && q!=0 && t!=0){
        lastName.style.display = "none";
        password.style.display = "none";
        if(s.value.match(mailformat)){
            email.style.display = "none";
            s.classList.add("remove-click");
        }
        else {
            email.style.display = "block";
            s.classList.add("after-click");
        }
        a.classList.add("remove-click");
        p.classList.add("remove-click");
        firstName.style.display = "block";
        x.classList.add("after-click");
        return false;
    }
    else if(y!=0 && b===0 && q!=0 && t!=0){
        firstName.style.display = "none";
        password.style.display = "none";
        if(s.value.match(mailformat)){
            email.style.display = "none";
            s.classList.add("remove-click");
        }
        else {
            email.style.display = "block";
            s.classList.add("after-click");
        }
        x.classList.add("remove-click");
        p.classList.add("remove-click");
        lastName.style.display = "block";
        a.classList.add("after-click");
        return false;
    }
    else if(y!=0 && b!=0 && q===0 && t!=0){
        firstName.style.display = "none";
        lastName.style.display = "none";
        if(s.value.match(mailformat)){
            email.style.display = "none";
            s.classList.add("remove-click");
        }
        else {
            email.style.display = "block";
            s.classList.add("after-click");
        }
        x.classList.add("remove-click");
        a.classList.add("remove-click");
        password.style.display = "block";
        p.classList.add("after-click");
        return false;
    }
    else if(y!=0 && b!=0 && q!=0 && t===0){
        firstName.style.display = "none";
        lastName.style.display = "none";
        password.style.display = "none";
        x.classList.add("remove-click");
        a.classList.add("remove-click");
        p.classList.add("remove-click");
        email.style.display = "block";
        s.classList.add("after-click");
        return false;
    }
    else if(y===0 && b===0 && q!=0 && t!=0){
        password.style.display = "none";
        if(s.value.match(mailformat)){
            email.style.display = "none";
            s.classList.add("remove-click");
        }
        else {
            email.style.display = "block";
            s.classList.add("after-click");
        }
        firstName.style.display = "block";
        x.classList.add("after-click");
        lastName.style.display = "block";
        a.classList.add("after-click");
        p.classList.add("remove-click");
        return false;
    }
    else if(y===0 && b!=0 && q===0 && t!=0){
        lastName.style.display = "none";
        if(s.value.match(mailformat)){
            email.style.display = "none";
            s.classList.add("remove-click");
        }
        else {
            email.style.display = "block";
            s.classList.add("after-click");
        }
        firstName.style.display = "block";
        x.classList.add("after-click");
        password.style.display = "block";
        p.classList.add("after-click");
        a.classList.add("remove-click");
        return false;
    }
    else if(y===0 && b!=0 && q!=0 && t===0){
        firstName.style.display = "block";
        x.classList.add("after-click");
        email.style.display = "block";
        s.classList.add("after-click");
        lastName.style.display = "none";
        password.style.display = "none";
        a.classList.add("remove-click");
        p.classList.add("remove-click");
        return false;
    }
    else if(y!=0 && b===0 && q===0 && t!=0){
        password.style.display = "block";
        p.classList.add("after-click");
        lastName.style.display = "block";
        a.classList.add("after-click");
        firstName.style.display = "none";
        if(s.value.match(mailformat)){
            email.style.display = "none";
            s.classList.add("remove-click");
        }
        else {
            email.style.display = "block";
            s.classList.add("after-click");
        }
        x.classList.add("remove-click");
        return false;
    }
    else if(y!=0 && b===0 && q!=0 && t===0){
        firstName.style.display = "none";
        password.style.display = "none";
        lastName.style.display = "block";
        a.classList.add("after-click");
        email.style.display = "block";
        s.classList.add("after-click");
        x.classList.add("remove-click");
        p.classList.add("remove-click");
        return false;
    }
    else if(y!=0 && b!=0 && q===0 && t===0){
        firstName.style.display = "none";
        lastName.style.display = "none";
        email.style.display = "block";
        s.classList.add("after-click");
        password.style.display = "block";
        p.classList.add("after-click");
        x.classList.add("remove-click");
        a.classList.add("remove-click");
        return false;
    }
    else if(y===0 && b===0 && q===0 && t!=0){
        firstName.style.display = "block";
        x.classList.add("after-click");
        lastName.style.display = "block";
        a.classList.add("after-click");
        password.style.display = "block";
        p.classList.add("after-click");
        if(s.value.match(mailformat)){
            email.style.display = "none";
            s.classList.add("remove-click");
        }
        else {
            email.style.display = "block";
            s.classList.add("after-click");
        }
        return false;
    }
    else if(y===0 && b===0 && q!=0 && t===0){
        firstName.style.display = "block";
        x.classList.add("after-click");
        lastName.style.display = "block";
        a.classList.add("after-click");
        email.style.display = "block";
        s.classList.add("after-click");
        password.style.display = "none";
        p.classList.add("remove-click");
        return false;
    }
    else if(y===0 && b!=0 && q===0 && t===0){
        firstName.style.display = "block";
        x.classList.add("after-click");
        email.style.display = "block";
        s.classList.add("after-click");
        password.style.display = "block";
        p.classList.add("after-click");
        lastName.style.display = "none";
        a.classList.add("remove-click");
        return false;
    }
    else if(y!=0 && b===0 && q===0 && t===0){
        lastName.style.display = "block";
        a.classList.add("after-click");
        email.style.display = "block";
        s.classList.add("after-click");
        password.style.display = "block";
        p.classList.add("after-click");
        firstName.style.display = "none";
        x.classList.add("remove-click");
        return false;
    }
    else if(y===0 && b==0 && q===0 && t===0){
        firstName.style.display = "block";
        x.classList.add("after-click");
        lastName.style.display = "block";
        a.classList.add("after-click");
        email.style.display = "block";
        s.classList.add("after-click");
        password.style.display = "block";
        p.classList.add("after-click");
        return false;
    }
    else if(y!=0 && b!=0 && q!=0 && t!=0){
        lastName.style.display = "none";
        password.style.display = "none";
        firstName.style.display = "none";
        x.classList.add("remove-click");
        a.classList.add("remove-click");
        p.classList.add("remove-click");
        if(s.value.match(mailformat)){
            email.style.display = "none";
            s.classList.add("remove-click");
            return true;
        }
        else {
            email.style.display = "block";
            s.classList.add("after-click");
            return false
        }
    }
}
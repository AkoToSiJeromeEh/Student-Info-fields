//modal things
const modalContainer = document.getElementById('modal-id');
const buttonMoreInfo = document.getElementById('btn-more-info');
const buttonCloseModal = document.getElementById('close-modal')
//hard-coded data
const courseContainer = document.getElementById('course-cont');
const sectionContainer = document.getElementById('section-cont');
//input data
const inputFieldName = document.getElementById('input-first-name');
const inputFieldLName = document.getElementById('input-last-name'); 
const firstNameCont = document.getElementById('firstname-cont')
const LastNameCont = document.getElementById('lastname-cont')
const btnSubmit = document.getElementById('btn-submit');
const origTxt = btnSubmit.innerText;
let isShow = false;

//hard coded data
const CourseName = "Bsit";
const SectionName = "South-1";

// i use es6 arrow function
const disp = (event) => {

    // we use  event.preventDefault(); in order to not refresh the browse when we submit the input
    // since we are not saving it on the localStorage it is helpful to use. we usually use it on the forms.
    event.preventDefault();

    courseContainer.textContent = CourseName;
    sectionContainer.textContent = SectionName;
    

    firstNameCont.textContent = inputFieldName.value;
    LastNameCont.textContent = inputFieldLName.value;
};
btnSubmit.addEventListener('click' , disp)
//arrow i use es6 arrow function
const openModal = () => {
    
    //check if the isShow is true 
    // therefore if it is it i will add .open modal containing css properties visibility : visible
    if (isShow) {
        modalContainer.classList.add('open-modal');
    } else { 
        // else if isShow is false it wiill remove the class that has been add
        modalContainer.classList.remove('open-modal');
    }
   /*
    isShow = !isShow;
     make the isShow backNforth to its value.
     if isShow is click it gonna be true
     so the modal will become visible 
     and if the button X is clicked it will become false so the modal will ne close
   */
    isShow = !isShow;
};

// add a event listener on js its like on html Onlick
buttonMoreInfo.addEventListener('click', openModal);
buttonCloseModal.addEventListener('click' , openModal)

const ChangeBtnTxt = () => {

    // what we do in this are if the user click the button since the condition is truthy the 
    // button.innerText or Content will be Change and i use UseTimeout in order to back on its original Text on after 1s.
    if(btnSubmit.innerText == origTxt) {

        btnSubmit.innerText = 'Successfully Submitted';

       setTimeout(() => {

            btnSubmit.innerText = origTxt;

       },1000)
    }
    else {
        
        btnSubmit.innerText = origTxt;
        
    }


}
btnSubmit.addEventListener('click' , ChangeBtnTxt)
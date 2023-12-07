let menu_btn=document.querySelector('.menu-toggle-container');
let menu=document.querySelector('.menu-toggle');
let mobile_menubar=document.querySelector('.mobile-menubar-container');


// code for toggling the menu bar in mobile phone  
menu_btn.addEventListener("click", ()=>{
    menu.classList.toggle('menu-cross')

    if(mobile_menubar.style.display=='flex') {
        mobile_menubar.style.display='none';
    }
    else {
        mobile_menubar.style.display='flex';
    }
})

// code for flickty  

// initializing flickty  
var flkty = new Flickity('.banner-slider');
// // Trigger a resize event after Flickity has initialized
window.dispatchEvent(new Event('resize'));


// code for file drag and drop upload features  
const dropArea=document.getElementById('input-file-label');
const inputFile=document.getElementById('input-file');
const selectedFile=document.getElementById('selected-file');

inputFile.addEventListener('change', ()=>{
    if(inputFile.files[0])
    {
        let fileLink=URL.createObjectURL(inputFile.files[0]);
        selectedFile.innerHTML=inputFile.files[0].name;
    }
    else
    {
        selectedFile.innerHTML='';
    }
})

dropArea.addEventListener('dragover', (e)=>{
    e.preventDefault();
});

dropArea.addEventListener('drop', (e)=>{
    e.preventDefault();
    inputFile.files=e.dataTransfer.files;
    let fileLink=URL.createObjectURL(inputFile.files[0]);
    selectedFile.innerHTML=inputFile.files[0].name;
});

// function for falidating the drop idia form  

const validateDropIdea = (e)=>{
    let file=document.getElementById('input-file').files[0];
    let desc=document.getElementById('idea-desc').value;


    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.ms-powerpoint'];

    if(!file)
    {
        alert('Please Select a Files')
    }

    else if (!allowedTypes.includes(file.type)) 
    {
        alert('Invalid file type. Please upload a PDF, Word, or PowerPoint file.');
        fileInput.value = ''; // Clear the file input
    } 
    else if (file.size > 20 * 1024 * 1024) 
    { 
        // Check file size (in bytes)
        alert('File size exceeds the limit (20 MB). Please upload a smaller file.');
        fileInput.value = ''; // Clear the file input
    } 
    else if(desc=='')
    {
        // File is valid, you can proceed with further actions
        alert('Please Write Something');
    }
    else
    {
        alert('form submitted');
    }
}
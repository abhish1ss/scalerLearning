const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".model-container");

let addTaskFlag = true;
addBtn.addEventListener('click', () => {
    if(addTaskFlag) {
        addTaskFlag = false;
        modalCont.style.display = 'flex';
        return;
    }
    modalCont.style.display = 'none';
    addTaskFlag = true;
});
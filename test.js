isModelOpen = false;


const modelOpener = document.querySelector('#modelOpener')
const addButton = document.querySelector('#addButton');
const list = document.querySelector('#mylist')
const model = document.querySelector('#model')
const inputValue = document.querySelector('#inputValue')
model.style.display = 'none';


modelOpener.onclick = () =>{
  toggleModel();
};

addButton.onclick = ()=>{
 if (inputValue.value!=null || inputValue.value!='') {
    addItemToLIST();
 }
}
function addItemToLIST(value){

}
function toggleModel(){
  isModelOpen = !isModelOpen;
  if (isModelOpen) {
    model.style.display = "flex";
  }
  else{
    model.style.display = "none";
  }
  console.log('text');
}
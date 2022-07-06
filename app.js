const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const countBTn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
    if(price.value =="" || people.value =="" || tip.value ==""){
        error.textContent = "Uzupełnij wszystkie pola!"
        costInfo.style.display = 'none';
    } else {
        error.textContent = '';
        coutBill();
        
    }
};

const coutBill = () => {
    const newPrice = +price.value;
    const newPeople = +people.value;
    const newTip = +tip.value;

    const sum = (newPrice + newPrice * newTip)/newPeople;
    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
};

countBTn.addEventListener('click', showBill);
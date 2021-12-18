document.addEventListener('DOMContentLoaded', () => {
    const addHabit = document.getElementById('addHabit');

    let list = localStorage.getItem('list');

    if(!list){
        localStorage.setItem('list', []);
        list = [];
    }

    addHabit.addEventListener('click', () => {
        console.log('click');
    })

})
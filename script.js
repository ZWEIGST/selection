const input = document.querySelector('.input');

vowels = (event) => {
    const letters = 'аеёиоуыэюяaeiouy';
    const events = event.target;
    const searchValue = events.value;
    let searchValueSplit = searchValue.split('');
    let searchValueFilter = searchValueSplit.filter((item) => letters.includes(item.toLowerCase()));

    events.value = searchValueFilter.join('');
};

input.addEventListener('input', vowels);
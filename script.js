var inputs_select = document.querySelectorAll('.input__select--value')
var tab = [];
inputs_select.forEach(element => {
    element.addEventListener('click', function () {
        if (element.style.background == 'var(--primary)') {
            element.style.background = 'var(--Very-dark-cyan)';
            element.style.color = 'var(--White)';
        }
        else {
            element.style.background = 'var(--primary)';
            element.style.color = 'var(--Very-dark-cyan)';
        }
        
        tab.push(element);
        if (tab.length == 2 && tab[0] != tab[1]) {
            tab[0].style.background = 'var(--Very-dark-cyan)';
            tab[0].style.color = 'var(--White)';
            tab.shift();
        }
        else if (tab.length == 2  && tab[0] == tab[1]) {
            console.log('egaux');
            console.log(tab[0]);
            console.log(tab[1]);
            tab.shift();
        }
    })
});


var input__custom = document.querySelector('.input__field--custom');
console.log(input__custom);

input__custom.addEventListener('keyup', function () {
    inputs_select.forEach(element => {
                element.style.background = '';
                element.style.color = '';
    });
})



var nb_per = document.querySelector('.input__field--people');
console.log(nb_per);

nb_per.addEventListener('keyup', function () {
    var msg_err = document.querySelector('span');
    msg_err.style.display = 'none';
    nb_per.style.border = '1px solid transparent';
    console.log(nb_per.value);
    if (/^0*$/.test(nb_per.value)) {
        msg_err.style.display = 'block';
        nb_per.style.border = '1px solid rgb(248, 93, 93)';
    } 


})

// nb_per.addEventListener('change', function () {
//     var msg_err = document.querySelector('span');
//     msg_err.style.display = 'none';
// })

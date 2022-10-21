var price = document.querySelector('.input__field--bill');
var price_value = null;

var inputs_select = document.querySelectorAll('.input__select--value');
var input_select_value = null;

var input__custom = document.querySelector('.input__field--custom');
var input__custom_value = null;

var nb_per = document.querySelector('.input__field--people');
var nb_per_value = null;


tab_value = [price_value, input_select_value, nb_per_value];
var reset = document.querySelector('button');


var total_per ;

price.addEventListener('keyup', function () {
    price_value = document.querySelector('.input__field--bill').value;
})


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
            tab.shift();
        }
        
        var partsArray = element.value.split('%');
        input_select_value = partsArray[0];
    })
});



input__custom.addEventListener('keyup', function () {
    inputs_select.forEach(element => {
                element.style.background = 'var(--Very-dark-cyan)';
                element.style.color = 'var(--White)';
    });
    input_select_value = null;
    input__custom_value = input__custom.value;

})




nb_per.addEventListener('keyup', function () {
    var msg_err = document.querySelector('span');
    msg_err.style.display = 'none';
    nb_per.style.border = '1px solid transparent';
    if (/^0*$/.test(nb_per.value)) {
        msg_err.style.display = 'block';
        nb_per.style.border = '1px solid rgb(248, 93, 93)';
    } 

    nb_per_value = nb_per.value;
})



var total_per_tip;


function calcul() {
    var total = Math.abs((price_value / nb_per_value).toFixed(2));
    
    if (isNaN(total) || total == Infinity) {
        this.document.querySelector('.amount-per-person--total').innerHTML = `$0`;
    }
    else {
        this.document.querySelector('.amount-per-person--total').innerHTML = `$${total}`;
        total_per = total;
    }

    var input_c =  Math.abs((input__custom_value / 100).toFixed(2));
    
    if (!input_c == 0) {
        if (input_c >= 1) {
            input_c = 1;
        }
    
        total_per_tip =  Math.abs((total_per * input_c).toFixed(2));
    
        console.log(total_per_tip);
        if (isNaN(total_per_tip) || total_per_tip == Infinity ) {
            this.document.querySelector('.amount-per-person--tip').innerHTML = `$0`;
        }
        else {
            this.document.querySelector('.amount-per-person--tip').innerHTML = `$${total_per_tip}`;
        }
        }
        else {
            var input_s =  Math.abs((input_select_value / 100))
            total_per_tip =  Math.abs((total_per * input_s).toFixed(2));
            
            if (isNaN(total_per_tip) || total_per_tip == Infinity) {
                this.document.querySelector('.amount-per-person--tip').innerHTML = `$0`;
            }
            else {
                this.document.querySelector('.amount-per-person--tip').innerHTML = `$${total_per_tip}`;
            }
        }
}


reset.addEventListener('click', function () {
    inputs_select.forEach(element => {
        element.style.background = 'var(--Very-dark-cyan)';
        element.style.color = 'var(--White)';
    });

    document.querySelector('.input__field--bill').value = null;
    document.querySelector('.input__field--custom').value = null;
    document.querySelector('.input__field--people').value = null;

    price_value = null;
    input__custom_value = null;
    input_select_value = null;
    nb_per_value = null;
    total_per = null;
    input_s = null
})

window.addEventListener('keyup', calcul)
window.addEventListener('click', calcul)


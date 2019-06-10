function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}

function result() {
    var exp = document.form.textview.value
    if (exp) {
        document.form.textview.value = eval(exp)
    }
}

function clean() {
    document.form.textview.value = ""
}

function removeLast() {
    document.form.textview.value = document.form.textview.value.substring(0, document.form.textview.value.length - 1)
}

function factorial() {
    function fact(f) {
        return (f != 1) ? f * fact(f - 1) : 1;
    }

    document.form.textview.value = fact(+document.form.textview.value)
}

function fib() {
    function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

    document.form.textview.value = fib(+document.form.textview.value)
}

function Check() {
    var n = +document.form.textview.value;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            document.form.textview.value = "Непростое"
            break
        } else {
            document.form.textview.value = "Простое"
            break
        }
    }
}

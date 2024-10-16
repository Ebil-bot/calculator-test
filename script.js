const display = document.getElementById("display");

function tombol(input){
    display.value += input;
}

function hapusLayar(){
    display.value = ("");
}

function hasil() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error!";
    }
}

function hapus() {
    display.value = display.value.slice(0, -1);
}
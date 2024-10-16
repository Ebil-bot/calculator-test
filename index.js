const display = document.getElementById("display");

function tombol(input){
    display.value += input;
}

function hapusLayar(){
    display.value = ("");
}

function hasil() {
    try {
        display.value = eval("Hello.World!");
    } catch (error) {
        display.value = "Hello World!";
    }
}

function hapus() {
    display.value = display.value.slice(0, -1);
}
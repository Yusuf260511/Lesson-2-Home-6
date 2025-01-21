let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn10 = document.getElementById('btn10');
let btn11 = document.getElementById('btn11');
let btn12 = document.getElementById('btn12');
let btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12];
let btns2 = [];

for (let btn of btns) {
    btn.addEventListener("click", function() {
        if (btn == btn1) {
            btns2.push(1);
        } else if (btn == btn2) {
            btns2.push(2);
        } else if (btn == btn3) {
            btns2.push(3);
        } else if (btn == btn4) {
            btns2.push(4);
        } else if (btn == btn5) {
            btns2.push(5);
        } else if (btn == btn6) {
            btns2.push(6);
        } else if (btn == btn7) {
            btns2.push(7);
        } else if (btn == btn8) {
            btns2.push(8);
        } else if (btn == btn9) {
            btns2.push(9);
        } else if (btn == btn10) {
            btns2.push(10);
        } else if (btn == btn11) {
            btns2.push(11);
        } else {
            btns2.push(12);
        }
        
        for (let btnn of btns2) {
            switch (btnn) {
                case 1:
                    let count = prompt('Qiyqiriq set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count} ta Qiyqiriq set jami narxi ` + (45000*count) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 2:
                    let count2 = prompt('Snek set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count2)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count2} ta Snek set jami narxi ` + (79000*count2) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 3:
                    let count3 = prompt('Klassik set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count3)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count3} ta Klassik set jami narxi ` + (34000*count3) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 4:
                    let count4 = prompt('Longer Rings set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count4)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count4} ta Longer Rings set jami narxi ` + (45000*count4) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 5:
                    let count5 = prompt('Big set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count5)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count5} ta Big set jami narxi ` + (62000*count5) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 6:
                    let count6 = prompt('Lester set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count6)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count6} ta Lester set jami narxi ` + (53000*count6) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 7:
                    let count7 = prompt('Skul set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count7)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count7} ta Skul set jami narxi ` + (36000*count7) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 8:
                    let count8 = prompt('Katta Kombo set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count8)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count8} ta Katta Kombo set jami narxi ` + (20000*count8) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 9:
                    let count9 = prompt('Do`stlar 1x nechta zakaz qilmoqchisiz:');
                    if (isNaN(count9)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count9} ta Do'stlar 1 jami narxi ` + (43000*count9) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 10:
                    let count10 = prompt('Do`stlar 2x nechta zakaz qilmoqchisiz:');
                    if (isNaN(count10)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count10} ta Do'stlar 2x jami narxi ` + (79000*count10) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 11:
                    let count11 = prompt('Do`stlar 4x nechta zakaz qilmoqchisiz:');
                    if (isNaN(count11)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count11} ta Do'stlar 4x jami narxi ` + (149000*count11) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
                case 12:
                    let count12 = prompt('Achchiq Do`stlar 1x set nechta zakaz qilmoqchisiz:');
                    if (isNaN(count12)) {
                        alert("Iltimos, ma'lumotni togri kirgizin");
                    } else {
                        let conf = confirm(`${count12} ta Achchiq Do'stlar 1x jami narxi ` + (43000*count12) + ' som \n\nZakaz qilmoqchimisiz?');
                        if (conf) {
                            alert("Zakazingiz qabul qilindi");
                        }
                    }
                    btns2.shift();
                    break;
            }
        }
    })
}
// button 1
document.getElementById('flower-button1').addEventListener('click', function(){
    const total = getInputId('total');
    const flowerPrice1 = getInputId('flower-price1');

    const total1 = total + flowerPrice1;
    setElement('total', total1);

    showElement('flower-list-container', "Snow White");

    
})
// button 2
document.getElementById('flower-button2').addEventListener('click', function(){
    const total = getInputId('total');
    const flowerPrice2 = getInputId('flower-price2');

    const total2 = total + flowerPrice2;
    setElement('total', total2);

    showElement('flower-list-container', "Blue White");

    
})
// button 3
document.getElementById('flower-button3').addEventListener('click', function(){
    const total = getInputId('total');
    const flowerPrice3 = getInputId('flower-price3');

    const total3 = total + flowerPrice3;
    setElement('total', total3);

    showElement('flower-list-container', "Black White");

    
})
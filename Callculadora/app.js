/*
* @Author: Ruben
* @Date:   2022-06-01 20:57:54
* @Last Modified by:   Ruben
* @Last Modified time: 2022-06-03 16:12:06
*/

// let numeros = document.getElementById('numero-selec-7');
// document.getElementById('numero-selec-8').addEventListener('click', ()=>{
// 	document.getElementById('resultado').innerHTML = '8'
// })



let numero9 = document.getElementById('numero-selec-9');
let numero8 = document.getElementById('numero-selec-8');
let numero7 = document.getElementById('numero-selec-7');
let numero6 = document.getElementById('numero-selec-6');
let numero5 = document.getElementById('numero-selec-5');
let numero4 = document.getElementById('numero-selec-4');
let numero3 = document.getElementById('numero-selec-3');
let numero2 = document.getElementById('numero-selec-2');
let numero1 = document.getElementById('numero-selec-1');

// Operadores
let limpiar = document.getElementById('clear');
limpiar.addEventListener('click', ()=>{
	document.getElementById('resultado'). innerHTML = ''
})

numero9.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '9'
})
numero8.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '8'
})
numero7.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '7'
})
numero6.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '6'
})
numero5.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '5'
})
numero4.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '4'
})
numero3.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '3'
})
numero2.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '2'
})
numero1.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = '1'
})

numero9.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = [1]
})
numero8.addEventListener('click', ()=>{
	document.getElementById('resultado').innerHTML = [8] + numero9;
})


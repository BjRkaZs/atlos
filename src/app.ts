/*
* File: app.ts
* Author: Bajusz Réka
* Copyright: 2024, Bajusz Réka
* Group: Szoft V
* Date: 2024-05-30
* Github: https://github.com/BjRkaZs/atlosDoga
* Licenc: GNU GPL
*/
class Atlo{
    aSide?: HTMLInputElement|null
    bSide?: HTMLInputElement|null
    calcButton?: HTMLInputElement|null
    eredmeny?: HTMLInputElement|null
    constructor(){
        this.bindHTML()
        this.handleEvent()
    }
    bindHTML(){
        this.aSide = document.querySelector('#aSide')
        this.bSide = document.querySelector('#bSide')
        this.calcButton = document.querySelector('#calcButton')
        this.eredmeny = document.querySelector('#eredmeny')
    }
    handleEvent(){
        this.calcButton?.addEventListener('click', ()=>{
            this.startCalc()
        })
    }
    startCalc(){
        const aSide = Number(this.aSide?.value)
        const bSide = Number(this.bSide?.value)
        const eredmeny = this.calcEredmeny(aSide, bSide)
        this.eredmeny!.value = String(eredmeny)
    }
    calcEredmeny(aSide:number, bSide:number):number{
        return Math.sqrt(aSide^2+bSide^2)
}}
new Atlo()
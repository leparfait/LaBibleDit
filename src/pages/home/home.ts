import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Theme } from '../../model/home.model';
import { AmourPage } from '../amour/amour';
import { MariagePage } from '../mariage/mariage';
import { FoiPage } from '../foi/foi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  private theme:Array<Theme>=[
    {titre:"Amour",description:"Que tout ce que vous faites soit fait avec amour"},
    {titre:"Mariage",description:"C’est pourquoi l’homme quittera son père et sa mère"},
    {titre:"Divorce",description:""},
    {titre:"Paradis",description:""},
    {titre:"Foi",description:"Or la foi, c’est la ferme assurance des choses qu’on espère"}
];

 verset(t:Theme){
   if(t.titre == "Amour"){
     this.navCtrl.push(AmourPage);
   }else if(t.titre == "Mariage"){
     this.navCtrl.push(MariagePage);
   }else if(t.titre == "Foi"){
    this.navCtrl.push(FoiPage);
  }
 }
}

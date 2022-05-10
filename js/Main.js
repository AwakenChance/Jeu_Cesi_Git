// archer
const Tir_Normal = new Attack ('Tire Normal',10,1,0,0);
const Tir_Puissant = new Attack ('Tire Puissant',20,2,0,0);
const Tir_Miraculeux = new Attack ('Tire Normal',30,3,0,0);
const Camouflage = new Attack ('Camouflage',0,4,10,10);

const Archer = new Personnage('Archer','./img/Archer.png',20,Tir_Normal,Tir_Puissant,Tir_Miraculeux,Camouflage);

//Warior
const Coup_Epe = new Attack ('Coup Epe',15,1,0,0);
const Coup_Hache = new Attack ('Coup Hache',25,3,0,0);
const Coup_Bouclier = new Attack ('Coup Bouclier',10,3,0,10);
const Coup_de_Steack = new Attack ('Coup Steack',5,4,0,10);

const Warrior = new Personnage('Warrior','./img/Warrior.png',40,Coup_Epe,Coup_Hache,Coup_Bouclier,Coup_de_Steack); 

// Mage 
const Boule_de_lumiere = new Attack ('Boule de lumiere',15,1,0,0);
const Boule_de_feu = new Attack ('Boule de feu',25,3,0,0);
const Eclair = new Attack ('Eclair',30,5,0,0);
const Tornade = new Attack ('Tornade',15,2,0,0);

const Mage = new Personnage('Mage','./img/Mage.png',30,Boule_de_lumiere,Boule_de_feu,Eclair,Tornade); 




//const test = Mage.Attack1
//console.log(test)
//Function qui récupère le chemin de l'image
function GetImage(Perso) {
    if (Perso == 'Mage')
    {
    return Mage.Image
    }
     else if (Perso == 'Archer')
    {
        return Archer.Image
    } 
    else if (Perso == 'Warrior')
    {
        return Warrior.Image
    }
  }

  //Function qui recupere les pv du perso 
  function GetPV(Perso) {
    if (Perso == 'Mage')
    {
    return Mage.PV
    }
     else if (Perso == 'Archer')
    {
        return Archer.PV
    } 
    else if (Perso == 'Warrior')
    {
        return Warrior.PV
    }
  }
  
  //function qui recupere la premiere attack du perso


  function GetAttack1(Perso) {
    if (Perso == 'Mage')
    {
    return Mage.Attack1.Nom
    }
     else if (Perso == 'Archer')
    {
        return Archer.Attack1.Nom
    } 
    else if (Perso == 'Warrior')
    {
        //document.getElementById("atck").value =Coup_Epe.Nom;
        return Warrior.Attack1.Nom;
        
    }
  }

  //function qui recupere la deuxieme attack du perso
  function GetAttack2(Perso) {
    if (Perso == 'Mage')
    {
    return Mage.Attack2.Nom
    }
     else if (Perso == 'Archer')
    {
        return Archer.Attack2.Nom
    } 
    else if (Perso == 'Warrior')
    {
        return Warrior.Attack2.Nom
    }
  }

  //function qui recupere la troisieme attack du perso
  function GetAttack3(Perso) {
    if (Perso == 'Mage')
    {
    return Mage.Attack3.Nom
    }
     else if (Perso == 'Archer')
    {
        return Archer.Attack3.Nom
    } 
    else if (Perso == 'Warrior')
    {
        return Warrior.Attack3.Nom
    }
  }

  //function qui recupere la quatrieme attack du perso
  function GetAttack4(Perso) {
    if (Perso == 'Mage')
    {
    return Mage.Attack4.Nom
    }
     else if (Perso == 'Archer')
    {
        return Archer.Attack4.Nom
    } 
    else if (Perso == 'Warrior')
    {
        return Warrior.Attack4.Nom
    }
  }

  function Attaquer(Cible,Attaque){
      Cible.PV = Cible.PV - Attaque.Puissance
      
  }

  function IsDead(Perso){
      if (Perso.PV <= 0)
      {
        return true
      }
      else return false
  }
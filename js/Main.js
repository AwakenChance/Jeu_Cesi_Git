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


//Function qui récupère le chemin de l'image
function GetImage(Perso,ID) {
    if (Perso == 'Mage')
    {
        document.getElementById(ID).innerHTML = Mage.Image
    }
     else if (Perso == 'Archer')
    {
        document.getElementById(ID).innerHTML = Archer.Image
    } 
    else if (Perso == 'Warrior')
    {
        rdocument.getElementById(ID).innerHTML = Warrior.Image
    }
  }

  //Function qui recupere les pv du perso 
  function GetPV(Perso,ID) {
    if (Perso == 'Mage')
    {
        document.getElementById(ID).innerHTML =  Mage.PV
    }
     else if (Perso == 'Archer')
    {
        document.getElementById(ID).innerHTML =  Archer.PV
    } 
    else if (Perso == 'Warrior')
    {
        document.getElementById(ID).innerHTML =  Warrior.PV
    }
  }
  
  //function qui recupere la premiere attack du perso


  function GetAttack(Perso,ID1,ID2,ID3,ID4) {
    if (Perso == 'Mage')
    {
        document.getElementById(ID1).innerHTML =Mage.Attack1.Nom;
        document.getElementById(ID2).innerHTML =Mage.Attack2.Nom;
        document.getElementById(ID3).innerHTML =Mage.Attack3.Nom;
        document.getElementById(ID4).innerHTML =Mage.Attack4.Nom;
    }
     else if (Perso == 'Archer')
    {
        document.getElementById(ID1).innerHTML =Archer.Attack1.Nom;
        document.getElementById(ID2).innerHTML =Archer.Attack2.Nom;
        document.getElementById(ID3).innerHTML =Archer.Attack3.Nom;
        document.getElementById(ID4).innerHTML =Archer.Attack4.Nom;
    } 
    else if (Perso == 'Warrior')
    {
        document.getElementById(ID1).innerHTML =Warrior.Attack1.Nom;
        document.getElementById(ID2).innerHTML =Warrior.Attack2.Nom;
        document.getElementById(ID3).innerHTML =Warrior.Attack3.Nom;
        document.getElementById(ID4).innerHTML =Warrior.Attack4.Nom;
        
    }
  }


  function Attaquer(Cible_txt,Perso,Attaque){
    if (Cible_txt == 'Mage')
    {
        Cible = Mage
    } else 
    if (Cible_txt == 'Warrior')
    {
        Cible = Warrior
    } else 
    if (Cible_txt == 'Archer')
    {
        Cible = Archer
    } 

    if (Perso == 'Mage')
    {
      if (Mage.Attack1.Nom == 'attack1')
      {
        Cible.PV = Cible.PV - Mage.Attack1.Puissance
      }
      else if (Mage.Attack2.Nom == 'attack2')
      {
        Cible.PV = Cible.PV - Mage.Attack2.Puissance
      }
      else if (Mage.Attack3.Nom == 'attack3')
      {
        Cible.PV = Cible.PV - Mage.Attack3.Puissance
      }
      else if (Mage.Attack4.Nom == 'attack4')
      {
        Cible.PV = Cible.PV - Mage.Attack4.Puissance
      }
    }

    if (Perso == 'Warrior')
    {
      if (Warrior.Attack1.Nom == 'attack1')
      {
        Cible.PV = Cible.PV - Warrior.Attack1.Puissance
      }
      else if (Warrior.Attack2.Nom == 'attack2')
      {
        Cible.PV = Cible.PV - Warrior.Attack2.Puissance
      }
      else if (Warrior.Attack3.Nom == 'attack3')
      {
        Cible.PV = Cible.PV - Warrior.Attack3.Puissance
      }
      else if (Warrior.Attack4.Nom == 'attack4')
      {
        Cible.PV = Cible.PV - Warrior.Attack4.Puissance
      }
    }

    if (Perso == 'Archer')
    {
      if (Archer.Attack1.Nom == 'attack1')
      {
        Cible.PV = Cible.PV - Archer.Attack1.Puissance
      }
      else if (Archer.Attack2.Nom == 'attack2')
      {
        Cible.PV = Cible.PV - Archer.Attack2.Puissance
      }
      else if (Archer.Attack3.Nom == 'attack3')
      {
        Cible.PV = Cible.PV - Archer.Attack3.Puissance
      }
      else if (Archer.Attack4.Nom == 'attack4')
      {
        Cible.PV = Cible.PV - Archer.Attack4.Puissance
      }
    }
  }

  function IsDead(Perso){
      if (Perso.PV <= 0)
      {
        return true
      }
      else return false
  }
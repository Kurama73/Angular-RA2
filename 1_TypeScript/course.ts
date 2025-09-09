import { voiture } from "./voiture";

export class course {

    constructor(private nom : string, private tabVoiture : voiture[]) {
        this.nom = nom;
        this.tabVoiture = tabVoiture;
    }

    getNom() : string {
        return this.nom;
    }
    setNom(nom : string) : void {
        this.nom = nom;
    }

    addVoiture(v : voiture) : void {
        this.tabVoiture.push(v);
    }

    toString() : string {
        return `Course ${this.nom} avec les voitures : ${this.tabVoiture.map(v => v.toString()).join(", ")}`;
    }
    
}
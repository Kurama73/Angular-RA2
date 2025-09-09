export class voiture {
    constructor(private couleur : string) {
        this.couleur = couleur;
    }
    getCouleur() : string {
        return this.couleur;
    }
    setCouleur(couleur : string) : void {
        this.couleur = couleur;
    }

    toString() : string {
        return `Voiture ${this.couleur}`;
    }
}
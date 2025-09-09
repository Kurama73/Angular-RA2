"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.course = void 0;
class course {
    nom;
    tabVoiture;
    constructor(nom, tabVoiture) {
        this.nom = nom;
        this.tabVoiture = tabVoiture;
        this.nom = nom;
        this.tabVoiture = tabVoiture;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    addVoiture(v) {
        this.tabVoiture.push(v);
    }
    toString() {
        return `Course ${this.nom} avec les voitures : ${this.tabVoiture.map(v => v.toString()).join(", ")}`;
    }
}
exports.course = course;
//# sourceMappingURL=course.js.map
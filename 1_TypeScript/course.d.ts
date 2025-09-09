import { voiture } from "./voiture";
export declare class course {
    private nom;
    private tabVoiture;
    constructor(nom: string, tabVoiture: voiture[]);
    getNom(): string;
    setNom(nom: string): void;
    addVoiture(v: voiture): void;
    toString(): string;
}
//# sourceMappingURL=course.d.ts.map
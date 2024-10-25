export class Vehiculo {
    protected patente: string;
    protected tipo: string;

    constructor(patente: string, tipo: string) {
        this.patente = patente;
        this.tipo = tipo;
    }

    // Get
    public getPatente(): string {
        return this.patente;
    }

     // Set
     public setPatente(patente: string): void {
        if (!patente || patente.trim() === "") {
            throw new Error("La patente no puede estar vacía.");
        }
        this.patente = patente;
    }

    public getTipo(): string {
        return this.tipo;
    }


    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public mostrarInfo(): string {
        return `Patente: ${this.patente}, Tipo: ${this.tipo}`;
    }
}

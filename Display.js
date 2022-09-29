class Display {

    constructor(displayValor) {
        this.displayValor = displayValor;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
    }

    borrar() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {

        if (tipo !== 'igual') {
            this.valorAnterior = this.valorActual;
            this.valorActual = '';
            this.imprimirValores();
            this.tipoOperacion = tipo;
        }

        else if (tipo === 'igual') {
            this.calcular();
            this.imprimirValores();
            this.valorAnterior = '';
            this.valorActual = '';
        }

    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return

        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValor.textContent = this.valorActual;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorAnterior) || isNaN(valorActual)) return

        else if (this.tipoOperacion === 'sumar') {
            this.valorActual = this.calculador.sumar(valorAnterior, valorActual);
        }

        else if (this.tipoOperacion === 'restar') {
            this.valorActual = this.calculador.restar(valorAnterior, valorActual);
        }

        else if (this.tipoOperacion === 'dividir') {
            this.valorActual = this.calculador.dividir(valorAnterior, valorActual);
        }

        else if (this.tipoOperacion === 'multiplicar') {
            this.valorActual = this.calculador.multiplicar(valorAnterior, valorActual);
        }

    }

}
document.getElementById('btnPoblacion').addEventListener('click', calcularPoblacion);
document.getElementById('btnSeguridad').addEventListener('click', calcularSeguridad);
document.getElementById('btnAhorro').addEventListener('click', calcularAhorro);

function calcularPoblacion() {
    const valorInput = document.getElementById('mesesPoblacion').value;
    const meses = parseInt(valorInput);

    if (isNaN(meses) || meses < 1) {
        document.getElementById('resPoblacion').innerHTML = '<span class="vacio">Dato inválido ❌</span>';
        return;
    }

    let actual = 1;
    let anterior = 0;
    let temporal = 0;

    for (let i = 1; i <= meses; i++) {
        temporal = actual + anterior;
        anterior = actual;
        actual = temporal;
    }

    document.getElementById('resPoblacion').innerHTML = `
        <span class="dato-salida">✨ Población: ${anterior.toLocaleString()} parejas ✨</span>
    `;
}

function calcularSeguridad() {
    const valorInput = document.getElementById('numeroPrimo').value;
    const num = parseInt(valorInput);

    if (isNaN(num) || num < 1) {
        document.getElementById('resSeguridad').innerHTML = '<span class="vacio">Dato inválido ❌</span>';
        return;
    }

    if (num === 1) {
        document.getElementById('resSeguridad').innerHTML = `
            <span class="dato-salida" style="color: #fc8181;">⚠️ El número 1 no es primo criptográfico.</span>
        `;
        return;
    }

    let esPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        document.getElementById('resSeguridad').innerHTML = `
            <span class="dato-salida" style="color: #68d391;">🔒 Clave  Seguro: ¡${num} es número primo! 👍👍</span>
        `;
    } else {
        document.getElementById('resSeguridad').innerHTML = `
            <span class="dato-salida" style="color: #fc8181;">🔓 Clave Insegura: ${num} no es primo! 🥀🥀.</span>
        `;
    }
}

function calcularAhorro() {
    const valorInput = document.getElementById('mesesAhorro').value;
    const meses = parseInt(valorInput);

    if (isNaN(meses) || meses < 1) {
        document.getElementById('resAhorro').innerHTML = '<span class="vacio">Dato inválido ❌</span>';
        return;
    }

    let actual = 1;
    let anterior = 0;
    let temporal = 0;
    let sumaAcumulada = 0;

    for (let i = 1; i <= meses; i++) {
        if (i === 1) {
            sumaAcumulada += actual;
        } else {
            temporal = actual + anterior;
            anterior = actual;
            actual = temporal;
            sumaAcumulada += anterior;
        }
    }

    document.getElementById('resAhorro').innerHTML = `
        <span class="dato-salida">💰 Ahorro total: Bs. ${sumaAcumulada.toLocaleString()} 💰</span>
    `;
}
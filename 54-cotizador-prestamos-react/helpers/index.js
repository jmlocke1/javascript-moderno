const formatearDinero = (valor, currentCurrency = 'EUR') => {
    let language;
    if(currentCurrency === 'EUR') language = 'es-ES';
    if(currentCurrency === 'USD') language = 'en-US';
    const formatter = new Intl.NumberFormat(language, {
        style: 'currency',
        currency: currentCurrency
    });
    return formatter.format(valor);
}

export {
    formatearDinero
}
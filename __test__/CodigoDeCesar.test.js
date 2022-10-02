const codigoDeCesar = require('../src/scripts/CodigoDeCesar');

test('Teste Exemplo', () => {    
    expect(
        codigoDeCesar(3, "A ligeira raposa marrom saltou sobre o cachorro cansado")
        ).toEqual("D oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr");
});

test('teste aleatorio 1', () => {
    expect(
        codigoDeCesar(4, "O sol e a lua")
        ).toEqual("S wsp i e pye");
});

test('teste aleatorio 2', () => {
    expect(
        codigoDeCesar(2, "Papai Noel entrega presentes")
        ).toEqual("Rcrck Pqgn gpvtgic rtgugpvgu");
});
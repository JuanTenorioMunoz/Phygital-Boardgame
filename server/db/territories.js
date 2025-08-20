const territoriesBenefits = [
  {
    id: "b1",
    title: "Logística+",
    credits: 800,
    desc: "1 vez por turno, mueve 1 de tus trabajadores 2 territorios hexagonales (en línea)."
  },
  {
    id: "b2",
    title: "Sobrecarga",
    credits: 800,
    desc: "1 vez por ciclo puedes pagar 200 Cr para comprar 1 voto extra en una votación de decreto (no acumulable)."
  },
  {
    id: "b3",
    title: "Saque minero",
    credits: 600,
    desc: "$100 Cr extra por este territorio."
  },
  {
    id: "b4",
    title: "Fortificación",
    credits: 600,
    desc: "Si estás solo y un rival entra, debe pagar 100 Cr a tu cuenta al entrar aquí."
  },
  {
    id: "b5",
    title: "Aduana",
    credits: 600,
    desc: "Cuando el último rival sale, te paga 100 Cr."
  },
  {
    id: "b6",
    title: "Semillas",
    credits: 500,
    desc: "Al final de tu turno, si aún lo controlas solo, roba 1 decreto."
  },
  {
    id: "b7",
    title: "Refinería",
    credits: 500,
    desc: "Añade +100 Cr si controlas cualquier otro territorio de valor 800–600."
  },
  {
    id: "b8",
    title: "Trueque local",
    credits: 500,
    desc: "+100 Cr por cada transacción voluntaria que realices este ciclo (máx. +2)."
  },
  {
    id: "b9",
    title: "Señal",
    credits: 500,
    desc: "Cuando apruebas un decreto que propusiste, +200 Cr."
  },
  {
    id: "b10",
    title: "Fortificación",
    credits: 500,
    desc: "Si estás solo y un rival entra debe pagar 100 Cr a tu cuenta al entrar aquí."
  },
  {
    id: "b11",
    title: "Asentamiento",
    credits: 400,
    desc: "-100 Cr de descuento al comprar trabajadores (si no hay otro decreto vigente cuestan 600-100=$500 al propietario)."
  },
  {
    id: "b12",
    title: "Radar",
    credits: 400,
    desc: "Puedes mirar el valor secreto de 1 territorio adyacente por ciclo."
  },
  {
    id: "b13",
    title: "Radar mejorado",
    credits: 400,
    desc: "Puedes mirar el valor secreto de 1 territorio (cualquiera) por ciclo."
  },
  {
    id: "b14",
    title: "Reforestación",
    credits: 400,
    desc: "Al inicio de tu turno, +100 Cr fijo."
  },
  {
    id: "b15",
    title: "Filtro",
    credits: 400,
    desc: "Cuando uses un decreto de tu mano, +100 Cr (1 vez/turno)."
  },
  {
    id: "b16",
    title: "Bonus",
    credits: 400,
    desc: "Recibe +200 Cr antes de tu turno si tienes algún trabajador en cualquier otro territorio de valor $300 Cr."
  },
  {
    id: "b17",
    title: "Explotación",
    credits: 300,
    desc: "Al final del ciclo, paga 200 Cr de mantenimiento para conservar el beneficio; si no, lo pierdes ese ciclo."
  },
  {
    id: "b18",
    title: "Sobrecarga",
    credits: 300,
    desc: "1 vez por ciclo puedes pagar 100 Cr para comprar 1 voto extra en una votación de decreto (no acumulable)."
  },
  {
    id: "b19",
    title: "Crédito frío",
    credits: 300,
    desc: "Puedes deber hasta +200 Cr al Banco sin penalidad este ciclo."
  }
];

const territoriesName = [
  { id: 101, name: "Canal del Levitán", type: "Agua" },
  { id: 202, name: "Cañon del Eco Eterno", type: "Desierto" },
  { id: 303, name: "Crater de Fuego Antiguo", type: "Desierto" },
  { id: 404, name: "Núcleo de Cromo", type: "Minerales" },
  { id: 505, name: "Cúpulas de Iridio", type: "Minerales" },
  { id: 606, name: "El Velo Carmesí", type: "Desierto" },
  { id: 707, name: "Cordillera de Platino", type: "Minerales" },
  { id: 808, name: "Bóvedas de Adamantio", type: "Minerales" },
  { id: 909, name: "Arboles de Luz Fractal", type: "Bosque" },
  { id: 110, name: "Pantano de Cobre", type: "Bosque" },
  { id: 220, name: "Jardines de Clorofibra", type: "Bosque" },
  { id: 330, name: "Costa del Zafiro", type: "Agua" },
  { id: 440, name: "Arena de Mercurio", type: "Desierto" },
  { id: 550, name: "Selva de Carbón Vivo", type: "Bosque" },
  { id: 660, name: "Selva del Alba", type: "Bosque" },
  { id: 770, name: "Arrecife Esmeralda", type: "Agua" },
  { id: 880, name: "Dunas de Ónix", type: "Desierto" },
  { id: 990, name: "Mar de Titanio", type: "Agua" },
  { id: 111, name: "Lagos de Neón", type: "Agua" },
];

export default {territoriesBenefits, territoriesName};

const decrees = [

  {
    id: "a1f3b9c2",
    title: "Servicio obligatorio",
    desc: "Al inicio del turno de cada jugador, recibe 1 trabajador sin pagar (si no alcanzó su máximo).",
  },
  {
    id: "c8d4e2f7",
    title: "Tasa de extracción",
    desc: "+100 Cr a los jugadores por cada territorio de diamante que tengan.",
  },
  {
    id: "b7e9a3f1",
    title: "Bosque de oro",
    desc: "Los bosques producen +200 Cr por 2 ciclos.",
  },
  {
    id: "e4f6d1a9",
    title: "Arancel interestelar",
    desc: "Cada pago entre jugadores tributa 100 Cr al Banco (si no hay saldo, se cancela).",
  },
  {
    id: "d2a7f9c8",
    title: "Mantenimiento elevado",
    desc: "Al final de cada ciclo, paga 100 Cr por cada trabajador que tengas si tienes más de 3.",
  },
  {
    id: "f1c3b6e7",
    title: "Salario flexible",
    desc: "Costo de trabajador baja a 500 Cr.",
  },
  {
    id: "a9d2e4f5",
    title: "Escasez",
    desc: "Costo de trabajador sube a 700 Cr.",
  },
  {
    id: "c7b8a1f2",
    title: "Bonificación logística",
    desc: "Cuando mueves 3+ trabajadores en tu turno, +100 Cr.",
  },
  {
    id: "e8f3c1d6",
    title: "Política antimonopolio",
    desc: "Si ocupas 5+ territorios, pagas 200 Cr al Banco al final del ciclo.",
  },
  {
    id: "b3d9a7e5",
    title: "Compra estatal",
    desc: "Puedes vender un trabajador al Banco por 400 Cr (1 vez/turno).",
  },
  {
    id: "f6e2c8a4",
    title: "Banca cooperativa",
    desc: "Si cooperaste (compartiste control parcial) en 3+ territorios este ciclo, +200 Cr.",
  },
  {
    id: "a4c6e8f2",
    title: "Duplica registro",
    desc: "El costo de escaneo se duplica y pasa a 600 Cr durante 3 ciclos o hasta que el decreto deje de estar vigente.",
  },

  {
    id: "d1f7a9c3",
    title: "Carreteras orbitales",
    desc: "Se puede hacer un movimiento extra por pieza durante su turno.",
  },
  {
    id: "c9e1b7f4",
    title: "Niebla de guerra",
    desc: "Al entrar a un territorio, no puedes ver su valor hasta el fin del ciclo.",
  },
  {
    id: "e5b2a8d9",
    title: "Turbulencias",
    desc: "No se puede entrar a territorios de agua este ciclo.",
  },
  {
    id: "b6c3f8e1",
    title: "Zonas francas",
    desc: "Se exonera el cobro de registro de territorios por 3 ciclos o hasta que el decreto deje de estar vigente.",
  },
  {
    id: "f2d4e7a6",
    title: "Bloqueo",
    desc: "El territorio Pantano de cobre no puede ser ocupado este ciclo por alguien nuevo.",
  },
  {
    id: "a3c9f7d8",
    title: "Reubicación forzada",
    desc: "Al inicio del ciclo, cada jugador retira 1 trabajador de un territorio que comparte (si puede) a un adyacente.",
  },
  {
    id: "e7a1c4f9",
    title: "Puentes temporales",
    desc: "Se consideran adyacentes El Velo Carmesí con las Dunas de Onix y las Cúpulas de Iridio con la Selva del Alba por 1 ciclo.",
  },
  {
    id: "c2f5e8b7",
    title: "Expansión planificada",
    desc: "El primer movimiento de cada jugador debe ser hacia un territorio no ocupado (si existe).",
  },
  {
    id: "d8b4a2f3",
    title: "Repliegue",
    desc: "Al final del turno, puedes retirar 1 trabajador por jugador del tablero para reposicionarlo en el turno siguiente.",
  },
  {
    id: "f9c6e1a5",
    title: "Protege los recursos hídricos",
    desc: "Da 1 barrera por territorio de agua que ocupe cada jugador (puede bloquear una frontera de cada hexágono).",
  },

  {
    id: "a7f2c8d5",
    title: "Sufragio ponderado",
    desc: "Quien controle 2+ territorios de valor 600–800 tiene +1 voto.",
  },
  {
    id: "e3b9f6c1",
    title: "Veto ejecutivo",
    desc: "El jugador con menos Cr puede vetar 1 decreto aprobado por ciclo.",
  },
  {
    id: "d5a8c4e7",
    title: "Voto unánime",
    desc: "Para aprobar un decreto se requieren todos los votos SÍ por 1 ronda o hasta que este decreto esté vigente.",
  },
  {
    id: "b1e7f9a3",
    title: "Fast-track",
    desc: "Si un decreto obtiene unanimidad, todos obtienen 100 Cr del Banco.",
  },
  {
    id: "f4c2d8e6",
    title: "Campaña sucia",
    desc: "El proponente puede pagar 200 Cr para forzar a re-votar su decreto inmediatamente.",
  },
  {
    id: "c6a3e9f5",
    title: "Silencio administrativo",
    desc: "Si hay empate, el decreto se aprueba.",
  },
  {
    id: "e9f1b4c7",
    title: "Moción de orden",
    desc: "El ciclo siguiente al ser votado este decreto solo se pueden proponer 2 decretos en total (elegidos al azar entre los propuestos).",
  },
];

const initialDecrees = [
  {
    id: "a2f9c7e1",
    title: "Paz fundacional",
    desc: "Durante el primer ciclo, no se cobra el registro de las propiedades al banco o peajes/aduanas de territorios a otros jugadores.",
  },
  {
    id: "d6b3e8f2",
    title: "Escáner abierto",
    desc: "Durante el primer ciclo, los valores de territorios revelados al ocupar son públicos.",
  },
  {
    id: "f1c7a9d4",
    title: "Subsidio de entrada",
    desc: "Al terminar el primer ciclo, todos reciben +200 Cr.",
  },
  {
    id: "b8e2f5a3",
    title: "Impuesto pionero",
    desc: "Al final del primer ciclo paga 100 Cr.",
  },
  {
    id: "e9d1c4f7",
    title: "Fomento industrial",
    desc: "-100 Cr al costo del primer trabajador comprado en la partida.",
  },
  {
    id: "c5a8e7b9",
    title: "Sigilo",
    desc: "Queda prohibido compartir públicamente valores exactos de territorios en el primer ciclo (se permite decir “alto/medio/bajo”).",
  },
  {
    id: "f3d6b2c8",
    title: "Censo de mano",
    desc: "Al final del primer ciclo, roba hasta tener 4 decretos en mano (límite temporal).",
  },
  {
    id: "a7c1f9d5",
    title: "Servicio Obligatorio",
    desc: "Al principio del turno de cada jugador, este recibe 1 trabajador sin pagar su costo (se aplica 1 vez).",
  },
  {
    id: "e4b9c2f6",
    title: "Barrera Temporal",
    desc: "Se concede una barrera frontal gratuita a quien la solicite este ciclo. Una barrera puede bloquear una de las 6 fronteras de cada hexágono.",
  },
];

module.exports = {decrees, initialDecrees}; 

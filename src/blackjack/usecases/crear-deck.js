import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo:['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('tipoDeCarta es obligatorio como un arreglo de Strings');
  if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo de Strings');

  let deck = [];

  // Creates the numbers cards
  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposDeCarta ) {
          deck.push( i + tipo);
      }
  }

  // Creates the special cards
  for( let tipo of tiposDeCarta ) {
      for( let esp of tiposEspeciales ) {
          deck.push( esp + tipo);
      }
  }

  // Shuffles the deck
  deck = _.shuffle( deck );

  return deck;
}

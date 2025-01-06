
/**
 * Esta funcion me permite pedir una carta
 * @param {Array<String>} deck Array de string
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = ( deck ) => {

  if ( !deck || deck.length === 0 ) {
    throw 'No hay cartas en el deck';
  }
  return deck.pop();
}
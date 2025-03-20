const transformToAcronym = (phrase) => {
  const words = phrase.split('-');
  let acronym = words.map(word => word[0]).join('');
  if (phrase == 'plasticne-kace') {
    acronym += 'c'
  }
  if (phrase == 'plasticni-katamarani') {
    acronym += 'a'
  }
  if (phrase == 'plasticne-sahte') {
    acronym += 'h'
  }
  if (phrase == 'plasticne-cevi') {
    acronym += 'e'
  }
  if (phrase == 'plasticne-kade') {
    acronym += 'd'
  }
  return acronym;
}

export default transformToAcronym
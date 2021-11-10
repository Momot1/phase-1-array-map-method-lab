const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  
  /*test = tutorials[0].split(" ")
  for(let i = 0; i < test.length; i++){
    test[i] = test[i][0].toUpperCase() + test[i].slice(1);
  }
  console.log(test)*/
  
  return tutorials.map(element => {
    const str = element.split(" ")
    for(let i = 0; i < str.length; i++){
      str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join(" ")
  })

}
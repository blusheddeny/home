const url = 'https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/628194/es/0700/true/BIE/2.0/40ffedb5-73a5-fe49-7aee-2d740b3c90ed?type=json'
const response = await fetch(url)
const data = await response.json()
console.log(data)

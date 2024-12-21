let dropdowns = document.querySelectorAll('.dropdowns select');
let select_1=document.getElementById('select_1');
let select_2=document.getElementById('select_2');
const input=document.querySelector('input')
let value_1;
let value_2;
let temp=countryList;
async function main(fromcurrency, tocurrency) {
      let data = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json`)
      let jsondata = await data.json()
      let rate = jsondata[fromcurrency][tocurrency]
      input.addEventListener('keyup',()=>{
        let inputvalue=input.value
        document.querySelector('.result').textContent=`${inputvalue} ${fromcurrency}=${inputvalue*rate} ${tocurrency}`
        
      }) 
      
        
}
for (let select of dropdowns) {
      for (cur in countryList) {
            let option=document.createElement('option')
            option.textContent=cur
            option.value=cur
            select.appendChild(option)
      }
}
select_1.addEventListener('change',(event)=>{
      value_1=event.target.value
      document.getElementById('img1').src=`https://flagsapi.com/${temp[value_1]}/flat/64.png`


})
select_2.addEventListener('change',(event)=>{
      value_2=event.target.value
      document.getElementById('img2').src=`https://flagsapi.com/${temp[value_2]}/flat/64.png`
      let value_3=value_1.toLowerCase()
      let value_4=value_2.toLowerCase()
      main(`${value_3}`,`${value_4}`)
      
})
main('usd', 'inr')




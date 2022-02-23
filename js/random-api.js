const loadsData = () =>{
    fetch ('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayData(data))
}
const displayData =(data) => {
    const dataSet = document.getElementById('quote');
    dataSet.innerText = data.quote;
}

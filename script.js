
getthiData = (number)=>{

    const apiUrl = "https://api-thirukkural.vercel.app/api";

    const Full_Url = `${apiUrl}?num=${number}`;

    const thiPromise = fetch(Full_Url);

    console.log(Full_Url)

    return thiPromise.then((response)=>{
        return response.json()
    })

}
function searchNumber(){
    const number =  document.getElementById("num-input").value;

    getthiData(number)

    .then((response) =>{
        console.log(response)

        document.getElementById('kural').innerText = response.line1;
        document.getElementById('kural1').innerText = response.line2;
        document.getElementById('exp').innerText = response.tam_exp
;

    })
    .catch((err)=>{
        document.getElementById('kural').innerText = "please Enter Proper Value for(1-1330)";
        document.getElementById('kural1').innerText = '';
        document.getElementById('exp').innerText = "";


    })
}
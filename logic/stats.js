async function loadStats(id){
    let res;
    try{
        res = await fetch(`https://lsglab.ddns.net/craig/stats?id=${id}`);
        res = await res.json();
    }
    catch(err){
        console.log(err);
        document.querySelector(".general").innerHTML = "";
        document.querySelector(".moneyStats").innerHTML = "";
        return;
    }
    const insert = `
    <img id = "pfp" src="https://cdn.discordapp.com/avatars/${res.data.id}/${res.data.avatar}" alt="pfp">    
    <a id = "name">${res.data.username}</a>   
    `
    document.querySelector(".general").innerHTML = insert;
    console.log(res)
    const insert2 = `
                <tr>
                    <th>on hand</th>
                    <th>bank</th>
                    <th>balance</th>
                    <th>in jail</th>
                    <th>last worked</th>
                </tr>
                <tr>
                    <td>${res.money[0].balance}</td>
                    <td>${res.money[0].bankbalance}</td>
                    <td>${(res.money[0].balance+res.money[0].bankbalance)}</td>
                    <td>${(Date.now()>res.money[0].injailtill)}</td>
                    <td>${new Date(res.money[0].lastworked * 1000).toTimeString()}</td>
                </tr>
    ` 
    document.querySelector(".moneyStats").innerHTML = insert2;
} 
function handleInput() {
    loadStats(document.getElementById("input").value);
}


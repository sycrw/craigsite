async function handleButtonClick(num) {
    button = document.getElementById(String(num));
    console.log(button);
    let selectors = document.querySelectorAll(".selector");
    selectors.forEach(e => {
        e.className = "selector";
        e.disabled = true;
    })
    button.className += " button-active";
    loadLeaderboard(num);
}

loadLeaderboard(10);
async function loadLeaderboard(num) {
    let res = await fetch(`https://lsglab.ddns.net/craig/leaderboard?length=${num}`);
    res = await res.json()
    let leaderboard = document.querySelector(".leaderboard");
    leaderboard.innerHTML = `
             <tr>
                <th>
                    pos
                </th>
                <th>
                    name
                </th>
                <th>
                    on hand
                </th>
                <th>
                    bank
                </th>
                <th>
                    total
                </th>
            </tr>
    `;
    console.log(res);
    for (let i = 0; i < res.length; i++) {
        const e = res[i];
        let data = await fetch(`https://lsglab.ddns.net/craig/discordstats?id=${e.userid}`);
        data = await data.json();
        console.log(data);
        let insert;
        if (data.avatar == null) {
            insert = `
           <tr>
                <td>
                    ${i + 1}
                </td>
                <td>
                    <div>
                        <a>${data.username}</a>
                
                    </div>
                </td>
                <td>
                    ${e.balance}
                </td>
                <td>
                ${e.bankbalance}
                </td>
                <td>
                ${e.total}
                </td>
            </tr>
        `
        }
        else {
            insert = `
           <tr>
                <td>
                    ${i + 1}
                </td>
                <td>
                    <div>
                        <a>${data.username}</a>
                    <img src="https://cdn.discordapp.com/avatars/${e.userid}/${data.avatar}" alt="pfp">
                    </div>
                </td>
                <td>
                    ${e.balance}
                </td>
                <td>
                ${e.bankbalance}
                </td>
                <td>
                ${e.total}
                </td>
            </tr>
        `
        }
        leaderboard.innerHTML += insert;
    }
        let selectors = document.querySelectorAll(".selector");
        selectors.forEach(e => {
            console.log(e);
            e.disabled = false;
        })
}
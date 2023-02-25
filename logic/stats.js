async function loadStats(id){
    //get general Stats element
    let name = document.getElementById("name")
    let pfp = document.getElementById("pfp")
    console.log("nocie")
    let res = await fetch(`https://lsglab.ddns.net/craig/stats?id=${id}`);
    if(typeof yourVariable === 'object' &&
    !Array.isArray(yourVariable) &&
    yourVariable !== null){
        return;
    }
    name.innerHTML = res.data.username;
    pfp.src = `https://cdn.discordapp.com/avatars/${res.data.id}/${res.data.avatar}`;
} 

function handleInput () {
    loadStats(document.getElementById("input").value);
}


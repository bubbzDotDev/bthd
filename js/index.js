function discordAPI(){
    let init = {
    method: 'GET',
    mode: 'no-cors',
    cache: 'reload'
    }

    fetch('https://discordapp.com/api/guilds/411607476430176256/widget.json', init).then(function(response){
        if(response.status != 200){
          console.log("it didn't work " + response.status);
          return
        }
        response.json().then(function(data){
        let serverName = data.name;
        let onlineCount = data.presence_count;
        let output;
        if (onlineCount == 1){
            output = `${serverName} | ${onlineCount} Member Online`;
        } else {
            output = `${serverName} | ${onlineCount} Members Online`;
        }
        document.getElementById('discord-text').innerText = output;
        })
    })
}
discordAPI()
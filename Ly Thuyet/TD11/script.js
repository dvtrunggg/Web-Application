
function onResponse(res){
    return res.json();
}
function Click() {
    var input = document.getElementById("artiste").value;
    var string = input.split(" ");
    const url = 'https://api.spotify.com/v1/search?q=' + string[0] + '%20' + string[1] + '&type=album';

    fetch(url, 
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQDf2lvZEqAtLzEV7FEudTpOTzuSFFmCVZ78rAwVyHfi08BazPuuycfkDfK67HymnWmtRCecpxJnQS2tEGY_UwfBI5KC65NVCS1PfKsdDGg7_-ihOxrSesJGy-ZNiA9UcJsckZRwC-ZtxgmDUVw09Mv5QN2TSw0IqjM'
            }
        }
    )
    .then(onResponse)
    .then(onJsonReady => {
        for(let i = 0; i < 20; i++) 
        {
            // node = document.getElementById('container');
            document.body.innerHTML += '<div class="card"><img id="img'+i+'" src=""><a id="link'+i+'" href=""></a><br><p id="date'+i+'"></p><p id="track'+i+'"></p></div>';
        }
        for (let i = 0; i < 20; i++) {
            let img = 'img' + i;
            let link = 'link' + i;
            let date = 'date' + i;
            let track = 'track' + i;
            document.getElementById(img).src = onJsonReady['albums']['items'][i]['images']['1']['url'];
            document.getElementById(link).innerHTML = onJsonReady['albums']['items'][i]['name'];
            document.getElementById(link).href = onJsonReady['albums']['items'][i]['external_urls']['spotify'];
            document.getElementById(date).innerHTML = 'Date de sortie: ' + onJsonReady['albums']['items'][i]['release_date'];
            document.getElementById(track).innerHTML = 'Nombre de pistes: ' + onJsonReady['albums']['items'][i]['total_tracks'];
        }
    });
}

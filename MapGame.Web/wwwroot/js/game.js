



document.body.onload = function () {
createPiece();
    createPiece();
    var connection = new signalR.HubConnectionBuilder().withAutomaticReconnect([1000, 1000, 3000, 3000]).withUrl("https://localhost:44357/GameHub").configureLogging(signalR.LogLevel.Information).build();
    startConnection();
    console.log(connection);
    function startConnection() {
        connection.start().then(() => {
            //statusShow();
            //$("#loading").hide();

            connection.invoke("SendName","serdar");

        }).catch((err) => {
            console.log(err);
            setTimeout(() => startConnection(), 2000);
        });
    }
    connection.on("ReceiveName", (name) => {
        //$("#namesList").append(`<li class="list-group-item">${name}</li>`);
        console.log(name);
    })
}

function createPiece() {
    var newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'piece');
    document.getElementById("gameboard").appendChild(newDiv)
};




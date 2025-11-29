/*
let backgroundVideo = document.getElementById("video");
let displayProfile = document.getElementById("profile");
let displayName = document.getElementById("displayName");
*/
function generate(event)
{
event.preventDefault();


    const username = document.getElementById("username").value;
    const background = document.getElementById("customBackground").value;
    const profilePic = document.getElementById("Profile").value;
    const name = document.getElementById("name").value;
    const quote = document.getElementById("quote").value;
    const discordLink = document.getElementById("discordLink").value;
    const spotifyLink = document.getElementById("spotifyLink").value;
    const twitchLink = document.getElementById("twitchLink").value;

     localStorage.setItem("username", username);
   localStorage.setItem("background", background);
  localStorage.setItem("name", name);
    localStorage.setItem("quote", quote);
    localStorage.setItem("discordLink", discordLink);
    localStorage.setItem("spotifyLink", spotifyLink);
    localStorage.setItem("twitchLink", twitchLink);
    
    window.location.href = "index.html";


}
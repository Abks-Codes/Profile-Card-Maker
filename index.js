window.onload = function ()
{
    document.getElementById("displayName").innerText = localStorage.getItem("name");
    document.getElementById("quote").innerText = localStorage.getItem(quote);
    document.getElementById("discordLink").querySelector("a").href = localStorage.getItem(discordLink);
    document.getElementById("spotifyLink").querySelector("a").href = localStorage.getItem(spotifyLink);
    document.getElementById("twitchLink").querySelector("a").href = localStorage.getItem(twitchLink);
    document.getElementById("video").src = localStorage.getItem(background)
      console.log("ok")
}
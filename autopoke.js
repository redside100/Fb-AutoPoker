alert("AutoPoke now running.");
function poke()
{
    links = document.getElementsByTagName("a");
    for (var i = 0 ; i < links.length; i++)
    {
        link = links[i];
        if (link.innerHTML.contains("Poke Back"))
            link.click();
    }
    setTimeout(poke, 500);
}

poke();

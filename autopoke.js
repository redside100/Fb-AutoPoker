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

javascript:(alert("AutoPoke now running."); function p(){ l = document.getElementsByTagName("a"); for (var i=0; i < l.length; i++){ls = l[i];if(ls.innerHTML.contains("Poke Back")){ls.click();}} setTimeout(p, 500);} p();)
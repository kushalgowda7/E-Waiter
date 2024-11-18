const currentLocation=location.href;
const menuItem=document.querySelectorAll(".head .navigation li a");
const menuLength=menuItem.length;

for(var i=0; i<menuLength; i++)
{
    if(menuItem[i].href === currentLocation)
    {
        menuItem[i].className="active";
    }
}
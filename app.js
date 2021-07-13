function getInformation(city){
    var api='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=cae74b1a84155096aa25f22e42f6e080';

    ajaxRequest=new XMLHttpRequest();
            ajaxRequest.onreadystatechange=function(){
                if(this.readyState==4){
                    console.log(this.responseText);
                    finalData=JSON.parse(this.responseText);
                    if(finalData['name']==undefined){
                        alert("The city name you Entered is invalid!");
                    }
                    else{
                        document.getElementById('city').innerHTML="City: "+finalData['name'];
                        document.getElementById('temp').innerHTML="Temperature: "+finalData['main']['temp'];
                        document.getElementById('weather').innerHTML="Description: "+finalData['weather'][0]['description'];
                    }
                }
            }
            ajaxRequest.open("GET",api, true); 
            ajaxRequest.send();
}



function getInfo(){

        var city=document.getElementById('city_name').value;
        getInformation(city);

}
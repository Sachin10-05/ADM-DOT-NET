/**********************************************************************************************************************************************************************/
                                                                       /*Country.html*/
/**********************************************************************************************************************************************************************/
<!-- DO NOT ALTER THIS FILE -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>The jQuery Example</title>
    <script src="country.js"></script>
</head>
<body>
    <form>
        <input type="button" id ="btn-id" value = "Click to Load Data" />
	    <div id="data-id"></div>
    </form>
       
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="country.js"></script>
</body>
</html>








/**********************************************************************************************************************************************************************/
                                                                       /*Country.js*/
/**********************************************************************************************************************************************************************/

//WRITE YOUR jQUERY CODE HERE
$("#btn-id").click(function()
{
    $.getJSON("https://reqres.in/api/users?page=2",function(json)
    {
        $("#data-id").html('')
        json.data.forEach(function(jd)
        {
            $("#data-id").append(jd.id+"--"+jd.email+'<br>');
        })
    });
});





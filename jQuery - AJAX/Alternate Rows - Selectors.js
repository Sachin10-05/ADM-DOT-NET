/**********************************************************************************************************************************************************************/
                                                                        /*Alternate.html*/
/**********************************************************************************************************************************************************************/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>jQuery Custom Selector</title>
    <style>
    /* Some custom style */
    *{
        padding: 5px;
    }
    </style>
</head>
<body>
    <table border="1">
        <caption><strong>Customer Information</strong></caption>
        <thead>
            <tr>
                <th>Customer No.</th>
                <th>Custome Name</th>
                <th>Contact No.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Z1021</td>
                <td>Kim Walker</td>
                <td>9996648390</td>
            </tr>
            <tr>
                <td>Z3985</td>
                <td>Jack Welington</td>
                <td>8993648391</td>
            </tr>
            <tr>
                <td>Z6849</td>
                <td>John Rambo</td>
                <td>7809368394</td>
            </tr>
            <tr>
                <td>Z6850</td>
                <td>Mary Carter</td>
                <td>8809364594</td>
            </tr>
            <tr>
                <td>Z6830</td>
                <td>John Rambo</td>
                <td>7809368394</td>
            </tr>
            
    
        </tbody>
    </table>
    
 <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
 <script src="script.js"> </script>
   
    </body>
</html>












/**********************************************************************************************************************************************************************/
                                                                        /*script.js*/
/**********************************************************************************************************************************************************************/
$("caption").css("background-color", "lightblue");
$("tr:even").css("background-color", "lightpink");
$("tr:odd").css("background-color", "lightblue");







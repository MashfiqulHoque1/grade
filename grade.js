function show()
{
    var name = document.getElementById("namebox").value;
    var mid = document.getElementById("midbox").value;
    var final = document.getElementById("finalbox").value;

    var result = (mid * .40) + (final * .60);

    if(result >= 40)
    {
        document.getElementById("p1").innerHTML = "Congratulation," + name + ". You get pass mark"
    }

    else{
        document.getElementById("p1").innerHTML = "!!!" + name + ". You've failed."
    }


    if(result >= 90 && 90<=100)
    {
        document.getElementById("p2").innerHTML = "Your grade is A.";
    }

    else if(result >= 85 && 89>=85)
    {
        document.getElementById("p2").innerHTML = "Your grade is A-.";
    }

    else if(result >= 80 && 84>=80)
    {
        document.getElementById("p2").innerHTML = "Your grade is B+.";
    }

    else if(result >= 75 && 79>=75)
    {
        document.getElementById("p2").innerHTML = "Your grade is B.";
    }

    else if(result >= 70 && 74>=70)
    {
        document.getElementById("p2").innerHTML = "Your grade is B-.";
    }

    else if(result >= 65 && 69>=65)
    {
        document.getElementById("p2").innerHTML = "Your grade is C+.";
    }

    else if(result >= 60 && 64>=60)
    {
        document.getElementById("p2").innerHTML = "Your grade is C.";
    }

    else if(result >= 55 && 59>=55)
    {
        document.getElementById("p2").innerHTML = "Your grade is C.";
    }

    else if(result >= 50 && 54>=50)
    {
        document.getElementById("p2").innerHTML = "Your grade is C-.";
    }

    else if(result >= 45 && 49>=45)
    {
        document.getElementById("p2").innerHTML = "Your grade is D+.";
    }

    else if(result >= 40 && 44>=40)
    {
        document.getElementById("p2").innerHTML = "Your grade is D.";
    }

    else if( result < 40) 
    {
        document.getElementById("p2").innerHTML = "Your grade is F.";
    }

    document.getElementById("last").innerHTML = name + ". Your total marks : " + result + ".";

    
    document.getElementById("namebox").innerHTML = '';
    document.getElementById("midbox").innerHTML = '';
    document.getElementById("finalbox").innerHTML = '';

}
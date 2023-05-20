
$(function(){

    $("#submit-btn").on( "click", function() {
        var totalMin = $("#total-min").val();

        if (Number.isNaN(Number(totalMin))) {
            alert("Invalid entry please try again");
            return;
        }

        var hour = 12;
        var minute = 0;
        var totalSeq = 0;

        //loop down from total time
        for (let i = totalMin; i >= 0; i--) {
            
            //check if an hour has passed
            if (minute == 60) {
                (hour == 12)? hour = 1 : hour++; 
                minute = 0;
            } 

            //array to hold numbers
            var arr = [];

            //push numbers into array to check for arithmetic sequence
            arr.push(hour.toString()[0]);
            (hour > 9)? arr.push(hour.toString()[1]): '';

            if (minute <= 9) {
                arr.push('0'); 
                arr.push(minute.toString()[0]);
            } else {
                arr.push(minute.toString()[0]); 
                arr.push(minute.toString()[1]);
            }
            
            //check if there is an arithmetic sequence by finding if the difference is constant between all consecutive numbers
            var isArithmetic = true;
            var diff = Number(arr[0]) - Number(arr[1]);
            for (let i = 0; i < arr.length-1; i++) {
                var tempDiff = Number(arr[i]) - Number(arr[i+1]);
                if (tempDiff != diff) { isArithmetic = false; break; }
            }
            (isArithmetic)? totalSeq++ : "";

            //add minute
            minute++;
        }

        $("#favorite-time").append(totalSeq);

    })    
});
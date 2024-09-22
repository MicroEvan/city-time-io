    // Initialize Firebase with PHP configuration
    const firebaseConfig = {
        apiKey: "<?php echo config('firebase')['apiKey']; ?>",
        authDomain: "<?php echo config('firebase')['authDomain']; ?>",
        databaseURL: "<?php echo config('firebase')['databaseURL']; ?>",
        projectId: "<?php echo config('firebase')['projectId']; ?>",
        storageBucket: "<?php echo config('firebase')['storageBucket']; ?>",
        messagingSenderId: "<?php echo config('firebase')['messagingSenderId']; ?>",
        appId: "<?php echo config('firebase')['appId']; ?>"
    };
// Initialize Materialize components
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Timepicker
    var timepickerElems = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timepickerElems, {
        twelveHour: true,
        defaultTime: 'now'
    });

    // Initialize Select elements
    var selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);

    // Swap function for cities
    const swapButton = document.getElementById('swapButton');
    const sourceCity = document.getElementById('sourceCity');
    const targetCityElement = document.getElementById('targetCity');

    if (swapButton && sourceCity && targetCityElement) {
        swapButton.addEventListener('click', function() {
            if (sourceCity.value && targetCityElement.value) {
                const temp = sourceCity.value;
                sourceCity.value = targetCityElement.value;
                targetCityElement.value = temp;
    
                // Re-initialize the select elements
                M.FormSelect.init(selectElems);
            } else {
                console.error('Please select both source and target cities before swapping.');
            }
        });
    }
    
    // Convert time based on selected cities
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('convertedTime');

    if (convertButton && resultDiv) {
        convertButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission
            var selectedTime = document.getElementById('timepicker').value;
            var selectedCity = sourceCity.value;
            var targetCity = targetCityElement.value;
    
            if (selectedTime && selectedCity && targetCity) {
                var date = new Date();
                var [time, modifier] = selectedTime.split(' ');
                var [hours, minutes] = time.split(':');
    
                if (!time || !modifier || isNaN(hours) || isNaN(minutes)) {
                    resultDiv.innerHTML = 'Invalid time format. Please use HH:MM AM/PM.';
                    return;
                }
    
                hours = parseInt(hours, 10);
                minutes = parseInt(minutes, 10);
    
                if (modifier === 'PM' && hours !== 12) {
                    hours += 12;
                }
                if (modifier === 'AM' && hours === 12) {
                    hours = 0;
                }
    
                date.setHours(hours);
                date.setMinutes(minutes);
                date.setSeconds(0);
    
                var options = { timeZone: targetCity, hour: '2-digit', minute: '2-digit', hour12: true };
                var formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
    
                // Display the formatted time without clearing
                resultDiv.innerHTML = `${formattedTime}`;
            } else {
                resultDiv.innerHTML = 'Check Empty Fields.';
            }
        });
    }

    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            document.getElementById('timepicker').value = '';
            sourceCity.selectedIndex = 0;
            targetCityElement.selectedIndex = 0;
            resultDiv.innerHTML = ''; // Clear displayed time
            M.FormSelect.init(selectElems); // Re-initialize select elements
        });
    }

// Result-Time
const timeElement = document.querySelector(".time");
//const timeElementd = document.querySelector(".timed");


/**
 * @param {Date} date
 */
function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}


// Real-Time-About-page
const timeElementd = document.querySelector(".timed");

// Update the current time for the about page
setInterval(() => {
    const now = new Date();
    timeElementd.textContent = formatTime(now);
}, 200);

});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    M.TapTarget.init(elems);

    const openTapTargetButton = document.getElementById('openTapTarget');
    const contactTapTarget = document.getElementById('contactTapTarget');

    if (openTapTargetButton) {
        openTapTargetButton.addEventListener('click', function() {
            var instance = M.TapTarget.getInstance(contactTapTarget);
            if (instance) {
                instance.open();
            }
        });
    }
});

    // Fetch random quote on page load
    const quoteBlock = document.getElementById('qoute');

    function fetchRandomQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                quoteBlock.innerHTML = `"${data.content}" <br> — ${data.author}`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteBlock.innerHTML = 'Could not fetch a quote. Please try again later.';
            });
    }

    // Fetch a quote when the page loads
    fetchRandomQuote();


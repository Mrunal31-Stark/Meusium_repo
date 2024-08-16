document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
});

window.addEventListener('load', function() {
    var vrView = new VRView.Player('#vrview', {
        image: 'images/animesh-bhargava-dxZMLX7qRGE-unsplash.jpg', // Updated path
        width: '100%',
        height: '400px',
        is_stereo: false
    });
});




window.addEventListener('load', function() {
    var timelineData = 'timeline-data.json'; // Path to your timeline data file
    var timelineOptions = {}; // Additional options if needed
    var timeline = new TL.Timeline('timeline-embed', timelineData, timelineOptions);
});


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Art Exhibit',
                start: '2024-08-20',
                end: '2024-08-20'
            },
            {
                title: 'History Lecture',
                start: '2024-09-05',
            },
            // Add more events as needed
        ]
    });
    calendar.render();
});



function openModal(title, imageUrl, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('exhibitModal').style.display = "block";
}

function closeModal() {
    document.getElementById('exhibitModal').style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('exhibitModal')) {
        closeModal();
    }
}

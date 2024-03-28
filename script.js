<!DOCTYPE html>
<html>
<head>
    <title>Simple Video Player</title>
</head>
<body>
    <h1>Simple Video Player</h1>
    <video id="videoPlayer" width="640" height="360" controls>
        <source src="https://asumanaksoy.com/2023/04/04/haute-couture-insiders-look/" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <script>
        // Get the video element
        const video = document.getElementById('videoPlayer');

        // Add an event listener to play the video when it's loaded
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });

        // Add an event listener to pause the video when it ends
        video.addEventListener('ended', function() {
            video.pause();
        });
    </script>
</body>
</html>

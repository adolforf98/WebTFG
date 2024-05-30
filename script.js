document.getElementById('audioPlayer').addEventListener('play', function () {
    updateNowPlaying();
});

function updateNowPlaying() {
    // Simulate fetching current track info from an API
    document.getElementById('currentTrack').textContent = 'Current Live Stream';
}

function loadUpcomingShows() {
    const shows = ['Show 1 at 2 PM', 'Show 2 at 4 PM', 'Show 3 at 6 PM'];
    const upcomingList = document.getElementById('upcomingList');
    upcomingList.innerHTML = '';
    shows.forEach(show => {
        const listItem = document.createElement('li');
        listItem.textContent = show;
        upcomingList.appendChild(listItem);
    });
}

// Simulated function to fetch and display social media posts
function fetchSocialMediaPosts() {
    const feed = document.getElementById('socialFeed');
    feed.innerHTML = '<p>New photos from our latest event on Instagram!</p>';
}

// Load upcoming shows and social media posts on page load
window.onload = function() {
    loadUpcomingShows();
    fetchSocialMediaPosts();
};

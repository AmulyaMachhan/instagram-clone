document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".post");
    let currentPostIndex = 0;

    document.addEventListener("wheel", handleScroll);

    function handleScroll(event) {
        const delta = Math.sign(event.deltaX);

        if (delta > 0) {
            // Scrolling down
            if (currentPostIndex < posts.length - 1) {
                currentPostIndex++;
                scrollToCurrentPost();
            }
        } else if (delta < 0) {
            // Scrolling up
            if (currentPostIndex > 0) {
                currentPostIndex--;
                scrollToCurrentPost();
            }
        }
    }

    function scrollToCurrentPost() {
        const postToScroll = posts[currentPostIndex];
        postToScroll.scrollIntoView({
            behavior: "smooth"
        });
    }
});

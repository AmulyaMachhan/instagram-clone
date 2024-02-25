document.addEventListener("DOMContentLoaded" , function () {
    const postContainer = document.getElementsByClassName("post-container")[0];

    const posts = [
        {userName : "Demon" , userProfile  : "images/profile-picture-6.jpg" , postImage : ["images/post1.jpg","images/WhatsApp Video 2024-01-17 at 00.16.07.mp4","images/post1.jpg"] , caption : "Winters are love🤍⛄🏂"},
        {userName : "TALxOCEAN" , userProfile  : "images/profile-picture-2.jpg" , postImage : ["images/post-video-1.mp4"] , caption : ""},
        {userName : "ZACHNICHOLX" , userProfile  : "images/profile-picture-3.jpg" , postImage : ["images/post-video-2.mp4"] , caption : ""},
        {userName : "IRAGIB" , userProfile  : "images/profile-picture-4.jpg" , postImage : ["images/post-video-3.mp4"] , caption : ""},
        {userName : "sharmajikabadabeta" , userProfile  : "images/profile-picture-5.jpg" , postImage : ["images/post-video-4.mp4"] , caption : ""},
        {userName : "" , userProfile  : "images/profile-picture-6.jpg" , postImage : ["images/post-video-1.mp4"] , caption : ""},
    ];

    posts.forEach( postData => {
        const post = createPost(postData);
        postContainer.appendChild(post);
    });

    function createPost( postData ){
        const post = document.createElement("div");
        post.classList.add("post");

        post.innerHTML = 
            `<div class="post-header">
                <div class="post-profile">
                    <div class="profile-image">   
                        <img class="user-image" src="${postData.userProfile}" alt="">
                    </div>
                    <div class="username">
                        <a href="" target="_blank" class="post-user">
                            <span>${postData.userName}</span>
                        </a>
                    </div>
                </div>
                <div class="post-options">
                    <button class="post-more-options">
                        <svg width="24"height="24"viewBox="0 0 24 24" fill="var(--color-svg)"xmlns="http://www.w3.org/2000/svg" >
                        <circle  cx="6.5"  cy="11.5"  r="1.5"  fill="var(--color-svg)"/><circle cx="12" cy="11.5" r="1.5" fill="var(--color-svg)" />
                        <circle  cx="17.5"  cy="11.5"  r="1.5"  fill="var(--color-svg)"/>
                        </svg>
                    </button>
                </div>
            </div>`;

        const postContent = document.createElement("div");
        postContent.classList.add("post-content");
        
        const postMedias = document.createElement("div");
        postMedias.classList.add("post-medias");

        postData.postImage.forEach( media => {
            const mediaElement = createPostMedias(media);
            postMedias.appendChild(mediaElement);
        })

        postContent.appendChild(postMedias);
        post.appendChild(postContent);

        post.innerHTML +=
            `<div class="post-footer">
                <div class="post-buttons">
                    <div class="right-post-buttons">
                        <div class="like-button">
                            <button class="post__button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z" fill="var(--color-svg)" stroke="var(--color-svg)" stroke-width="0.6"/>
                                </svg>
                            </button>                                        
                        </div>
                        <div class="comment-button">
                            <button class="post__button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z" fill="var(--color-svg)" stroke="var(--color-svg)" stroke-width="0.7" />
                                </svg>
                            </button>
                        </div>
                        <div class="share-button">
                            <button class="post__button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z" fill="var(--color-svg)" stroke="var(--color-svg)" stroke-width="0.3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="post-indicators">
                    </div>
                    <div class="left-post-buttons">
                        <div class="save-button">
                            <button class="post__button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z" fill="var(--color-svg)" stroke="var(--color-svg)" stroke-width="0.7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;

        post.innerHTML +=
            `<div class="post-information">
                <div class="post-caption">
                    <div class="user-name">
                        <span>
                            ${postData.userName}
                        </span>
                    </div>
                    <div class="caption">
                        <span>
                            ${postData.caption}
                        </span>
                    </div>
                </div>
                <div class="post-time">
                            9:45pm
                </div>
            </div>`;

        return post;
    };

    function createPostMedias(media){

        const postMediaElement = document.createElement("div");
        postMediaElement.classList.add("post-media")

            if (media.endsWith(".jpg") || media.endsWith(".png") || media.endsWith(".jpeg")) {
                const imgElement = document.createElement("img");
                imgElement.classList.add("post-image");
                imgElement.src = media;
                imgElement.alt = "post-image";
                postMediaElement.appendChild(imgElement);
            } else if (media.endsWith(".mp4")) {
                const videoElement = document.createElement("video");
                videoElement.classList.add("post-video");
                videoElement.src = media;
                videoElement.setAttribute("controls", ""); 
                postMediaElement.appendChild(videoElement);
            }

        return postMediaElement;

    };
    
});


// for adding right and left buttons as well as post indicators
document.addEventListener("DOMContentLoaded", function(){
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {

        if(post.querySelectorAll(".post-media").length > 1){

            post.querySelectorAll(".post-media").forEach( function () {
        
                const mediaIndicatorElement = document.createElement("div");
                mediaIndicatorElement.classList.add("post-indicator");
                post.querySelector(".post-indicators").appendChild(mediaIndicatorElement);
            })


            const postMedias = post.querySelector(".post-medias");
            const mediaIndicatorElement = post.querySelectorAll(".post-indicator")
            const mediaIntersectionObserver = new IntersectionObserver(

                function(entries){
                    entries.forEach(entry => {

                        if(entry.isIntersecting){
                            mediaIndicatorElement.forEach(indicator => {
                                indicator.classList.remove("active");
                            });
                        mediaIndicatorElement[
                            Array.from(postMedia).indexOf(entry.target)
                        ].classList.add("active");
                        }
                    });
                },
                { root: postMedias, threshold: 0.5 }
            );

            const postMedia = post.querySelectorAll('.post-media');
            postMedia.forEach((media) => {
                mediaIntersectionObserver.observe(media);
            });

        };   
    });

    posts.forEach((post) => {
        if (post.querySelectorAll('.post-media').length > 1) {
          const leftButtonElement = document.createElement('button');
          leftButtonElement.classList.add('post__left-button');
          leftButtonElement.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#fff" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path>
            </svg>
          `;
      
          const rightButtonElement = document.createElement('button');
          rightButtonElement.classList.add('post__right-button');
          rightButtonElement.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#fff" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
            </svg>
          `;

          post.querySelector(".post-content").appendChild(leftButtonElement);
          post.querySelector(".post-content").appendChild(rightButtonElement);

        }
    });

    posts.forEach((post) => {
        if(post.querySelectorAll(".post-media").length > 1){
            const leftButton = post.querySelector(".post__left-button");
            const rightButton = post.querySelector(".post__right-button");
            const postMediaContainer = post.querySelector(".post-medias");

            leftButton.addEventListener('click', () => {
                    postMediaContainer.scrollLeft -= 500;
              });
              rightButton.addEventListener('click', () => {
                    postMediaContainer.scrollLeft += 500;
              });   
    
        }
    });
});
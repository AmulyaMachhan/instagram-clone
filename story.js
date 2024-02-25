document.addEventListener("DOMContentLoaded" , function(){

    const storyContainer = document.getElementsByClassName("stories-content")[0];
    const stories = [
        {username : "Ethan Turner" , userProfile : "images/profile-picture-2.jpg" , hasStory : true },
        {username : "Olivia Bennett" , userProfile : "images/profile-picture-4.jpg" , hasStory : true },
        {username : "Jackson Rodriguez" , userProfile : "images/profile-picture-3.jpg" , hasStory : true },
        {username : "Ava Hayes" , userProfile : "images/profile-picture-5.jpg" ,hasStory : false},
        {username : "Liam Parker" , userProfile : "images/profile-picture-6.jpg" , hasStory : false},
        {username : "Mia Thompson" , userProfile : "images/profile-picture-7.jpg" , hasStory : false},
        {username : "Noah Sanchez" , userProfile : "images/profile-picture-8.jpg" , hasStory : false},
        {username : "Sophia Williams" , userProfile : "images/profile-picture-9.jpg" , hasStory : false},
        {username : "Aiden Taylor" , userProfile : "images/profile-picture-10.jpg" , hasStory : false},
        {username : "Isabella Mitchell" , userProfile : "images/profile-picture-11.jpg" , hasStory : false},
        {username : "" , userProfile : "images/profile-picture-12.jpg" , hasStory : false},
        {username : "" , userProfile : "images/profile-picture-13.jpg" , hasStory : false},
    ];

    
    stories.forEach( storyData =>{
        const story = createStory(storyData);
        storyContainer.appendChild(story);
    });

    function createStory(storyData){
        const story = document.createElement("button");
        story.classList.add("story");

        if(storyData.hasStory){
            story.classList.add("story--has-story");
        }

        story.innerHTML =
            `<div class="story-avatar">
                <div class="story-border">
                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" >
                        <circle r="31" cy="32" cx="32" />
                    </svg>
                </div>
                <div class="story-picture">
                    <img src="${storyData.userProfile}" alt="User Picture" />
                </div>
            </div>
            <span class="story-user">${storyData.username}</span>`;

        return story;
    }

});
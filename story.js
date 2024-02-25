document.addEventListener("DOMContentLoaded" , function(){

    const storyContainer = document.getElementsByClassName("stories-content")[0];
    const stories = [
        {username : "Ethan Turner" , userProfile : "images/default-user.png" , hasStory : true },
        {username : "Olivia Bennett" , userProfile : "images/default-user.png" , hasStory : true },
        {username : "Jackson Rodriguez" , userProfile : "images/default-user.png" , hasStory : true },
        {username : "Ava Hayes" , userProfile : "images/default-user.png" , hasStory : false},
        {username : "Liam Parker" , userProfile : "images/default-user.png" , hasStory : false},
        {username : "Mia Thompson" , userProfile : "images/default-user.png" , hasStory : false},
        {username : "Noah Sanchez" , userProfile : "images/default-user.png" , hasStory : false},
        {username : "Sophia Williams" , userProfile : "images/default-user.png" , hasStory : false},
        {username : "Aiden Taylor" , userProfile : "images/default-user.png" , hasStory : false},
        {username : "Isabella Mitchell" , userProfile : "images/default-user.png" , hasStory : false},
        {username : "" , userProfile : "images/default-user.png" , hasStory : false},
        {username : "" , userProfile : "images/default-user.png" , hasStory : false},
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
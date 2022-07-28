
class Dog {
    constructor(data){
        Object.assign(this, data)

        this.like = this.hasBeenLiked;
        this.dislike = this.hasBeenSwiped;
    }

    likeMatch(){
        this.like = true;
        this.dislike = false;
    }

    dislikeMatch(){
        this.like = false;
        this.dislike = true;
    }

    getNewMatch(){
        const {avatar, name, age, bio, setBadge} = this
        return `<img src=${avatar} alt="Dog image" class="main">
        <img src=${this.like && !this.dislike ? "images/badge-like.png"
        :!this.like && this.dislike ? "images/badge-nope.png"
        :"#"} alt=" " class="badge">
        <h2 class="name">${name}, ${age}</h2>
        <p class="about">${bio}</p>`
        
    }
}

export default Dog;
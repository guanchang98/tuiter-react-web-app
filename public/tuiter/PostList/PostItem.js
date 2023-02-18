const PostItem = (post) => {
    return post.cardContent !== "" ? (
        `
            <div class="row border-secondary border-bottom mb-3">
                <div class="col-1">
                    <img class="w-125 rounded-circle" src=${post.avatar}>
                </div>
                <div class="col-11">
                    <div class="row">
                        <div class="col-11">
                            <b class="fg-white">${post.userName}</b>
                            <i class="fa fa-check-circle fg-white"></i>
                            <span>@${post.handle} · ${post.time}</span>
                        </div>
                        <div class="col-1">
                            <i class="fa fa-ellipsis-h float-right"></i>
                        </div>
                    </div>
                    <div class="mb-2">
                        ${post.tweetContent}
                    </div>
                    <div class="card mb-3 border-secondary">
                        <img class="border-radius-top" src=${post.cardImage}>
                        <div class="card-body bg-black border-top border-radius-bottom border-secondary">
                            <h6 class="card-title">${post.cardContent.title}</h6>
                            <p class="card-text">${post.cardContent.text}</p>
                            <a href="#">
                                <i class="fa fa-link text-secondary">${post.cardContent.link}</i>
                            </a>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-3">
                            <i class="fa fa-comment"></i>
                            <span class="m-lg-2">${post.commentCount}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-retweet"></i>
                            <span class="m-lg-2">${post.retweetCount}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-heart"></i>
                            <span class="m-lg-2">${post.likeCount}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
    ) : (`
            <div class="row border-secondary border-bottom mb-3">
                <div class="col-1">
                    <img class="w-125 rounded-circle" src=${post.avatar}>
                </div>
                <div class="col-11">
                    <div class="row">
                        <div class="col-11">
                            <b class="fg-white">${post.userName}</b>
                            <i class="fa fa-check-circle fg-white"></i>
                            <span>@${post.handle} · ${post.time}</span>
                        </div>
                        <div class="col-1">
                            <i class="fa fa-ellipsis-h float-right"></i>
                        </div>
                    </div>
                    <div class="mb-2">
                        ${post.tweetContent}
                    </div>
                    <div class="card mb-3 border-secondary">
                        <img class="border-radius" src=${post.cardImage}>
                    </div>
                    <div class="row mb-3">
                        <div class="col-3">
                            <i class="fa fa-comment"></i>
                            <span class="m-lg-2">${post.commentCount}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-retweet"></i>
                            <span class="m-lg-2">${post.retweetCount}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-heart"></i>
                            <span class="m-lg-2">${post.likeCount}</span>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        `)
}

export default PostItem;
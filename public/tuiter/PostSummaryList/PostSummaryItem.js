const PostSummaryItem = (post) => {
    return (
        `
            <div class="list-group-item list-group-item-action">
              <div class="flex-container">
                <div class="flex-child-85per">
                  <span class="text-secondary">${post.topic}</span><br/>
                  <span>
                                        <b>${post.userName}</b>
                                    </span>
                  <span>
                                        <i class="fa fa-check-circle"></i>
                                    </span>
                  <span class="text-secondary">
                                        - ${post.time}
                                    </span>
                  <p class="card-text">
                    <b>${post.title}</b>
                  </p>
                </div>
                <div class="flex-child-15per">
                  <img class="image-size" src=${post.image}>
                </div>
              </div>
            </div>
        `
    )
}

export default PostSummaryItem;
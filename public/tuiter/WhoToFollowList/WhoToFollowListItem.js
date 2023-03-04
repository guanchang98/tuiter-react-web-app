const WhoToFollowListItem = (who) => {
    return(
        `
            <div class="list-group-item list-group-item-action">
        <div class="flex-container">
          <div class="flex-child-icon">
            <img class="icon-size" src=${who.avatarIcon}/>
          </div>
          <div class="flex-child-text">
                        <span>
                            <b>${who.userName}</b>
                        </span>
            <span>
                            <i class="fa fa-check-circle"></i>
                        </span><br/>
            <span>@${who.handle}</span>
          </div>
          <div class="flex-child-button">
            <button class="btn btn-primary rounded-pill">
              Follow
            </button>
          </div>
        </div>
      </div>
        `
    )
}

export default WhoToFollowListItem;
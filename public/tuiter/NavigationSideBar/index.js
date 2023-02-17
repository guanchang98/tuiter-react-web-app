const NavigationSideBar = () => {
    return (`
        <div class="list-group mb-3">
        <a class="list-group-item list-group-item-action" href="#">
          <img class="wd-width-25" src="../../images/tuiter-icon-white-2.png"/>
        </a>
        <a class="list-group-item list-group-item-action" href="#">
          <i class="fa fa-home"></i>
          <span class="d-none d-xl-inline-block">Home</span>
        </a>
        <a class="list-group-item list-group-item-action active" href="#">
          <i class="fa fa-hashtag"></i>
          <span class="d-none d-xl-inline-block">Explore</span>
        </a>
        <a class="list-group-item list-group-item-action" href="#">
          <i class="fa fa-bell"></i>
          <span class="d-none d-xl-inline-block">Notifications</span>
        </a>
        <a class="list-group-item list-group-item-action" href="#">
          <i class="fa fa-envelope"></i>
          <span class="d-none d-xl-inline-block">Messages</span>
        </a>
        <a class="list-group-item list-group-item-action" href="#">
          <i class="fa fa-bookmark"></i>
          <span class="d-none d-xl-inline-block">Bookmarks</span>
        </a>
        <a class="list-group-item list-group-item-action" href="#">
          <i class="fa fa-list"></i>
          <span class="d-none d-xl-inline-block">Lists</span>
        </a>
        <a class="list-group-item list-group-item-action" href="#">
          <i class="fa fa-user"></i>
          <span class="d-none d-xl-inline-block">Profile</span>
        </a>
        <a class="list-group-item list-group-item-action" href="#">
          <i class="fa fa-ellipsis-h"></i>
          <span class="d-none d-xl-inline-block">More</span>
        </a>
      </div>
      <div class="d-grid">
        <button class="btn btn-primary rounded-pill" type="submit">Tuit</button>
      </div>
    `)
}

export default NavigationSideBar;
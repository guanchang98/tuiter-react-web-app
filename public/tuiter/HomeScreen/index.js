import NavigationSideBar from "../NavigationSideBar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

function HomeComponent() {
    $("#wd-home").append(`
        <div class="row mt-2">
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
        ${NavigationSideBar("home")}
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10">
        ${PostList()}
   </div>
   <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
        ${PostSummaryList()}
   </div>
  </div>
    `)
}

$(HomeComponent);
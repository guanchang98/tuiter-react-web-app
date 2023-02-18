import NavigationSideBar from "../NavigationSideBar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
function exploreComponent() {
    $('#wd-explore').append(`
<!--       <h2>Explore</h2>-->
       <div class="row mt-2">
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
        ${NavigationSideBar("explore")}
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10">
        ${ExploreComponent()}
   </div>
   <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
        ${WhoToFollowList()}
   </div>
  </div>

   `);
}

$(exploreComponent);
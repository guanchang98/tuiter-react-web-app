import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (
        `
            <div class="container">
                <div class="row">
                    <div class="row mb-3">
          <div class="form col-xxl-11 col-xl-10 col-lg-9 col-md-8 col-sm-7 col-6">
            <i class="fa fa-search"></i>
            <input class="form-control form-input" placeholder="Search Tuit" type="text">
          </div>
          <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6">
            <i class="fa fa-cog fa-2x text-primary ms-4 mt-1"></i>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
              </li>
              <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
              </li>
            </ul>
          </div>
        </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="card">
              <img alt="..."
                   class="card-img-top" src="../../images/explore-starship.webp">
              <b class="bottom-left font-size-2em">SpaceX's Starship</b>
            </div>
                    ${PostSummaryList()}
                </div>
            </div>
                
            
        `
    )
}

export default ExploreComponent;
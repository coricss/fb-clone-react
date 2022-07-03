import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="text-white main">
      <div class="profile-banner container">
        <div class="bg-gradient">
          <img class="cover-photo-blur" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/281760244_131735369478281_4675034444981101912_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF1ll85t2Uai6nJNHQsdN9JhLUEPCjNO6WEtQQ8KM07pbnBlBOwIgxz-2yfjVYF-HZsFKHMQsb4TOg1jm6IJgem&_nc_ohc=e9p5g0RUQxgAX_24w2h&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT_VO1xA4YWfnA5WOBhZeZ8-KrSrRw4tcWsKHATEZB1NSw&oe=62C5E834" />
        </div>
        <div class="cover-photo-wrapper">
          <img class="cover-photo" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/281760244_131735369478281_4675034444981101912_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF1ll85t2Uai6nJNHQsdN9JhLUEPCjNO6WEtQQ8KM07pbnBlBOwIgxz-2yfjVYF-HZsFKHMQsb4TOg1jm6IJgem&_nc_ohc=e9p5g0RUQxgAX_24w2h&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT_VO1xA4YWfnA5WOBhZeZ8-KrSrRw4tcWsKHATEZB1NSw&oe=62C5E834" />
          <button class="btn btn-light btn-edit-cover d-flex align-items-center"> 
            <i class='bx bxs-camera fs-5' ></i>
            <span class="mx-2">Edit cover photo</span>
          </button>
        </div>
        <div class="profile-container">
          <div class="profile-wrapper d-flex justify-content-between">
            <div class="d-flex">
              <img class="profile-picture rounded-circle" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg"/>
              <div class="edit-photo rounded-circle">
                <i class='bx bxs-camera fs-5 p-2'></i>
              </div>
              <div class="profile-info mt-3">
                <div class="mx-4">
                  <h1 class="m-0 fw-bold">Rico Guinanao</h1>
                  <h5 class="text-gray">1K friends</h5>
                  <ul class="d-flex list-unstyled">
                    <li class="m-0 friend-list one">
                      <img class="friend-pics rounded-circle" width="40px" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFaLukDuY4UvshdS2g13yZQQyaNjMnA6N9DJo2MycDo31EQvDgKnenw7HTzBjYugqbmX7hG36og_y33OSQGoCIL&_nc_ohc=x5UfOxi1D1kAX_36de3&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT94lIdULCMNCH7BDZkK44hioYW4yxklZ3eBf2Kd_4BTOw&oe=62E711D6" />
                    </li>
                    <li class="m-0 friend-list two">
                      <img class="friend-pics rounded-circle" width="40px" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" />
                    </li>
                    <li class="m-0 friend-list three">
                      <img class="friend-pics rounded-circle" width="40px" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" />
                    </li>
                    <li class="m-0 friend-list four">
                      <img class="friend-pics rounded-circle" width="40px" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" />
                    </li>
                    <li class="m-0 friend-list five">
                      <img class="friend-pics rounded-circle" width="40px" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" />
                    </li>
                    <li class="m-0 friend-list six">
                      <img class="friend-pics rounded-circle" width="40px" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" />
                    </li>
                    <li class="m-0 friend-list seven">
                      <img class="friend-pics rounded-circle" width="40px" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" />
                    </li>
                    <li class="m-0 friend-list eight">
                      <img class="friend-pics rounded-circle" width="40px" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="btns d-flex">
              <button class="btn btn-primary h-25 d-flex align-items-center"> 
                <i class='bx bxs-plus-circle fs-5'></i>
                <span class="mx-1">Add to story</span>
              </button>
              <button class="btn btn-secondary h-25 mx-2 d-flex align-items-center"> 
                <i class='bx bxs-pencil fs-5'></i>
                <span class="mx-1">Edit profile</span>
              </button>
            </div>
          </div>
        </div>
        <hr class="m-0 mt-3"></hr>
      </div>
      <div class="profile-nav bg-gray p-2">
        <div class="container d-flex justify-content-between align-items-center">
          <ul class="d-flex list-unstyled m-0">
            <li class="m-0">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Posts</span>
              </div>
            </li>
            <li class="m-0">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">About</span>
              </div>
            </li>
            <li class="m-0">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Friends</span>
              </div>
            </li>
            <li class="m-0">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Photos</span>
              </div>
            </li>
            <li class="m-0">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Videos</span>
              </div>
            </li>
            <li class="m-0">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Check-ins</span>
              </div>
            </li>
            <li class="m-0">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold d-flex align-items-center">
                  More&nbsp; 
                  <i class='bx bxs-chevron-down'></i>
                </span>
              </div>
            </li>
          </ul>
          <button class="btn btn-secondary">
            <i class='bx bx-dots-horizontal-rounded' ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

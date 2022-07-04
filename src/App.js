import './App.css';

function App() {
  return (
    <div class="text-white main">
      <div class="profile-banner container">
        <div class="bg-gradient">
          <img class="cover-photo-blur" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/281760244_131735369478281_4675034444981101912_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF1ll85t2Uai6nJNHQsdN9JhLUEPCjNO6WEtQQ8KM07pbnBlBOwIgxz-2yfjVYF-HZsFKHMQsb4TOg1jm6IJgem&_nc_ohc=e9p5g0RUQxgAX_24w2h&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT_VO1xA4YWfnA5WOBhZeZ8-KrSrRw4tcWsKHATEZB1NSw&oe=62C5E834"  alt=""/>
        </div>
        <div class="cover-photo-wrapper">
          <img class="cover-photo" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/281760244_131735369478281_4675034444981101912_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF1ll85t2Uai6nJNHQsdN9JhLUEPCjNO6WEtQQ8KM07pbnBlBOwIgxz-2yfjVYF-HZsFKHMQsb4TOg1jm6IJgem&_nc_ohc=e9p5g0RUQxgAX_24w2h&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT_VO1xA4YWfnA5WOBhZeZ8-KrSrRw4tcWsKHATEZB1NSw&oe=62C5E834"  alt=""/>
          <button class="btn btn-light btn-edit-cover d-flex align-items-center"> 
            <i class='bx bxs-camera fs-5' ></i>
            <span class="mx-2">Edit cover photo</span>
          </button>
        </div>
        <div class="profile-container">
          <div class="profile-wrapper d-flex justify-content-between">
            <div class="d-flex">
              <img class="profile-picture rounded-circle" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <div class="edit-photo rounded-circle">
                <i class='bx bxs-camera fs-5 p-2'></i>
              </div>
              <div class="profile-info mt-3">
                <div class="mx-4">
                  <h1 class="m-0 fw-bold">Rico Guinanao</h1>
                  <h5 class="text-gray">1K friends</h5>
                  <ul class="d-flex list-unstyled">
                    <li class="m-0 friend-list one">
                      <img class="friend-pics rounded-circle" width="40px" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFaLukDuY4UvshdS2g13yZQQyaNjMnA6N9DJo2MycDo31EQvDgKnenw7HTzBjYugqbmX7hG36og_y33OSQGoCIL&_nc_ohc=x5UfOxi1D1kAX_36de3&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT94lIdULCMNCH7BDZkK44hioYW4yxklZ3eBf2Kd_4BTOw&oe=62E711D6" alt="" />
                    </li>
                    <li class="m-0 friend-list two">
                      <img class="friend-pics rounded-circle" width="40px" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" alt="" />
                    </li>
                    <li class="m-0 friend-list three">
                      <img class="friend-pics rounded-circle" width="40px" src="https://pbs.twimg.com/profile_images/1520776623972356097/DKttTgse_400x400.jpg" alt="" />
                    </li>
                    <li class="m-0 friend-list four">
                      <img class="friend-pics rounded-circle" width="40px" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-1/274054035_502374894586781_4269170301085168965_n.jpg?stp=c146.85.794.794a_dst-jpg_s160x160&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeG3nOfXhJnGp_zCyHsvc5_2_Wf7S1TEJ0P9Z_tLVMQnQ4yyHlJdbO44hf_JHVgADL6rlxdf86gjxazpdKm9wfKM&_nc_ohc=hzcmWhsHMmoAX-kfGO3&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT9VVTHH_SFrbH_4l66AfrWaMoyv9Yjo6EaXFrSVKuG7mA&oe=62C776B1" alt="" />
                    </li>
                    <li class="m-0 friend-list five">
                      <img class="friend-pics rounded-circle" width="40px" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5ODc2NTUzODU1ODcwOTY1/gettyimages-83414114.jpg" alt="" />
                    </li>
                    <li class="m-0 friend-list six">
                      <img class="friend-pics rounded-circle" width="40px" src="https://pbs.twimg.com/profile_images/825622525342199809/_iAaSUQf_400x400.jpg" alt="" />
                    </li>
                    <li class="m-0 friend-list seven">
                      <img class="friend-pics rounded-circle" width="40px" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMjk3MDM3ODY1MDM1NjI4/gettyimages-847438962-copy.jpg" alt="" />
                    </li>
                    <li class="m-0 friend-list eight">
                      <img class="friend-pics rounded-circle" width="40px" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/169668637_155606523116836_7757732769327022547_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFo6p31hmoSx3vw3yPlew4O8TwhNCSp1ivxPCE0JKnWK7eMfEppaqHwWQliA-FT7eHcHU2ARNS6wkuxQ_5zjLpI&_nc_ohc=gou5DOl4mP8AX9ruDg8&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT9qGZ1MrFDnypxo1VladnguDodB6ara3ntlTj9iua_uKQ&oe=62E86067" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="btns d-flex">
              <button class="btn btn-primary d-flex align-items-center"> 
                <i class='bx bxs-plus-circle fs-5'></i>
                <span class="mx-1">Add to story</span>
              </button>
              <button class="btn btn-gray text-white mx-2 d-flex align-items-center"> 
                <i class='bx bxs-pencil fs-5'></i>
                <span class="mx-1">Edit profile</span>
              </button>
            </div>
          </div>
        </div>
        <hr class="m-1 mt-3"></hr>
      </div>
      <div class="profile-nav bg-gray">
        <div class="container d-flex justify-content-between align-items-center">
          <ul class="d-flex list-unstyled m-0">
            <li class="m-0 nav-active p-2">
              <div class="nav-items-active rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold text-primary">Posts</span>
              </div>
            </li>
            <li class="pb-1">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">About</span>
              </div>
            </li>
            <li class="pb-1">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Friends</span>
              </div>
            </li>
            <li class="pb-1">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Photos</span>
              </div>
            </li>
            <li class="pb-1">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Videos</span>
              </div>
            </li>
            <li class="pb-1">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold">Check-ins</span>
              </div>
            </li>
            <li class="pb-1">
              <div class="nav-items rounded d-flex align-items-center">
                <span class="m-0 fs-6 px-3 py-2 fw-bold d-flex align-items-center">
                  More&nbsp; 
                  <i class='bx bxs-chevron-down'></i>
                </span>
              </div>
            </li>
          </ul>
          <button class="btn btn-gray text-white">
            <i class='bx bx-dots-horizontal-rounded' ></i>
          </button>
        </div>
      </div>
      <div class="profile-hidden d-none bg-gray">
        <div class="container d-flex justify-content-between align-items-center py-1">
          <button class="btn btn-contents text-white d-flex align-items-center px-2 py-1">
            <img class="rounded-circle" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt="Profile" width="40px"/>
            <h5 class="fw-bold">&nbsp;&nbsp;Rico Guinanao</h5>
          </button>
          <button class="btn btn-gray text-white">
            <i class='bx bx-dots-horizontal-rounded' ></i>
          </button>
        </div>
      </div>
    </div>
  );

  
}


export default App;

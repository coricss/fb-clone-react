import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppContent.module.css';
import './AppContent.css';

const AppContent = () => (
  <div className={styles.AppContent} data-testid="AppContent">
    <div class="container text-white">
      <div class="row gx-3">
        <div class="col-md-5 side-component">
          <div class="bg-gray rounded my-3 p-3">
            <h4 class="fw-bold">Intro</h4>
            <button class="btn btn-gray w-100 text-white my-3">
             <span>Add Bio</span>
            </button>
            <div class="d-flex align-items-center mb-3">
              <i class='bx bxs-graduation fs-4'></i>
              <span class="mx-2">Studies Bachelor of Science in Information Technology at <a class="fw-bold text-white text-decoration-none" href="#">City College of Calamba</a></span>
            </div>
            <div class="d-flex align-items-center my-3">
              <i class='bx bxs-home fs-4'></i>
              <span class="mx-2">Lives in <a class="fw-bold text-white text-decoration-none" href="#">Calamba, Laguna</a></span>
            </div>
            <div class="d-flex align-items-center my-3">
              <i class='bx bxs-time-five fs-4' ></i>
              <span class="mx-2">Joined November 2011</span>
            </div>
            <button class="btn btn-gray w-100 text-white mb-4">
             <span>Edit details</span>
            </button>
            <button class="btn btn-gray w-100 text-white mb-4">
             <span> Add Hobbies</span>
            </button>
            <button class="btn btn-gray w-100 text-white mb-2">
             <span> Add Featured</span>
            </button>
          </div>
          <div class="bg-gray rounded mt-3 mb-2 p-3">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="fw-bold">Photos</h4>
              <button class="btn btn-contents text-primary">See all photos</button>
            </div>
            <div class="photo-container">
              <div class="photos">
                <div class="photo">
                  <img src="https://picsum.photos/id/23/150/150" alt=""/>
                </div>
                <div class="photo">
                  <img src="https://picsum.photos/id/22/150/150" alt=""/>
                </div>
                <div class="photo">
                  <img src="https://picsum.photos/id/20/150/150" alt=""/>
                </div>
                <div class="photo">
                  <img src="https://picsum.photos/id/1/150/150" alt=""/>
                </div>
                <div class="photo">
                  <img src="https://picsum.photos/id/2/150/150" alt=""/>
                </div>
                <div class="photo">
                  <img src="https://picsum.photos/id/4/150/150" alt=""/>
                </div>
                <div class="photo">
                  <img src="https://picsum.photos/id/7/150/150" alt=""/>
                </div>
                <div class="photo">
                  <img src="https://picsum.photos/id/10/150/150" alt=""/>
                </div>
                <div class="photo">
                  <img src="https://picsum.photos/id/12/150/150" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div class="mini-footer mb-3">
            <small class="fw-light">
              <a href="#" class="text-decoration-none text-white">
                Privacy   · Terms   ·  Advertising ·  Ad Choices  ·  Cookies   ·  More   ·  Meta © 2022
              </a>     
            </small>
          </div>
        </div>
        <div class="col-md-7">
          <div class="bg-gray rounded my-3 p-3">
            <div class="d-flex align-items-center mb-3">
              <img class="mini-profile rounded-circle" width="40px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <input class="form-control w-100 mx-2 text-white whats-on-your-mind" type="text" placeholder="What's on your mind?"/>
            </div>
            <hr></hr>
            <div class="d-flex align-items-center justify-content-between">
              <button class="btn btn-contents text-primary w-50 d-flex align-items-center justify-content-center py-2">
                <i class='bx bxs-camera-movie fs-4 text-danger'></i>
                <span class="mx-2 text-white">Live video</span>
              </button>
              <button class="btn btn-contents text-primary w-50 d-flex align-items-center justify-content-center py-2">
                <i class='bx bx-images fs-4 text-success'></i>
                <span class="mx-2 text-white">Photo/video</span>
              </button>
              <button class="btn btn-contents text-primary w-50 d-flex align-items-center justify-content-center py-2">
                <i class='bx bxs-flag-alt fs-4 text-info'></i>
                <span class="mx-2 text-white">Life event</span>
              </button>
            </div>
          </div>
          <div class="bg-gray rounded my-3 pt-3">
            <div class="d-flex align-items-center justify-content-between mb-3 mx-3">
              <h4 class="fw-bold">Posts</h4>
              <div class="d-flex">
                <button class="btn btn-gray text-white d-flex align-items-center mx-2">
                  <i class='bx bx-slider-alt'></i>
                  <span class="mx-1">Filters</span>
                </button>
                <button class="btn btn-gray text-white d-flex align-items-center">
                  <i class='bx bxs-cog' ></i>
                  <span class="mx-1">Manage Posts</span>
                </button>
              </div>
            </div>
            <hr class="m-1 mt-3"></hr>
            <div class="d-flex align-items-center justify-content-between mx-3">
              <button class="btn btn-active text-primary w-50 d-flex align-items-center justify-content-center">
                <i class='bx bx-menu fs-5 mx-1'></i>
                <span>List view</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                <i class='bx bxs-grid-alt fs-5 mx-1' ></i>
                <span>Grid view</span>
              </button>
            </div>
          </div>
          <div class="bg-gray rounded my-3 pb-3">
            <div class="d-flex align-items-center justify-content-between mb-2 px-3 pt-3">
              <div class="d-flex align-items-center">
                <img class="mini-profile rounded-circle" width="40px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
                <div class="mx-2">
                  <h6 class="fw-bold mb-0 post-name">Rico Guinanao</h6>
                  <div class="time-ago d-flex align-items-center text-gray">
                    <small>23m ·</small>
                    <i class='bx bx-world mx-1'></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-contents text-white rounded-circle">
                <i class='bx bx-dots-horizontal-rounded py-1' ></i>
              </button>
            </div>
            <div clas="caption">
              <p class="text-light px-3">
                One of my passion is <b>programming</b>.
              </p>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://thatrandomwarlordbloghome.files.wordpress.com/2019/07/computer-programming.jpg" alt=""/>
            </div>
            <div class="reaction d-flex align-items-center px-3 py-1">
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-like fs-5 mx-2'></i>
                  <span>Like</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-comment fs-5 mx-2'></i>
                  <span>Comment</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-share bx-flip-horizontal fs-5 mx-2'></i>
                  <span>Share</span>
              </button>
            </div>
            <hr class="mx-3 mt-0"></hr>
            <div class="d-flex align-items-center justify-content-between mx-3 position-relative">
              <img class="mini-profile rounded-circle" width="30px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <input class="form-control w-100 mx-2 text-white write-comment" type="text" placeholder="Write a comment..."/>
              <div class="d-flex align-items-center stickers">
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-smile text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-camera text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-sticker text-light' ></i>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-gray rounded my-3 pb-3">
            <div class="d-flex align-items-center justify-content-between mb-2 px-3 pt-3">
              <div class="d-flex align-items-center">
                <img class="mini-profile rounded-circle" width="40px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
                <div class="mx-2">
                  <h6 class="fw-bold mb-0 post-name">Rico Guinanao</h6>
                  <div class="time-ago d-flex align-items-center text-gray">
                    <small>50m ·</small>
                    <i class='bx bx-world mx-1'></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-contents text-white rounded-circle">
                <i class='bx bx-dots-horizontal-rounded py-1' ></i>
              </button>
            </div>
            <div clas="caption">
              <p class="text-light px-3">
                I also like solving puzzles such as <b>rubics cube, tower of hanoi, sudoku, etc</b>.
              </p>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ALD5N5QS74I6XISYMFFM6K4QNU.jpg&w=916" alt=""/>
            </div>
            <div class="reaction d-flex align-items-center px-3 py-1">
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-like fs-5 mx-2'></i>
                  <span>Like</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-comment fs-5 mx-2'></i>
                  <span>Comment</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-share bx-flip-horizontal fs-5 mx-2'></i>
                  <span>Share</span>
              </button>
            </div>
            <hr class="mx-3 mt-0"></hr>
            <div class="d-flex align-items-center justify-content-between mx-3 position-relative">
              <img class="mini-profile rounded-circle" width="30px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <input class="form-control w-100 mx-2 text-white write-comment" type="text" placeholder="Write a comment..."/>
              <div class="d-flex align-items-center stickers">
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-smile text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-camera text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-sticker text-light' ></i>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-gray rounded my-3 pb-3">
            <div class="d-flex align-items-center justify-content-between mb-2 px-3 pt-3">
              <div class="d-flex align-items-center">
                <img class="mini-profile rounded-circle" width="40px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
                <div class="mx-2">
                  <h6 class="fw-bold mb-0 post-name">Rico Guinanao</h6>
                  <div class="time-ago d-flex align-items-center text-gray">
                    <small>1h ·</small>
                    <i class='bx bx-world mx-1'></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-contents text-white rounded-circle">
                <i class='bx bx-dots-horizontal-rounded py-1' ></i>
              </button>
            </div>
            <div clas="caption">
              <p class="text-light px-3">
                <b>Listening to music</b> helps me focus and relax. I like listening to <b>rock, pop, r&b, etc</b>.
              </p>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://i.pinimg.com/564x/39/e4/4f/39e44f1e597af59afd6cc3aeddb3737c.jpg" alt=""/>
            </div>
            <div class="reaction d-flex align-items-center px-3 py-1">
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-like fs-5 mx-2'></i>
                  <span>Like</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-comment fs-5 mx-2'></i>
                  <span>Comment</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-share bx-flip-horizontal fs-5 mx-2'></i>
                  <span>Share</span>
              </button>
            </div>
            <hr class="mx-3 mt-0"></hr>
            <div class="d-flex align-items-center justify-content-between mx-3 position-relative">
              <img class="mini-profile rounded-circle" width="30px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <input class="form-control w-100 mx-2 text-white write-comment" type="text" placeholder="Write a comment..."/>
              <div class="d-flex align-items-center stickers">
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-smile text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-camera text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-sticker text-light' ></i>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-gray rounded my-3 pb-3">
            <div class="d-flex align-items-center justify-content-between mb-2 px-3 pt-3">
              <div class="d-flex align-items-center">
                <img class="mini-profile rounded-circle" width="40px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
                <div class="mx-2">
                  <h6 class="fw-bold mb-0 post-name">Rico Guinanao</h6>
                  <div class="time-ago d-flex align-items-center text-gray">
                    <small>3h ·</small>
                    <i class='bx bx-world mx-1'></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-contents text-white rounded-circle">
                <i class='bx bx-dots-horizontal-rounded py-1' ></i>
              </button>
            </div>
            <div clas="caption">
              <p class="text-light px-3">
                I also play video games like <b>Valorant</b>.
              </p>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a31af079-dd3b-4a61-a193-f5599c7cd86b/df0amb2-446170ac-f9d2-4930-8452-6e5e69479597.png/v1/fill/w_1280,h_898,q_80,strp/running_child_neon_meme_by_benjgalutan_df0amb2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EzMWFmMDc5LWRkM2ItNGE2MS1hMTkzLWY1NTk5YzdjZDg2YlwvZGYwYW1iMi00NDYxNzBhYy1mOWQyLTQ5MzAtODQ1Mi02ZTVlNjk0Nzk1OTcucG5nIiwiaGVpZ2h0IjoiPD04OTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9hMzFhZjA3OS1kZDNiLTRhNjEtYTE5My1mNTU5OWM3Y2Q4NmJcL2JlbmpnYWx1dGFuLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.eBHRgHsgxcxSmW5cKKIY8COpQ1BdeiS9lUtBU1WcyIc" alt=""/>
            </div>
            <div class="reaction d-flex align-items-center px-3 py-1">
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-like fs-5 mx-2'></i>
                  <span>Like</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-comment fs-5 mx-2'></i>
                  <span>Comment</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-share bx-flip-horizontal fs-5 mx-2'></i>
                  <span>Share</span>
              </button>
            </div>
            <hr class="mx-3 mt-0"></hr>
            <div class="d-flex align-items-center justify-content-between mx-3 position-relative">
              <img class="mini-profile rounded-circle" width="30px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <input class="form-control w-100 mx-2 text-white write-comment" type="text" placeholder="Write a comment..."/>
              <div class="d-flex align-items-center stickers">
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-smile text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-camera text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-sticker text-light' ></i>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-gray rounded my-3 pb-3">
            <div class="d-flex align-items-center justify-content-between mb-2 px-3 pt-3">
              <div class="d-flex align-items-center">
                <img class="mini-profile rounded-circle" width="40px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
                <div class="mx-2">
                  <h6 class="fw-bold mb-0 post-name">Rico Guinanao</h6>
                  <div class="time-ago d-flex align-items-center text-gray">
                    <small>4h ·</small>
                    <i class='bx bx-world mx-1'></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-contents text-white rounded-circle">
                <i class='bx bx-dots-horizontal-rounded py-1' ></i>
              </button>
            </div>
            <div clas="caption">
              <p class="text-light px-3">
                I like <b>sharing memes about programming</b>.
              </p>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289221232_5349129861774928_7677296607988641186_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEE1g4753_DbbOHmUrDeQwGjY4DRgnNXwyNjgNGCc1fDGdcKm0PoBQpQeXvTaP5JYnti7iJ3oAcP3xMwpCDvytE&_nc_ohc=8RI9pO--X48AX-4Xx1-&tn=qhp73JiY-9OuOXvt&_nc_ht=scontent.fmnl4-4.fna&oh=00_AT-54V9hBUwfLvLfW8be5iPBxLXyblqb_hxHGgtE33h8nw&oe=62C6C9D6" alt=""/>
            </div>
            <div class="reaction d-flex align-items-center px-3 py-1">
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-like fs-5 mx-2'></i>
                  <span>Like</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-comment fs-5 mx-2'></i>
                  <span>Comment</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-share bx-flip-horizontal fs-5 mx-2'></i>
                  <span>Share</span>
              </button>
            </div>
            <hr class="mx-3 mt-0"></hr>
            <div class="d-flex align-items-center justify-content-between mx-3 position-relative">
              <img class="mini-profile rounded-circle" width="30px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <input class="form-control w-100 mx-2 text-white write-comment" type="text" placeholder="Write a comment..."/>
              <div class="d-flex align-items-center stickers">
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-smile text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-camera text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-sticker text-light' ></i>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-gray rounded my-3 pb-3">
            <div class="d-flex align-items-center justify-content-between mb-2 px-3 pt-3">
              <div class="d-flex align-items-center">
                <img class="mini-profile rounded-circle" width="40px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
                <div class="mx-2">
                  <h6 class="fw-bold mb-0 post-name">Rico Guinanao</h6>
                  <div class="time-ago d-flex align-items-center text-gray">
                    <small>4h ·</small>
                    <i class='bx bx-world mx-1'></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-contents text-white rounded-circle">
                <i class='bx bx-dots-horizontal-rounded py-1' ></i>
              </button>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/288270619_5160173327364837_4394928560467246637_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF24Kor-G9ym6UfvSZwRestjIFygQAPjB-MgXKBAA-MH5qTWXptwQOsKIKkSe0VsD5SnLrt3fP5n4s_-9NXXl2m&_nc_ohc=-27CkWgGUQUAX9eyyLe&_nc_ht=scontent.fmnl4-6.fna&oh=00_AT9gAFiAQ1_FwAluRj3-DJXmNq7C4cmj-rR74rvbnL-TFQ&oe=62C711E3" alt=""/>
            </div>
            <div class="reaction d-flex align-items-center px-3 py-1">
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-like fs-5 mx-2'></i>
                  <span>Like</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-comment fs-5 mx-2'></i>
                  <span>Comment</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-share bx-flip-horizontal fs-5 mx-2'></i>
                  <span>Share</span>
              </button>
            </div>
            <hr class="mx-3 mt-0"></hr>
            <div class="d-flex align-items-center justify-content-between mx-3 position-relative">
              <img class="mini-profile rounded-circle" width="30px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <input class="form-control w-100 mx-2 text-white write-comment" type="text" placeholder="Write a comment..."/>
              <div class="d-flex align-items-center stickers">
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-smile text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-camera text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-sticker text-light' ></i>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-gray rounded my-3 pb-3">
            <div class="d-flex align-items-center justify-content-between mb-2 px-3 pt-3">
              <div class="d-flex align-items-center">
                <img class="mini-profile rounded-circle" width="40px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
                <div class="mx-2">
                  <h6 class="fw-bold mb-0 post-name">Rico Guinanao</h6>
                  <div class="time-ago d-flex align-items-center text-gray">
                    <small>4h ·</small>
                    <i class='bx bx-world mx-1'></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-contents text-white rounded-circle">
                <i class='bx bx-dots-horizontal-rounded py-1' ></i>
              </button>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/279491783_5017427878306050_3752025031884579350_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH_rcyPLpchIDtOKRdk35XXb1lrjNta3YJvWWuM21rdgr5uub2c5ROCWirarTARjml9cJlgR0qI3ReYX9IDFFcS&_nc_ohc=vkc4-xsJjcQAX_kh7ri&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT874UXZ-9xKsTrPnIIRFkCjJPOwUrePeb1AV0WFEgNl8Q&oe=62C708A6" alt=""/>
            </div>
            <div class="reaction d-flex align-items-center px-3 py-1">
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-like fs-5 mx-2'></i>
                  <span>Like</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-comment fs-5 mx-2'></i>
                  <span>Comment</span>
              </button>
              <button class="btn btn-contents text-white w-50 d-flex align-items-center justify-content-center">
                  <i class='bx bx-share bx-flip-horizontal fs-5 mx-2'></i>
                  <span>Share</span>
              </button>
            </div>
            <hr class="mx-3 mt-0"></hr>
            <div class="d-flex align-items-center justify-content-between mx-3 position-relative">
              <img class="mini-profile rounded-circle" width="30px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
              <input class="form-control w-100 mx-2 text-white write-comment" type="text" placeholder="Write a comment..."/>
              <div class="d-flex align-items-center stickers">
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-smile text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-camera text-light' ></i>
                </button>
                <button class="btn btn-stickers rounded-circle d-flex align-items-center justify-content-center p-2">
                  <i class='bx bx-sticker text-light' ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

AppContent.propTypes = {};

AppContent.defaultProps = {};

export default AppContent;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppContent.module.css';
import './AppContent.css';

//LIKE
//USAGE OF STATE
class AppLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }
  //LIKE
  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }

  render() {
    return(
      <li class="mx-2" onClick={this.handleClick}>
        <b class={this.state.isLiked ? 'text-primary':'text-muted'}>Like</b>
      </li>
    )
  }
}

//MENTION 
//LIST RENDERING
class Mention extends React.Component {

  people = [
    {
      name: 'Bill Gates',
      avatar: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/274054035_502374894586781_4269170301085168965_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2tgthsLJ5RcAX-vs_Bm&_nc_ht=scontent.fmnl25-2.fna&oh=00_AT-A914Ofi8Iq6OeKoCXoMzhEXfjJ9CzQfccrcDGlR5g4Q&oe=62CD0037',
      mutualFriends: '200'
    },
    {
      name: 'Changpeng Zhao',
      avatar: 'https://pbs.twimg.com/profile_images/1520776623972356097/DKttTgse_400x400.jpg',
      mutualFriends: '140'
    },
    {
      name: 'Elon Musk',
      avatar: 'https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg',
      mutualFriends: '310'
    },
    {
      name: 'Jack Ma',
      avatar: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/100968975_10157934214820033_9031535398433587200_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JrJhiizk1jwAX_3qfW0&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT_TnAsQjx_36hX1ERWWd6gWWuGthLb6eX9f187Re7O6pA&oe=62E8297E',
      mutualFriends: '290'
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.author
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  mentionPeople = () => {
    this.peopleArr = this.people.map((person) => 
      (
        <div class="d-flex align-items-center gap-2 p-2 rounded mentioned-person">
          <div>
            <img class="mini-profile rounded-circle" width="35px" src={person.avatar} alt=""/>
          </div>
          <div> 
            <p class="m-0 commentor">{person.name}</p>
            <small class="text-muted">Friend · {person.mutualFriends} mutual friends</small>
          </div>
        </div>
      )
    );
    return this.peopleArr;
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.wrapperRef.current.classList.add('d-none');
    }
  }

  render(){
    //LIST RENDERING
    this.mentionPeople();
    return(
      <div class="mx-5 bg-gray w-50 rounded metioned-wrapper" ref={this.wrapperRef}>
        {this.peopleArr}
      </div>
    )
  }
}

//REPLY FORM
//USAGE OF STATE
class AppReplyForm extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.author
    };
  }

  changeHandle = (e) => {
    this.setState({
      name: e.target.value
    });
  }


  render(){
    return(
      <div class="reply-container">
        <div class="d-flex align-items-center justify-content-between my-2 position-relative reply-wrapper">
          <img class="mini-profile rounded-circle" width="25px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
          <input class="form-control w-100 mx-2 text-white write-comment" type="text" value={this.state.name+''} onChange={this.changeHandle} placeholder="Write a reply..." autoFocus />
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
        {
          //SAMPLE OF CONDITIONAL RENDERING
          this.state.name.match('@') ? <Mention/> : null
        }
      </div>
    )
  }
}

//COMMENTS
//USAGE OF PROPS
class AppComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReplied: false,
      name: this.props.commentor
    };
  }
  //REPLY
  clickReply = () => {
    this.setState({
      isReplied: true
    });
  }

  render() {
    return (
      <div class="mx-3">
        <div class="d-flex">
          <div class="mt-2">
            <img class="mini-profile rounded-circle" width="35px" src={this.props.photo} alt=""/>
          </div>
          <div class="mt-2 mx-2">
            <div class="comment-wrapper px-3 py-2">
              <p class="m-0 commentor">{this.props.commentor}</p>
              <p class="m-0 comment">{this.props.comment}</p>
            </div>
            <ul class="d-flex list-unstyled m-0 text-gray comment-react px-2">
              <AppLike commentor="rcs"/>
              <li class="mx-2" onClick={this.clickReply}>
                <b>Reply</b>
              </li>
              <li class="mx-2">
                <b>Share</b>
              </li>
              <li class="mx-2">
                <span>{this.props.timeAgo}</span>
              </li>
            </ul>
          </div>
        </div>
        {this.state.isReplied ? <AppReplyForm author={this.state.name}/> : null}
      </div>
    );
  }
}

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
          <div class="bg-gray rounded mt-3 mb-2 p-3">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="fw-bold">Friends</h4>
              <button class="btn btn-contents text-primary">See all friends</button>
            </div>
            <span class="text-gray">1,022 friends</span>
            <div class="friend-container">
              <div class="friends">
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFaLukDuY4UvshdS2g13yZQQyaNjMnA6N9DJo2MycDo31EQvDgKnenw7HTzBjYugqbmX7hG36og_y33OSQGoCIL&_nc_ohc=x5UfOxi1D1kAX_36de3&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT94lIdULCMNCH7BDZkK44hioYW4yxklZ3eBf2Kd_4BTOw&oe=62E711D6" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>Mark Zuckerberg</span>
                  </div>
                </div>
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>Elon Musk</span>
                  </div>
                </div>
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://pbs.twimg.com/profile_images/1520776623972356097/DKttTgse_400x400.jpg" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>Changpeng Zhao</span>
                  </div>
                </div>
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/274054035_502374894586781_4269170301085168965_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2tgthsLJ5RcAX-vs_Bm&_nc_ht=scontent.fmnl25-2.fna&oh=00_AT-A914Ofi8Iq6OeKoCXoMzhEXfjJ9CzQfccrcDGlR5g4Q&oe=62CD0037" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>Bill Gates</span>
                  </div>
                </div>
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5ODc2NTUzODU1ODcwOTY1/gettyimages-83414114.jpg" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>Larry Page</span>
                  </div>
                </div>
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://pbs.twimg.com/profile_images/825622525342199809/_iAaSUQf_400x400.jpg" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>Patrick Collison</span>
                  </div>
                </div>
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMjk3MDM3ODY1MDM1NjI4/gettyimages-847438962-copy.jpg" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>Markus Persson</span>
                  </div>
                </div>
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/100968975_10157934214820033_9031535398433587200_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JrJhiizk1jwAX_3qfW0&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT_TnAsQjx_36hX1ERWWd6gWWuGthLb6eX9f187Re7O6pA&oe=62E8297E" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>Jack Ma</span>
                  </div>
                </div>
                <div class="friend mx-1">
                  <div class="friend-photo">
                    <img class="rounded" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/169668637_155606523116836_7757732769327022547_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFo6p31hmoSx3vw3yPlew4O8TwhNCSp1ivxPCE0JKnWK7eMfEppaqHwWQliA-FT7eHcHU2ARNS6wkuxQ_5zjLpI&_nc_ohc=gou5DOl4mP8AX9ruDg8&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT9qGZ1MrFDnypxo1VladnguDodB6ara3ntlTj9iua_uKQ&oe=62E86067" alt=""/>
                  </div>
                  <div class="friend-name">
                    <span class="fw-bold" style={{fontSize: '12px'}}>KodeGo</span>
                  </div>
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
            <AppComment
              photo="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFaLukDuY4UvshdS2g13yZQQyaNjMnA6N9DJo2MycDo31EQvDgKnenw7HTzBjYugqbmX7hG36og_y33OSQGoCIL&_nc_ohc=x5UfOxi1D1kAX_36de3&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT94lIdULCMNCH7BDZkK44hioYW4yxklZ3eBf2Kd_4BTOw&oe=62E711D6" 
              commentor="Mark Zuckerberg" 
              comment="goods yan lods"
              timeAgo="2d"
            />
            <AppComment
              photo="https://mettisglobal.news/wp-content/uploads/2021/02/IMG5410Elon-musk.jpg" 
              commentor="Elon Musk" 
              comment="hack mo nga fb ko?"
              timeAgo="1h"
            />
            <AppComment 
              photo="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/169668637_155606523116836_7757732769327022547_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFo6p31hmoSx3vw3yPlew4O8TwhNCSp1ivxPCE0JKnWK7eMfEppaqHwWQliA-FT7eHcHU2ARNS6wkuxQ_5zjLpI&_nc_ohc=gou5DOl4mP8AX9ruDg8&_nc_ht=scontent.fmnl4-2.fna&oh=00_AT9qGZ1MrFDnypxo1VladnguDodB6ara3ntlTj9iua_uKQ&oe=62E86067" 
              commentor="KodeGo" 
              comment="bigyan ng work yan!"
              timeAgo="3m"
            />
            <div class="d-flex align-items-center justify-content-between mt-3 mx-3 position-relative">
              <img class="mini-profile rounded-circle" width="35px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
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
              <img class="mini-profile rounded-circle" width="35px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
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
              <img class="mini-profile rounded-circle" width="35px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
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
                I also play games like <b>Valorant</b>.
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
              <img class="mini-profile rounded-circle" width="35px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
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
                Magkakalaptop din ako.
              </p>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://picsum.photos/id/2/1000/800" alt=""/>
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
              <img class="mini-profile rounded-circle" width="35px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
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
              <img class="post-image w-100" src="https://picsum.photos/id/5/1000/800" alt=""/>
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
              <img class="mini-profile rounded-circle" width="35px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
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
                Magiging web developer din ako.
              </p>
            </div>
            <div class="post-image-container">
              <img class="post-image w-100" src="https://picsum.photos/id/60/1000/800" alt=""/>
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
              <img class="mini-profile rounded-circle" width="35px" src="https://i.ibb.co/xmz3ggp/1646411370269.jpg" alt=""/>
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

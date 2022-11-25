import logo from "./logo.svg";
import "./App.css";
import {
  FaTwitter,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegUser,
  FaHome,
  FaRegEdit,
  FaEllipsisH,
  FaSearch,
  FaImage,
  FaRegComment,
  FaRetweet,
} from "react-icons/fa";
import { RiFileGifLine } from "react-icons/ri";
import {
  MdOutlinePoll,
  MdSchedule,
  MdOutlineLocationOn,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { BiHappyBeaming } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import GetTimelineFeed from "./tweets";

function MakePost(name, tag, ts, text) {
  return (
    <div className="Post">
      <div className="post-pfp-container">
        <FaRegUser className="post-pfp-icon" />
      </div>
      <div className="post-contents-container">
        <div className="post-info">
          <div className="poster-name">{name}</div>
          <div className="poster-tag">@{tag}</div>
          <div className="time-since"> · {ts}</div>
        </div>
        <div className="post-text">{text}</div>
        <div className="post-actions">
          <div className="reply-action">
            <FaRegComment className="post-action" />
          </div>
          <div className="retweet-action">
            <AiOutlineRetweet className="post-action" />
          </div>
          <div className="like-action">
            <MdOutlineFavoriteBorder className="post-action" />
          </div>
          <div className="share-action">
            <FiShare className="post-action" />
          </div>
        </div>
      </div>
      <div className="post-options">
        <FaEllipsisH />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <aside id="Navigation">
          <a href="/">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper bird-logo">
                <FaTwitter />
              </div>
            </div>
          </a>
          <a href="/home" className="Active-tab">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaHome />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Home</span>
              </div>
            </div>
          </a>
          <a href="/explore">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaHashtag />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Explore</span>
              </div>
            </div>
          </a>
          <a href="/notis">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaRegBell />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Notifications</span>
              </div>
            </div>
          </a>
          <a href="/dms">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaRegEnvelope />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Messages</span>
              </div>
            </div>
          </a>
          <a href="/profile">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaRegUser />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Profile</span>
              </div>
            </div>
          </a>
          <a href="/new" className="Navigation-tweet-btn-lg">
            <div className="Navigation-tweet-btn-inner">
              <span className="Navigation-tweet-btn-label">Tweet</span>
            </div>
          </a>
          <a href="/new" className="Navigation-tweet-btn-sm">
            <div className="Navigation-tweet-btn-inner">
              <span className="Navigation-tweet-btn-icon">
                <FaRegEdit className="write-icon" />
              </span>
            </div>
          </a>

          <div className="Account-switch-container">
            <div className="Account-switch-wrapper">
              <div className="Account-switch-pfp-container">
                <FaRegUser className="Account-switch-pfp" />
              </div>
              <div className="Account-switch-details-container">
                <div className="Account-switch-details-inner">
                  <div className="Account-switch-name">eddy leon</div>
                  <div className="Account-switch-tag">@eleon479</div>
                </div>
              </div>
              <div className="Account-switch-options">
                <FaEllipsisH style={{ fontWeight: 300 }} />
              </div>
            </div>
          </div>
        </aside>
        <main id="Main">
          <nav>
            <div id="Main-nav-inner">
              <div id="Main-nav-inner-col">
                <div>Home</div>
              </div>
            </div>
          </nav>
          <div className="Post-feed">
            <div id="Write-tweet">
              <div className="pfp-area">
                <FaRegUser className="pfp-icon" />
              </div>
              <div id="Write-tweet-container">
                <div id="Write-tweet-input-wrapper">
                  <textarea
                    id="Write-tweet-input"
                    placeholder={"What's happening?"}
                    maxLength={140}
                  />
                </div>
                <div id="Write-tweet-actions">
                  <div id="Write-tweet-tools">
                    <FaImage className="tool" />
                    <RiFileGifLine className="tool" />
                    <MdOutlinePoll className="tool" />
                    <BiHappyBeaming className="tool" />
                    <MdSchedule className="tool" />
                    <MdOutlineLocationOn className="tool" />
                  </div>
                  <div id="Write-tweet-submit-wrapper">
                    <a href="/send" id="Write-tweet-submit-btn">
                      <div id="Write-tweet-submit-btn-inner">
                        <span id="Write-tweet-submit-btn-label">Tweet</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tweet Feed */}
            {GetTimelineFeed().map((tweet) =>
              MakePost(tweet.name, tweet.tag, tweet.ts, tweet.text)
            )}
          </div>
        </main>
        <aside id="Explore">
          <div id="search-container">
            <div id="search-wrapper">
              <div id="search-icon-wrapper">
                <FaSearch className="input-icon" />
              </div>
              <div id="search-input-wrapper">
                <input
                  id="search-input"
                  placeholder={"Search Twitter"}
                  type={"text"}
                  maxLength={27}
                />
              </div>
            </div>
          </div>
          <div id="explore-container">
            <div id="trending">
              <ul>
                <li>#ByeTwitter</li>
                <li>#GrimesComeBack</li>
                <li>#IllTakePeteDavidson</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;

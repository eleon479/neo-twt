import logo from "./logo.svg";
import "./App.css";
import {
  FaTwitter,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegUser,
  FaHome,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <aside id="Navigation">
          <a href="https://twitter.com">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper bird-logo">
                <FaTwitter />
              </div>
            </div>
          </a>
          <a href="https://twitter.com" className="Active-tab">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaHome />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Home</span>
              </div>
            </div>
          </a>
          <a href="https://twitter.com">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaHashtag />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Explore</span>
              </div>
            </div>
          </a>
          <a href="https://twitter.com">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaRegBell />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Notifications</span>
              </div>
            </div>
          </a>
          <a href="https://twitter.com">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaRegEnvelope />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Message</span>
              </div>
            </div>
          </a>
          <a href="https://twitter.com">
            <div className="Navigation-link-inner">
              <div className="Navigation-icon-wrapper">
                <FaRegUser />
              </div>
              <div className="Navigation-label-wrapper">
                <span>Profile</span>
              </div>
            </div>
          </a>
          <a href="https://twitter.com" className="Navigation-tweet-btn-sm">
            T
          </a>
          <a href="https://twitter.com" className="Navigation-tweet-btn-lg">
            <div className="Navigation-tweet-btn-inner">
              <span className="Navigation-tweet-btn-label">Tweet</span>
            </div>
          </a>
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
                    <FaHashtag className="tool" />
                    <FaRegBell className="tool" />
                    <FaRegUser className="tool" />
                  </div>
                  <div id="Write-tweet-submit-wrapper">
                    <a href="https://twitter.com" id="Write-tweet-submit-btn">
                      <div id="Write-tweet-submit-btn-inner">
                        <span id="Write-tweet-submit-btn-label">Tweet</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="Post">
              <div className="pfp-area">
                <FaRegUser className="pfp-icon" />
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="Post">
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </div>
            <div className="Post">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="Post">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <div className="Post">
              Bibendum neque egestas congue quisque egestas.
            </div>
            <div className="Post">
              Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
              vel. Urna neque viverra justo nec ultrices dui sapien.
            </div>
            <div className="Post">
              Consectetur adipiscing elit pellentesque habitant morbi tristique
              senectus et.
            </div>
            <div className="Post">Post</div>
          </div>
        </main>

        <aside id="Explore">
          <ul>
            <li>#Yes</li>
            <li>#No</li>
            <li>#Maybe</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default App;

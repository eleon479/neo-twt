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
              <div className="Navigation-icon-wrapper">
                <FaTwitter />
              </div>
            </div>
          </a>
          <a href="https://twitter.com">
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
          <a>
            <div className="Navigation-link-inner">
              <button>Tweet</button>
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
            <div className="Post">Post</div>
            <div className="Post">Post</div>
            <div className="Post">Post</div>
            <div className="Post">Post</div>
            <div className="Post">Post</div>
            <div className="Post">Post</div>
            <div className="Post">Post</div>
            <div className="Post">Post</div>
            <div className="Post">Post</div>
            <div className="Post">Post</div>
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

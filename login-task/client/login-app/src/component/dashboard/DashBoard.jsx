import React from "react";
import "./DashBoard.css";
import menuimg from "../../assets/dashboard/menu.png";
import search from "../../assets/dashboard/Icon & Flag Menu.png";
import notiicationimg from "../../assets/dashboard/notification.png";
import messageimg from "../../assets/dashboard/envelope.png";
import photoimg from "../../assets/dashboard/photo.png";
import downarrow from "../../assets/dashboard/chevron down.png";
import phoneimg from "../../assets/dashboard/ic_round-call.png";
import emailpng from "../../assets/dashboard/ic_baseline-mail.png";
import headerimg from "../../assets/dashboard/mdi_sort.png";
const DashBoard = () => {
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="hamburger">
            <img src={menuimg}></img>
          </div>
          <div className="rigtside-nav">
            <img src={search}></img>
            <div className="icon-number">
              <img src={notiicationimg}></img>
              <div className="icon-value">
                <p>3</p>
              </div>
            </div>
            <div className="icon-number">
              <img src={messageimg}></img>
              <div className="icon-value">
                <p>64</p>
              </div>
            </div>
            <div className="admin-content-container">
              <img src={photoimg}></img>
              <div className="admin-content">
                <p>Vishnu Raj</p>
                <p>Admin</p>
              </div>
              <img src={downarrow}></img>
            </div>
          </div>
        </nav>
      </div>
      <table>
        <caption>Marketing Management</caption>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>
              <div className="theader-content">
                <p>NGO Name </p> <img src={headerimg}></img>
              </div>
            </th>
            <th>
              <div className="theader-content">
                <p>Representative Contact</p>
                <img src={headerimg}></img>
              </div>
            </th>
            <th>
              <div className="theader-content">
                <p>Status</p>
                <img src={headerimg}></img>
              </div>
            </th>
            <th>
              <div className="theader-content">
                <p>Assigned RM</p>
                <img src={headerimg}></img>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bhumi foundation</td>
            <td>
              <div className="representative-contact">
                <div>
                  <p>
                    <img src={phoneimg}></img>91 7789775678
                  </p>{" "}
                  <p>
                    <img src={emailpng}></img>Bhumihelp@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td style={{ color: "#34A853" }}>Onboarded</td>
            <td>Rakesh Gupta</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Child right and you</td>
            <td>
              <div className="representative-contact">
                <div>
                  <p>
                    <img src={phoneimg}></img>91 7789775678
                  </p>{" "}
                  <p>
                    <img src={emailpng}></img>Bhumihelp@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td style={{ color: "#29ADB2" }}>In Progress</td>
            <td>Rakesh Gupta</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Smile foundation</td>
            <td>
              <div className="representative-contact">
                <div>
                  <p>
                    <img src={phoneimg}></img>91 7789775678
                  </p>{" "}
                  <p>
                    <img src={emailpng}></img>Bhumihelp@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td style={{ color: "#34A853" }}>Onboarded</td>
            <td>Rakesh Gupta</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Give India foundation</td>
            <td>
              <div className="representative-contact">
                <div>
                  <p>
                    <img src={phoneimg}></img>91 7789775678
                  </p>{" "}
                  <p>
                    <img src={emailpng}></img>Bhumihelp@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td style={{ color: "#29ADB2" }}>In Progress</td>
            <td>Rakesh Gupta</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Goonj</td>
            <td>
              <div className="representative-contact">
                <div>
                  <p>
                    <img src={phoneimg}></img>91 7789775678
                  </p>{" "}
                  <p>
                    <img src={emailpng}></img>Bhumihelp@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td style={{ color: "#29ADB2" }}>In Progress</td>
            <td>Rakesh Gupta</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Care India</td>
            <td>
              <div className="representative-contact">
                <div>
                  <p>
                    <img src={phoneimg}></img>91 7789775678
                  </p>{" "}
                  <p>
                    <img src={emailpng}></img>Bhumihelp@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td style={{ color: "#29ADB2" }}>In Progress</td>
            <td>Rakesh Gupta</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DashBoard;

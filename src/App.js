import React from "react";
import "./App.css";
import { GoBriefcase } from "react-icons/go";
import { PiGraduationCap } from "react-icons/pi";
import { FaEarthAsia } from "react-icons/fa6";
import { LuSnowflake } from "react-icons/lu";
import { IoMdArrowBack } from "react-icons/io";
import { FaFemale, FaMale } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";

const App = () => {
  return (
    <div className="container">
        <div className="TopBar">
          <button className="backIcon"><IoMdArrowBack class="backIconImage"/></button>
          <div className="TravelButtons">
            <button className="MoreAccurateResultButton">Get more accurate results</button>
            <div className="HangoutButtonBorder">
              <button className="HangoutButton">Hangout with like-minded people</button>
            </div>
          </div>
        </div>

        <div className="AvatarContainer">
          <div className="AvatarEncircle">
            <div className="AvatarCircle">
              <img className="AvatarPFP" src="http://192.168.29.31:8080/pfp.png" alt="Profile Pic"/>
            </div>
          </div>
          <div className="AvatarDetails">
            <div className="AvatarNameAge"> 
              <div className="AvatarName">Jennifer,</div> 
              <div className="AvatarAge">22</div>
            </div>
            <div className="AvatarGender">Female</div>
          </div>
        </div>

      <div className="details"> 
        <div className="personDetail">
          <div className="record">
            <div className="label">FIRST NAME</div> 
            <div className="value">Jennifer</div> 
          </div>
          <div className="record">
            <div className="label">LAST NAME</div> 
            <div className="value">Jhon</div> 
          </div>
          <div className="record">
            <div className="label">BIRTHDAY</div> 
            <div className="value">7 May 2005</div> 
          </div>
          <div className="record">
            <div className="label">AGE</div> 
            <div className="value">  
              <div className="text-grey">22</div>
            </div> 
          </div>
          <div className="record">
            <div className="label">GENDER</div> 
            <div className="value">Female</div> 
          </div> 
          <div className="record">
            <div className="label">PHONE</div> 
            <div className="value"> 
              <div className="text-grey">+91 8283016334</div>
            </div> 
          </div>
          <div className="record">
            <div className="label">EMAIL</div> 
            <div className="value">jenni.jhon@gmail.com</div> 
          </div>
        </div>


        <div className="extraPersonDetail">
          <div className="record">
            <FaEarthAsia className='icon'/> 
            <div className="value">San Francisco</div>
          </div>
          <div className="record">
            <PiGraduationCap className='icon'/> 
            <div className="value">Harvard</div>
          </div>
          <div className="record">
            <GoBriefcase className='icon'/> 
            <div className="value">Not yet</div>
          </div>
          <div className="record">
            <LuSnowflake className='icon'/>
            <div className="text-grey">Tell everyone what's the most interesting thing about you</div>
          </div>
        </div>
      </div>

      <div className="interestsContainer">
        <div className="interestTitle">Interests</div>
        <div className="interestsGrid">
          <button className="interestButton">comfortable around people who drink, vape</button>
          <button className="interestButton highlightInterestButton">attachment style: Super glue</button>
          <button className="interestButton">pet free</button>
          <button className="interestButton">Healthy Snacker</button>
          <button className="interestButton highlightInterestButton">Not to be seen in a gym</button>
          <button className="interestButton">Conversation Commander</button>
          <button className="interestButton">expects fun anytime</button>
        </div>
      </div>
    
      <div className="similarPeopleContainer">
        <div className="monotoneText">People</div>
        <div className="gradientText">similar to you</div>
        <div className="changeText">10%</div>
      </div>

      <div className="interestGroups">
        <div className="specificGroup">
          <div className="groupImage">
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img3.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
          </div>
          <div className="groupInfo">
            <div className="matchPercentage">Behavioral (27%)</div>
            <div className="population">
              <div className="popgender">
                <FaFemale className="popIcon"/>
                <div className="popText">1300</div>
              </div>
              <div className="popgender">
                <FaMale className="popIcon"/>
                <div className="popText">2400</div>
              </div>
              <div className="popgender">
                <LiaFlagUsaSolid className="popIcon"/>
                <div className="popText">15</div>
              </div>
            </div>
          </div>
        </div>
        <div className="specificGroup">
          <div className="groupImage">
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img3.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
          </div>
          <div className="groupInfo">
            <div className="matchPercentage">Interests (6%)</div>
            <div className="population">
              <div className="popgender">
                <FaFemale className="popIcon"/>
                <div className="popText">210</div>
              </div>
              <div className="popgender">
                <FaMale className="popIcon"/>
                <div className="popText">1400</div>
              </div>
              <div className="popgender">
                <LiaFlagUsaSolid className="popIcon"/>
                <div className="popText">5</div>
              </div>
            </div>
          </div>
        </div>
        <div className="specificGroup">        
          <div className="groupImage">
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img3.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
          </div>
          <div className="groupInfo">
            <div className="matchPercentage">Values (81%)</div>
            <div className="population">
              <div className="popgender">
                <FaFemale className="popIcon"/>
                <div className="popText">34k</div>
              </div>
              <div className="popgender">
                <FaMale className="popIcon"/>
                <div className="popText">41k</div>
              </div>
              <div className="popgender">
                <LiaFlagUsaSolid className="popIcon"/>
                <div className="popText">1.5k</div>
              </div>
            </div>
          </div>
        </div>
        <div className="specificGroup">
          <div className="groupImage">
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img3.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
          </div>
          <div className="groupInfo">
            <div className="matchPercentage">Extroversion (0.98%)</div>
            <div className="population">
              <div className="popgender">
                <FaFemale className="popIcon"/>
                <div className="popText">31</div>
              </div>
              <div className="popgender">
                <FaMale className="popIcon"/>
                <div className="popText">280</div>
              </div>
            </div>
          </div>
        </div>
        <div className="specificGroup">  
          <div className="groupImage">
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img3.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img2.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><div className="groupPFPImageText">J</div></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img4.png" alt="PFP"/></div>
            <div className="groupPFPCircle"><img className="groupPFPImage" src="http://192.168.29.31:8080/pfps/img1.png" alt="PFP"/></div>
          </div>
          <div className="groupInfo">
            <div className="matchPercentage">Extroversion (0.98%)</div>
            <div className="population">
              <div className="popgender">
                <FaFemale className="popIcon"/>
                <div className="popText">31</div>
              </div>
              <div className="popgender">
                <FaMale className="popIcon"/>
                <div className="popText">280</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;

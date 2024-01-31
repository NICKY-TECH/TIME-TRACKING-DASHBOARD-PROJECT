import "../styles/destination.css";
import { avatar, data1, data2 } from "../../index";
import Cards from "./../components/Card";
import { useState } from "react";

function Dashboard() {
  const [selected, setSelected] = useState("weekly");
  function updateSelected(select) {
    select.preventDefault()
  setSelected(()=>{
    return (select.target.innerHTML).toLowerCase()
  })
  }
  return (
 <section className="main-section">
     <main>
      <aside>
        <section className="aside-section">
          <div className="avatar">
            <img src={avatar} alt="user-profile-image" className="" />
          </div>
          <div className="sub-text">
            <p className="first-card-text">Report for</p>
            <h1 className="second-card-text">
              Jeremy
              <br /> Robson
            </h1>
          </div>
        </section>
        <ul className="link">
          <li onClick={(e)=>{
            updateSelected(e)
          }}>
            <a href="">Daily</a>
          </li>
          <li onClick={(e)=>{
            updateSelected(e)
          }}>
            <a href="">Weekly</a>
          </li>
          <li onClick={(e)=>{
            updateSelected(e)
          }}>
            <a href="">Monthly</a>
          </li>
        </ul>
      </aside>
      <article>
        <div className="top-section">
          {data1.map((item,index) => {
return(
  <Cards img={item.img} title={item.title} key={index} heading={item.timeframes[selected]?.current} subHead={item.timeframes[selected]?.previous}/>
)
          })}
        </div>
        <div className="bottom-section">
        {data2.map((item,index) => {
return(
  <Cards img={item.img} title={item.title} key={index} heading={item.timeframes[selected]?.current} subHead={item.timeframes[selected]?.previous}/>
)
          })}
        </div>
      </article>
    </main>
    <footer>   Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/NICKY-TECH">JUSTINA</a></footer>
 </section>
  );
}

export default Dashboard;

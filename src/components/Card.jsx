import "../styles/destination.css";
import classNames from 'classnames';


function Cards({title,heading,subHead}) {
  return (
    <div className={classNames("background-wrapper bg-no-repeat bg-right-top",{" bg-Work bg-brand-work":title==="Work"},{"bg-Play bg-brand-play":title==="Play"},{
      "bg-brand-study bg-Study":title==="Study"
    },{
      "bg-Exercise bg-brand-exercise":title==="Exercise"
    },{
      "bg-Social bg-brand-social":title==="Social"
    },{
      "bg-Self-Care bg-brand-selfCare":title==="Self Care"
    }
    )} >   
      <div className="card-content">
    <div className="title-section">

<p className="">{title}</p>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

    </div>
    <div className="more-details">
    <h2 className="hours">
{heading}
    </h2>
 <div>
<div className="sub-head">
<p>Last Week - {subHead}hrs</p>
</div>
 </div>

    </div>
      </div>
    </div>
  );
}

export default Cards;

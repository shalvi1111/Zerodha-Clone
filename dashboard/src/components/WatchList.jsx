import React , {useState , useContext} from "react";
import {watchlist} from "../data/data" ;

import {Tooltip , Grow} from "@mui/material";
// import {KeyBoardArrowUp , KeyBoardArrowDown} from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GeneralContext from "./GeneralContext";

//  import axios from "axios";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map( ( stock , index)=>{
          return (
         <WatchListItem stock= {stock} key ={index} />)
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock})=>{
  const [showWatchListActions , setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e)=>{
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e)=>{
    setShowWatchListActions(false);
  }

  return( 
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" :"up"} >{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? 
          (<KeyboardArrowDownIcon className="down" />   ) :
          (<KeyboardArrowUpIcon className="down" />)
        }
        <span className="price" >{stock.price}</span>

        </div>
      </div>
      {showWatchListActions && <WatchListActions uuid={stock.name} />}
    </li>
  );
} ;

const WatchListActions = ({uid}) =>{
  
  const generalContext = useContext(GeneralContext);
  
//   const handleBuyClick = () => {
//     axios.post("http://localhost:3000/newOrder")
// // , {
// //       name: uid,
// //       qty: qty,
// //       price: stockPrice,
// //       mode: "BUY",
// //       curr:curr,
// //     });
//     generalContext.closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     generalContext.closeBuyWindow();
//   };


  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return( 

    <span className="actions">
       <span>
        <Tooltip
        title="Buy (B)" placement="top" arrow TransitionComponent={Grow}  onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="Sell (s)" arrow placement="top" TransitionComponent={Grow} >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip title="Analytics (A)" arrow placement="top" TransitionComponent={Grow} >
          <button className="action">
            <BarChartIcon className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="more (M)" arrow placement="top" TransitionComponent={Grow} >
         <button className="action">
          <MoreHorizIcon className="icon"/>
         </button>
        </Tooltip>
       </span>
    </span>
    )
}

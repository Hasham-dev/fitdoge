import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import steps from "./steps.css";
import ScrollParallax from "../../../components/ScrollParallax";


const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Roadmap</h2>
          <div className={styles.info}>
              This Roadmap is a breathing document that lays out key milestones the community aims to hit to continue rapid and decentralized development and moonlike features!
          </div>
        </div>
        <div className="roadmap_section">
            <div className="roadmap_block">
                <div className="line_box_1 active_line"></div>
                <div className="common_step step_box_1 active_step">
                    <div className="mobile_common_line moblie_line_1"></div>
                    <div className="step_number">01</div>
                    <div className="common_step_box">
                      <div className="inner_step_box">
                        <span className="circle_point"></span>
                        <span className="top_arrow"></span>
                        <ul>
                            <li>1,000 Holders</li>
                            <li>list Website Launch</li>
                            <li>list CoinGecko Listing</li>
                            <li>list 2,000 Telegram Members</li>
                            <li>list PooCoin/Bscscan Ads</li>
                            <li>list Marketing Campaign</li>
                            <li>list CoinMarketCap Listing</li>
                            <li>list 5,000 Holders</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="common_step step_box_2">
                    <div className="mobile_common_line moblie_line_1"></div>
                    <div className="step_number">02</div>
                    <div className="common_step_box">
                      <div className="inner_step_box">
                        <span className="circle_point"></span>
                        <span className="top_arrow"></span>
                        <ul>
                            <li>1,000 Holders</li>
                            <li>list Website Launch</li>
                            <li>list CoinGecko Listing</li>
                            <li>list 2,000 Telegram Members</li>
                            <li>list PooCoin/Bscscan Ads</li>
                            <li>list Marketing Campaign</li>
                            <li>list CoinMarketCap Listing</li>
                            <li>list 5,000 Holders</li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
            <div className="roadmap_block">
                <div className="line_box_2"></div>
                <div className="common_step step_box_3">
                    <div className="mobile_common_line moblie_line_1"></div>
                    <div className="step_number">03</div>
                    <div className="common_step_box">

                      <div className="inner_step_box">
                        <span className="circle_point"></span>
                        <span className="top_arrow"></span>
                        <ul>
                            <li>1,000 Holders</li>
                            <li>list Website Launch</li>
                            <li>list CoinGecko Listing</li>
                            <li>list 2,000 Telegram Members</li>
                            <li>list PooCoin/Bscscan Ads</li>
                            <li>list Marketing Campaign</li>
                            <li>list CoinMarketCap Listing</li>
                            <li>list 5,000 Holders</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="common_step step_box_4">
                    <div className="mobile_common_line moblie_line_1"></div>
                    <div className="step_number">04</div>
                    <div className="common_step_box">

                      <div className="inner_step_box">
                        <span className="circle_point"></span>
                        <span className="top_arrow"></span>
                        <ul>
                            <li>1,000 Holders</li>
                            <li>list Website Launch</li>
                            <li>list CoinGecko Listing</li>
                            <li>list 2,000 Telegram Members</li>
                            <li>list PooCoin/Bscscan Ads</li>
                            <li>list Marketing Campaign</li>
                            <li>list CoinMarketCap Listing</li>
                            <li>list 5,000 Holders</li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;

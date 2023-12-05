import "./Right.css";
import { motion } from "framer-motion";
import Accordion from "./components/Accordion/Accordion";
import Navbar from "./components/Navbar/Navbar";
import useAuth from "./hooks/useAuth";
import infoPic from "./img/info.png";
import { useLocation } from "react-router-dom";

function Right() {
  const { auth } = useAuth();
  const { pathname } = useLocation();

  return (
    <div className="Right">
      <Navbar />
      {!pathname.includes("homepage") && (
        <>
          <h1 className="companyInfoTitle">公司簡介</h1>

          <motion.section
            className="breifIntro"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <p>
                海碩集團成立於1981年，承攬海空物流運輸集裝專業，迄今全球已有五十一家分公司，每年貨運量近三十萬箱貨櫃、亞洲北美洲航線市占率超過百分之四以上，版圖橫跨亞洲、美洲、歐洲，提供客戶完整的全球運輸網路系統服務。
              </p>
              <br />
              <p>
                海碩集團貨櫃量是全球泛太平洋航線裝載量排名第二大，以及通過中國商務部核准合法的一級貨運代理，全球千位客服人員秉持著專業及高效率的服務精神，為客戶量身訂做全方位服務。
              </p>
            </div>

            <img src={infoPic} alt="" width="500px" height="300px" />
          </motion.section>
        </>
      )}

      {auth?.accessToken && pathname.includes("homepage") && (
        <>
          <h2 className="companyInfoTitle">Logged in 簡介</h2>
          <motion.section
            className="companyInfo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              <span>
                <small>
                  <strong>[關懷分享 放眼國際]</strong>
                  <br />
                  實現全球市場之海空航運企業為策略客戶，以雲端科技導入運用於貨物運輸管理服務客戶平台，透過優化流程，提升企業競爭力及企業實質收益。
                </small>
              </span>
            </p>
            <p>
              <span>
                <small>
                  <strong> [團隊分工 以人為本]</strong>
                  <br />
                  團隊之間樂於溝通，並建立開放式跨部門合作集思廣益，發揮以人為本之精神，樂於接受多方意見。
                </small>
              </span>
            </p>
            <p>
              <span>
                <small>
                  <strong> [客戶導向 永續經營]</strong>
                  <br />
                  以客戶產業整體資源為導向，將數位化技術服務導入計畫，設定短中長期目標，並搭配各項專案策略逐步實行，期許達到永續經營理念，並提升客戶黏著度。
                </small>
              </span>
            </p>
            <p>
              <span>
                <small>
                  <strong>[多元挑戰 變中求進]</strong>
                  <br />
                  同仁在工作任務的多元挑戰下，能持續相互交流，不斷成長。營造多元工作環境；深信好的人才能為公司創造價值，將每位同仁視為公司重要資產，齊力維持，並期許吸引更多優秀人才加入團隊。
                </small>
              </span>
            </p>
          </motion.section>
          <Accordion />
        </>
      )}
    </div>
  );
}

export default Right;

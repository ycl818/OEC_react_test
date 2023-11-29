import "./Right.css";
import Accordion from "./components/Accordion/Accordion";

function Right() {
  return (
    <div className="Right">
      <section className="companyInfo">
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
      </section>
      <Accordion />
    </div>
  );
}

export default Right;

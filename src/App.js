import "./App.css";
import BaiTapThucHanhLayout from "./Components/BaiTapThucHanhLayout/BaiTapThucHanhLayout";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import DemoCSS from "./Components/Styles/DemoCSS";
import BaiTapLayout1 from "./Components/BaiTapLayout1/BaiTapLayout1";
import Databinding from "./Components/Databinding/Databinding";
import BaiTapState from "./Components/States/BaiTapState";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapLayoutMap from "./RenderWithMap/BaiTapLayoutMap";
import DanhSachSanPham from "./Components/Props/DemoProps/DanhSachSanPham";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout1 /> */}
      {/* <Databinding /> */}
      {/* <BaiTapThucHanhLayout /> */}
      {/* <DemoCSS /> */}
      {/* <HandleEvent /> */}
      <BaiTapState />
      {/* <RenderWithMap /> */}
      {/* <BaiTapLayoutMap /> */}
      {/* <DanhSachSanPham /> */}
    </div>
  );
}

export default App;

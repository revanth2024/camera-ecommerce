import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./App.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 5 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", margin: "auto", maxWidth: 1200 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
        >
          <Tab label="Zoom Camera" {...a11yProps(0)} />
          <Tab label="Wide-Angle Camera" {...a11yProps(1)} />
          <Tab label="Laser Range Finder" {...a11yProps(2)} />
          <Tab label="NIR Auxiliary Light" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className="tabcontent">
        <div className="d-lg-flex align-items-center gap-5 justify-content-center ">
          <img
            src={require("./images/tab1.jpg")}
            className="img-fluid"
            alt="tab1"
          />
          <div className="side-content">
            <h4>Zoom Camera</h4>
            <ul>
              <li>Up to 34× Optical Zoom‌ and 400× Digital Zoom</li>
              <li>40MP 1/1.8-inch CMOS Sensor</li>
              <li>Video Resolution: Max 3840×2160@30fps</li>
            </ul>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="tabcontent">
        <div className="d-lg-flex align-items-center gap-5 justify-content-center">
          <img
            src={require("./images/tab2.jpg")}
            className="img-fluid"
            alt="tab2"
          />
          <div className="side-content">
            <h4>Wide-Angle Camera</h4>
            <ul>
              <li>Equivalent Focal Length: 24mm, DFOV: 82.1°</li>
              <li>48MP 1/1.3-inch CMOS Sensor</li>
              <li>Video Resolution: Max 3840×2160@30fps</li>
            </ul>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className="tabcontent">
        <div className="d-lg-flex align-items-center gap-5 justify-content-center">
          <img
            src={require("./images/tab3.jpg")}
            className="img-fluid"
            alt="tab3"
          />
          <div className="side-content">
            <h4>Laser Range Finder</h4>
            <ul>
              <li>Measurement Range: 3-3000 m</li>
              <li>Measurement Accuracy: ≤ 500 m:</li>
              <li>±(0.2 m+measurement distance×0.15%)‌ </li>
            </ul>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3} className="tabcontent">
        <div className="d-lg-flex align-items-center gap-5 justify-content-center">
          <img
            src={require("./images/tab4.jpg")}
            className="img-fluid"
            alt="tab4"
          />
          <div className="side-content">
            <h4>NIR Auxiliary Light</h4>
            <ul>
              <li>Measurement Range: 3-3000 m</li>
              <li>FOV: 4.6±0.6° (Round)</li>
              <li>Safety rating: Class 1</li>
            </ul>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}

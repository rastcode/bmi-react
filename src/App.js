import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Gender from "./components/gender/Gender";
import Sliders from "./components/sliders/Slider";
import dataContext from "./contexts/DataContext";
import { useState } from "react";
import { Box, Modal } from "@mui/material";
import ModalBox from "./components/modal/ModalBox";
import pic from "./assets/pic.png";

const App = () => {
  const [age, setAge] = useState(20);
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(160);
  const [gender, setGender] = useState();
  const [bmi, setBmi] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modal, setModal] = useState();

  const calculateHandlerer = () => {
    let heigh = height / 100;
    let bmii = Math.round(weight / (heigh * heigh));
    setBmi(bmii);

    if (bmii <= 18) {
      setModal(`Your Bmi is ${bmii} you are To Light`);
    } else if (bmii > 18 && bmii <= 25) {
      setModal(`Your Bmi is ${bmii} you are Normal`);
    } else if (bmii > 25 && bmii <= 30) {
      setModal(`Your Bmi is ${bmii} you are Fat`);
    } else if (bmii > 30) {
      setModal(`Your Bmi is ${bmii} you are To Fat`);
    }
    handleOpen();
  };

  return (
    <div>
      <dataContext.Provider
        value={{
          age,
          setAge,
          weight,
          setWeight,
          height,
          setHeight,
          gender,
          setGender,
          modal,
        }}
      >
        <div className="navbar-plus">
          <div className="nav">
            <h3>BMI Calculator</h3>
          </div>
        </div>
        <div className="main-container">
          <div className="pic-container">
            <img src={pic} alt="1233" />
          </div>
          <div className="box-container">
            <div className="container">
              <Gender />
              <Sliders />
              <Button
                size="large"
                sx={{
                  color: "white",
                  bgcolor: "teal",
                }}
                variant="contained"
                disableElevation
                onClick={calculateHandlerer}
              >
                Calculate
              </Button>
            </div>
          </div>
        </div>
        <Modal open={open} onClose={handleClose} aria-labelledby="jijiib">
          <Box className="box-modal">
            <ModalBox id="jijiib" />
          </Box>
        </Modal>
      </dataContext.Provider>
    </div>
  );
};

export default App;

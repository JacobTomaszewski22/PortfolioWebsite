import LinearProgress from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface MyCareerInterface {
  value: number;
}

function ApplyConfettyFcn() {
  const end = Date.now() + 1 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
  const frame = () => {
    if (Date.now() > end) return;
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });
    requestAnimationFrame(frame);
  };
  frame();
}

export default function MyCareer(props: MyCareerInterface) {
  const [journeyText, SetJourneyText] = useState(
    "Scroll to reveal my journey...",
  );
  const [applyEffect, SetApplyEffect] = useState(false);
  const [stateOfCareer, SetStateOfCareer] = useState(0);

  useEffect(() => {
    if (props.value < 5 && props.value > 0) {
      SetJourneyText("Scroll to reveal my journey...");
      SetStateOfCareer(0);
    } else if (props.value >= 5 && props.value < 20) {
      SetJourneyText(
        "I graduated from The University of Reading in Biomedical Engineering, attaining a First",
      );
      if (stateOfCareer != 1) {
        SetStateOfCareer(1);
        ApplyConfettyFcn();
      }
    } else if (props.value >= 20 && props.value < 40) {
      SetJourneyText(
        "I then worked as a researcher at the University of Reading",
      );
      if (stateOfCareer != 2) {
        SetStateOfCareer(2);
      }
    } else if (props.value >= 40 && props.value < 60) {
      SetJourneyText(
        "I got a scholarship to Imperial to study MSc Human and Biological Robotics (Merit)",
      );
      if (stateOfCareer != 3) {
        SetStateOfCareer(3);
        ApplyConfettyFcn();
      }
    } else if (props.value >= 60 && props.value < 80) {
      SetJourneyText("I worked at Disguise Ltd. as Hardware Product Engineer");
      if (stateOfCareer != 4) {
        SetStateOfCareer(4);
      }
    } else if (props.value >= 80 && props.value < 90) {
      SetJourneyText("I am currently interning at Performantic Ltd.");
      if (stateOfCareer != 5) {
        SetStateOfCareer(5);
      }
    }
  }, [props.value]);

  return (
    <div className="border rounded-md border-[#00FFFF] bg-[#0C0A09] p-2 w-100/100 h-100/100">
      <div className="flex flex-col justify-between m-2">
        <p className="text-stone-50 pr-6">{journeyText}</p>
        <LinearProgress
          className={`mt-10`}
          variant="determinate"
          value={props.value}
        />
      </div>
    </div>
  );
}

//sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: " #0C0A09", border: 2, borderColor:"#00FFFF", padding: 2, width:"100%", height:"100%"}}

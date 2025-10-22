import { useEffect, useState } from 'react';
import ImageWithLoading from './../ui/ImageWithLoading'
import { useScrollLock } from './../hooks/use-scroll-lock';
import MyCareer from "./MyCareer"
import PreviousWebsites from './PreviousWebsites';


function animationListenerDisappearOnEnd(event){
    switch (event.type) {
      case "animationend":
        this.classList.add("invisible");
        break;
    }
  }

function animationListenerAppearOnStart(event){
    switch (event.type) {
      case "animationstart":
        this.classList.remove("invisible");
        break;
    }
  }
  
function MakeInvisibleAndVisible(allClassNames: Array<string>, makeVisibleString: string){
  
    for(let arrayElement of allClassNames){
      const textElements = Array.from(document.getElementsByClassName(`${arrayElement}`) as HTMLCollectionOf<HTMLElement>)
      for(let textElement of textElements){
        if(makeVisibleString == arrayElement){
          textElement.removeEventListener("animationend", animationListenerDisappearOnEnd);
          textElement.style.animationName = "my-fade-in";
          textElement.classList.remove("invisible");
          // textElement.classList.add("animate-ping");
        }else{
          if(!textElement.classList.contains("invisible")){
            textElement.addEventListener("animationend", animationListenerDisappearOnEnd);
          textElement.style.animationName = "my-fade-out";
          }
          
        }
      }
    }
  }

export default function Intro() {
    const [scrolling, setScrolling] = useState(0);
    const { isLocked, lock, unlock } = useScrollLock({
      autoLock: false,
    });
    const [isInCareer, setIsInCareer] = useState(false);
    const ClassNamesOfInvisibleTexts = 
    ['Cover-Text-1', 
      'Cover-Text-2', 
      'Cover-Text-3', 
      'Cover-Text-4', 
      "Cover-Text-5",
      "MyImage",
      "Cover-Text-6",
      "Cover-Text-7",
      "My-Progress",
      "Pages-Made",
      "Previous-Websites"
    ];
  
    //Scroll event to capture the scroll wheel without page scrolling
    function scrollEvent(event){
    //   event?.preventDefault();
      if(!isInCareer){
        setScrolling( scrolling + event.deltaY);
      }else{
        setScrolling( scrolling + (event.deltaY)/10);
      }
      
    }
  
    const handleLock = () => {
      lock();
    };
  
    const handleUnlock = () => {
      unlock();
    };
  
    document.onwheel = scrollEvent;
    
    
    //Managing scrolling making things invisible and not
    for(let i = 0; i<= ClassNamesOfInvisibleTexts.length - 1; i++){
      if(scrolling >= 500 * i && scrolling < 500 * (i+1)){
        MakeInvisibleAndVisible(ClassNamesOfInvisibleTexts, ClassNamesOfInvisibleTexts[i])
      }
    }
  
    // if(scrolling >= 0 && !isLocked){ handleLock()}
    // if(scrolling < (ClassNamesOfInvisibleTexts.length*500) && isLocked){ handleUnlock()}
    if(scrolling >= 4000 && scrolling < 4500 && isInCareer == false){
      setIsInCareer(true);
    }else if((scrolling < 4000 || scrolling >= 4500) && isInCareer == true){
      setIsInCareer(false);
    }
  
    console.log(`Overall Scrolling: ${scrolling}`)
    return (
      <>
      <div className='text-5xl text-stone-50'>
          {if()}
          <div className = "absolute top-49/100 left-50/100 translate-[-50%] flex flex-col text-center content-center">
            <h1 className={`animationDefaults ${ClassNamesOfInvisibleTexts[0]} text-6xl animate-fade-in `}>Hi! 👋</h1>
            <p className={`animationDefaults ${ClassNamesOfInvisibleTexts[0]} animate-fade-in`}>(scroll)</p>
          </div>
          <p className={`animationDefaults ${ClassNamesOfInvisibleTexts[1]}  invisible absolute top-46/100 left-50/100 translate-[-50%]`}>I'm Jake</p>
          <p className={`animationDefaults ${ClassNamesOfInvisibleTexts[2]} invisible absolute top-46/100 left-50/100 translate-[-50%]`}>A Junior Web Developer</p>
          <p className={`animationDefaults ${ClassNamesOfInvisibleTexts[3]} invisible absolute top-46/100 left-50/100 translate-[-50%]`}>Welcome to my website</p>
          <p className={`animationDefaults ${ClassNamesOfInvisibleTexts[4]} invisible absolute top-46/100 left-50/100 translate-[-50%]`}>This is me</p>
          <div className={`${ClassNamesOfInvisibleTexts[5]} animationDefaults m-0 absolute top-46/100 left-50/100 translate-[-50%] invisible`}>
            <ImageWithLoading className="MyImage" PathToImage="/images/me.JPEG" InnerImageProps={`w-100 h-150 object-scale-down rounded-2xl ${ClassNamesOfInvisibleTexts[5]}`}/>
          </div>
          <p className={`animationDefaults ${ClassNamesOfInvisibleTexts[6]} invisible absolute top-46/100 left-50/100 translate-[-50%]`}>Pleased to meet you</p>
          <p className={`animationDefaults ${ClassNamesOfInvisibleTexts[7]} invisible absolute top-46/100 left-50/100 translate-[-50%]`}>This is my career so far:</p>
          <div className = {`animationDefaults ${ClassNamesOfInvisibleTexts[8]} absolute top-46/100 left-50/100 translate-[-50%] invisible w-80/100`}>
            <MyCareer value={(((scrolling-4000)/500)*100)>100? 100: (((scrolling-4000)/500)*100)}/>
          </div>
          <p className={`animationDefaults ${ClassNamesOfInvisibleTexts[9]} invisible absolute top-46/100 left-50/100 translate-[-50%]`}>Here are some pages I have made:</p>
          {/* <div className={`animationDefaults ${ClassNamesOfInvisibleTexts[8]} absolute top-46/100 left-50/100 translate-[-50%] invisible w-80/100`}>
            <PreviousWebsites/>
          </div> */}
          
      </div>
      </>
    )
  }


  // <div className='MyImage animationDefaults m-0'>
    // <ImageWithLoading className="MyImage" PathToImage="/images/me.JPEG" InnerImageProps='w-100 h-150 object-scale-down rounded-2xl MyImage'/>
  // </div> 	#00FFFF

  // <div className = "MyText animationDefaults  p-10 ml-20 text-center content-center rounded-2xl box shadow-lg shadow-cyan-500/50"></div>

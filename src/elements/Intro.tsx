import { useEffect, useState } from 'react';
import ImageWithLoading from './../ui/ImageWithLoading'
import { Container } from '@mui/material';
import { useScrollLock } from './../hooks/use-scroll-lock';


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
          textElement.addEventListener("animationend", animationListenerDisappearOnEnd);
          textElement.style.animationName = "my-fade-out";
          // textElement.classList.add("invisible");
          
        }
      }
    }
  }

export default function Intro() {
    const [scrolling, setScrolling] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const { isLocked, lock, unlock } = useScrollLock({
      autoLock: false,
    });
    const ClassNamesOfInvisibleTexts = ['Cover-Text-1', 'Cover-Text-2', 'Cover-Text-3', 'Cover-Text-4'];
  
    //Scroll event to capture the scroll wheel without page scrolling
    function scrollEvent(event){
    //   event?.preventDefault();
      setScrolling( scrolling + event.deltaY);
    }
  
    const handleLock = () => {
      lock();
    };
  
    const handleUnlock = () => {
      unlock();
    };
  
    document.onwheel = scrollEvent;
    
    
    //Managing scrolling making things invisible and not
    if(scrolling < 500){
      MakeInvisibleAndVisible(ClassNamesOfInvisibleTexts, 'Cover-Text-1')
    }else if(scrolling >= 500 && scrolling < 1000){
      MakeInvisibleAndVisible(ClassNamesOfInvisibleTexts, 'Cover-Text-2')
    }else if(scrolling >= 1000 && scrolling < 1500){
      MakeInvisibleAndVisible(ClassNamesOfInvisibleTexts, 'Cover-Text-3')
    }else if(scrolling >= 1500 && scrolling < 2000){
      MakeInvisibleAndVisible(ClassNamesOfInvisibleTexts, 'Cover-Text-4')
    }
    
    if(scrolling >= 2500 && isVisible){
        //animate to slide out
        const imageElement = Array.from(document.getElementsByClassName(`MyImage`) as HTMLCollectionOf<HTMLElement>)[0]
        const textElement = Array.from(document.getElementsByClassName(`MyText`) as HTMLCollectionOf<HTMLElement>)[0]
        imageElement.addEventListener("animationend", animationListenerDisappearOnEnd);
        textElement.addEventListener("animationend", animationListenerDisappearOnEnd);
        imageElement.style.animationName = "my-slide-out-left";
        textElement.style.animationName = "my-slide-out-right";
        setIsVisible(false);
    }else if(scrolling < 2500 && !isVisible){
        //animate to slide in
        const imageElement = Array.from(document.getElementsByClassName(`MyImage`) as HTMLCollectionOf<HTMLElement>)[0]
        const textElement = Array.from(document.getElementsByClassName(`MyText`) as HTMLCollectionOf<HTMLElement>)[0]
        imageElement.addEventListener("animationstart", animationListenerDisappearOnEnd);
        textElement.addEventListener("animationstart", animationListenerDisappearOnEnd);
        imageElement.style.animationName = "my-slide-in-left";
        textElement.style.animationName = "my-slide-in-right";
        setIsVisible(true);
    }
  
    if(scrolling <= 0 && !isLocked){ handleLock()}
    if(scrolling > 2500 && isLocked){ handleUnlock()}
  
    return (
      <>
      <div className="flex gap-1 justify-center p-6 justify-items-center">
        <div className='MyImage animationDefaults m-0'>
          <ImageWithLoading className="MyImage" PathToImage="/images/me.JPEG" InnerImageProps='w-100 h-150 object-scale-down rounded-2xl MyImage'/>
        </div>
        <div className = "MyText animationDefaults text-stone-50 bg-stone-900 flex flex-col gap-5 justify-around p-10 ml-20 text-center content-center rounded-2xl box shadow-lg shadow-cyan-500/50">
          <div>
            <h1 className="animationDefaults Cover-Text-1 text-6xl animate-fade-in">Hi! 👋</h1>
            <p className="animationDefaults Cover-Text-1 animate-fade-in">(scroll)</p>
          </div>
          <p className="animationDefaults Cover-Text-2 text-5xl invisible">I'm Jake</p>
          <p className="animationDefaults Cover-Text-3 text-5xl invisible">A Junior Web Developer</p>
          <p className="animationDefaults Cover-Text-4 text-5xl invisible">Welcome to my website</p>
        </div>
      </div>
      </>
    )
  }
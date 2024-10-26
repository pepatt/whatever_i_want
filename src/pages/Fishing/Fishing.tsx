import { useState } from 'react';
import { Link } from 'react-router-dom'

function fishing() {

    function giveRandom(range: number): number {
        return Math.floor(Math.random() * range);
    }

    const [count, setCount] = useState<number>(0)
    const [toggle, setToggle] = useState<boolean>(false)
    let intervalId: number;
    let secondIntervalId: number;

    function castRod() {
        const randNum: number = giveRandom(10);
        setCount(randNum);
        setToggle(false);

        clearInterval(intervalId);

        intervalId = setInterval(() => {
            setCount((prevCount) => {
                if(prevCount <= 1 ) {
                    clearInterval(intervalId);
                    setToggle(true)
                    qte()
                    return 0;
                }
                return prevCount - 1;
            })
        }, 1000);
    }

    function qte(): void {
        setCount(3)
        clearInterval(secondIntervalId);
        secondIntervalId = setInterval(() => {
            setCount((prevCount) => {
                if(prevCount <= 1 ) {
                    clearInterval(secondIntervalId);
                    setToggle(false); 
                    return 0;
                }
                return prevCount - 1; 
            })
        }, 1000)
    }

    function qteConfirm(): void {
        console.log("wow fish omg")
        setToggle(false);

        // setCount(3)
        // secondIntervalId = setInterval(() => {
        //     setCount((prevCount) => {
        //         if(prevCount <= 1 ) {
        //             clearInterval(secondIntervalId);
        //             setToggle(false); 
        //             return 0;
        //         }
        //         return prevCount - 1; 
        //     })
        // }, 1000)
    }


  return (
    <div>
        <Link to = "/" >Home</Link>
        <div onClick={castRod}>CLICK TO CAST ROD</div>
        <div>{count}</div>
        {toggle && <div onClick={qteConfirm}>WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</div>}
    </div>
  )
}

export default fishing
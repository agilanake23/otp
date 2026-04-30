
import react,{useState} from 'react';

function App() {
    const [otp, setotp]= useState("");

  function submit(){
    const ramdomotp =Math.floor(1000 +Math.random()*9000000);
    setotp(ramdomotp);
  }

  function cancle(){
    setotp("");
  }

  return (
    <>
    <div style={{textAlign:"center"}} className='otp'>
      <h1>--OTP Generator--</h1>
      <div class="a">
  <button class="btn btn-primary" type="button" onClick={submit}>Generate OTP</button>  <button class="btn btn-primary" type="button" onClick={cancle}>Clear otp</button>

</div>
      {otp && <h2>Your OTP is : {otp} </h2>}
    </div>
   </>
     
  );
}

export default App;

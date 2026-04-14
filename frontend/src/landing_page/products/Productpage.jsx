import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";
import Hero from "./Hero";
export default function Productpage() {
  return (
    <>
      <Hero />
      <Leftsection
        imageURL="/media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship platform with streaming market data,adavanced charts,an elegant ui,and more.Enjoy the kite experience seamlessly on your Android and IOS devices"
        googlePlay=""
        appstore=""
        tryDemo=""
        learnmore=""
      />
      <Rightsection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your zerodha account.Gain insights into your trades and investments"
        learnmore=""
      />
      <Leftsection
        imageURL="/media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online,commision-free,delivered directly to your Demat account.Enjoy the investment experience on your Android as iOS devices."
        googlePlay=""
        appstore=""
        tryDemo=""
        learnmore=""
      />
      <Rightsection
        imageURL="/media/images./kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.If you are a startup,build our investments app and showcase it to our clientbase."
        learnmore=""
      />
      <Leftsection
        imageURL="/media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp,collection of stock market lessons with in depth coverage and illustrations,Content is broken down into bite-size cards to help you larn on the go."
        googlePlay=""
        appstore=""
        tryDemo=""
        learnmore=""
      />
    <p className="text-center">Want to know more about our technology stack?Check out the Zerodha.tech blog</p>
      <Universe />
    </>
  );
}

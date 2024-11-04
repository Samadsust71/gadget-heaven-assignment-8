import Heading from "./Heading";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
      
        <Heading
          title={"Gadget Heaven"}
          subTitle={
            "Leading the way in cutting-edge technology and innovation."
          }
        />
       <div className="border-b my-6 w-full border-gray-300"></div>
      <div>
      <footer className="footer text-base-content pb-10 lg:space-x-32">
        <nav>
          <h6 className="font-bold text-gray-800 text-[18px]">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-gray-800 text-[18px]">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
          
        </nav>
        <nav>
          <h6 className="font-bold text-gray-800 text-[18px]">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      </div>
    </div>
  );
};

export default Footer;

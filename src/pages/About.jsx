import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const About = () => {

    const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate= useNavigate()

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    
    if (savedEmail) {
      setEmail(savedEmail);
      setIsSubscribed(true);
    }
  }, []);

  const handleSubscribe = () => {
    if (email.trim() === '' || !email.includes('@')) {
      toast.error("Please enter a valid email address.");
      return;
    }

    localStorage.setItem('email', email);
    setIsSubscribed(true);
    toast.success(`Thank you ${email} for subscribing!`);
  };
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleLogOut = ()=>{
    localStorage.removeItem('email')
    navigate('/')
  }
  
  return (
    <>
    
    {
        isSubscribed?
        

        <div className="flex flex-col justify-center items-center py-10 space-y-6">
            <Helmet><title>About Us | | Gadget Heaven</title></Helmet>
        <h1 className="text-4xl">Gadget<span className="text-[#9538E2]">Heaven</span>✨</h1>
        <p className="w-[70%]">GadgetHaven is a modern e-commerce platform dedicated to tech enthusiasts, offering a curated selection of the latest gadgets—from laptops and smartphones to accessories and wearables. Designed with a sleek user interface and smooth navigation, GadgetHaven provides a seamless shopping experience with easy access to product details, a categorized browsing system, and quick access to personalized features like a wishlist and shopping cart. GadgetHaven is the ultimate one-stop shop for tech lovers looking to explore and purchase cutting-edge devices with ease.</p>
        <button onClick={handleLogOut} className="btn text-white bg-[#9538E2] hover:text-[#9538E2]">Log Out</button>
    </div>
     :
    <div className="flex justify-center items-center min-h-[calc(100vh-360px)] bg-[#9538E2] py-20">
        <Helmet><title>Sign Up | | Gadget Heaven</title></Helmet>
    <div className="card bg-base-100  w-[50%] shrink-0 shadow-2xl p-10">
      <div  className="card-body">
        <h3 className="text-[#9538E2] font-bold text-2xl text-center my-6"> Sign Up To Know About Us</h3>
        <div className="form-control">
          <input type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
         className="input input-bordered text-[#9538E2]" required />
        </div>
        <div className="form-control mt-6">
          <button type="submit" onClick={handleSubscribe} className="btn text-white bg-[#9538E2] hover:text-[#9538E2]">Sign Up</button>
        </div>
      </div>
    </div>
    </div> 
    }
    
    </>
  )
}

export default About

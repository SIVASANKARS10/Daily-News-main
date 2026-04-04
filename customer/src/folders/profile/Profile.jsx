import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../frontpage/images.png'
import Image from 'react-bootstrap/esm/Image';
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";



const Profile = () => {

const navigate=useNavigate();
const {id}=useParams('')
const api='https://daily-news-server.onrender.com/news';
const [list,setList]=useState([]);
const [fetchednews,setFetchednews]=useState([])




useEffect(()=>{
  const fetchdata=async ()=>{
    try{
    const res=await axios.get(`${api}/news`);
    setList(res.data)
   
  

    }
    catch(err){
      console.log(err);
    }
  }; fetchdata();
},[api])

useEffect(() => {

  

  const fetchSpecificNews = () => {
    const value = list.find((x) => x._id === id);
  
    setFetchednews(value);
  };

  if (list && list.length > 0 && id) {
    fetchSpecificNews();
  }
}, [list, id]);







  return (


    <>
     <div className="container1"  style={{marginTop:'20px'}}>
        <Image src={logo} alt="Logo" className="image1" 
        onClick={(e)=>{console.log(list)}}/>
        
      </div>


      <div style={{borderBlockEnd:'1px solid'}}>
        <Navbar expand="lg" style={{ marginTop: '2%' }}>
          <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto navi"
                style={{ maxHeight: '100px', marginLeft: '0%' }}
                navbarScroll
              >
                <Nav.Link className="space"
                tyle={{ paddingLeft: '30px', fontWeight:'bold'}}
                 onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                onClick={(e)=>{navigate('/home')}}
                >Home</Nav.Link>
                <Nav.Link href="#action2" className="space" style={{ paddingLeft: '30px', fontWeight:'bold'}}
                 onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                onClick={(e)=>{navigate('/home')}}
                
                >World</Nav.Link>
                <Nav.Link href="#action1" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                 onClick={(e)=>{navigate('/home')}}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Movies</Nav.Link>
                <Nav.Link href="#action2" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                 onClick={(e)=>{navigate('/home')}}
                  onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Sports</Nav.Link>
                <Nav.Link href="#action2" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                 onClick={(e)=>{navigate('/home')}}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Health</Nav.Link>
                <Nav.Link href="#action1" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>{navigate('/home')}}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Opinion</Nav.Link>
                <Nav.Link href="#action2" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>{navigate('/home')}}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Science</Nav.Link>
                <Nav.Link href="#action1" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>{navigate('/home')}}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Business</Nav.Link>
                
              </Nav>
              <Form className="d-flex" style={{ paddingLeft: '20px' }}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-1"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>











<br></br><br></br>
     <div >
  <div style={{ borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
  <div style={{ marginTop: '5px', borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
  <div style={{ marginTop: '5px', borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
</div>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <h1 style={{ color: 'rgb(165, 42, 42)' }}>
    <span style={{ fontWeight: 'bold' }}>{fetchednews.type}</span>
  </h1>
</div>

  <div>
      <div style={{ borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
  <div style={{ marginTop: '5px', borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
   <div style={{ marginTop: '5px', borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
  </div>
       <div
    
      className="modal show"
      style={{ display: 'block', position: 'initial' ,margin:'5%',width:'80%',justifyContent:'center',alignItems:'center',marginLeft:'10%',
           backgroundColor:'#F5F2E8',paddingTop:'40px' 
       }}
    > 
    
        
        
       
      <span>
         <div style={{ borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)',}}></div>
  <div style={{ marginTop: '5px', borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
        <h2 style={{color:'rgb(165, 42, 42)',display:'flex',justifyContent:'center',paddingTop:'20px',paddingLeft:'5%',
          paddingRight:'20px'
        }}
        
>
        {fetchednews.title}</h2><br></br>
         <div  style={{display:'flex',justifyContent:'center'}}>
       <Image src={fetchednews.image} alt="News image"  width={'500px'} height={'390px'}className="image1"  
        onClick={(e)=>{console.log(list)}}
   
/></div><br></br>
      <h3   

  style={{display:'flex',justifyContent:'center',marginLeft:'120px'}}
>{fetchednews.about}</h3><br></br>
      <h4 
      
style={{marginLeft:'150px',marginRight:'150px'}}

>{fetchednews.description}</h4>
    
      </span>
      <div style={{ borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
  <div style={{ marginTop: '5px', borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)',paddingBottom:'40px' }}></div>
 
  
    </div>
    
  
 
       <div style={{ borderTop: '2px solid black',backgroundColor:'black'}}>
          <footer className="bg-gradient-to-r  from-blue-800 to-purple-800 text-white" >
            <div className="container mx-auto px-4 py-8 text-center space-y-8">
              {/* Brand Section */}
              <div>
                <h6 className="text-3xl font-bold mb-1">Daily News</h6>
              
              </div>
         
              <div>
                <h6 className="text-xl font-semibold mb-1">Follow Us</h6>
                <div className="flex justify-center ">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl space-x-4 hover:text-blue-500 transition" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className=" hover:text-blue-400 transition" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl hover:text-pink-500 transition" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
                  </a>
              
         
      
          
              <div className="border-t border-gray-700 pt-2">
                <p className="text-sm">
                  &copy; 2025 Daily News. All rights reserved.
                </p>
              </div>  </div>
                   </div>
            </div>
          </footer>
         </div>

    </>

  )
}

export default Profile
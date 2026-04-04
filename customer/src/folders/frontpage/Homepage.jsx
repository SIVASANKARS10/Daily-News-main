import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import logo from './images.png';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


import axios from 'axios'

function Homepage() {
const api='https://daily-news-server.onrender.com/news';
const [list,setList]=useState([]);
const navigate = useNavigate();
const [headernews,setHeadernews]=useState('News')
const [search,setSearch]=useState()



useEffect(()=>{
  const fetchdata=async ()=>{
    try{
    const res=await axios.get(`${api}/news?sort=timestamp&order=desc`);
    setList(res.data)
  
    }
    catch(err){
      console.log(err);
    }
  }; fetchdata();
},[api])



const homepage=async ()=>{
  setList([]);
  try{
   const res = await axios.get(`${api}/news?timestamp=${new Date().getTime()}`);

    setList(res.data)

  setHeadernews("News")
    }
    catch(err){
      console.log(err);
    }
  
}


const worldmessage=async ()=>{
  setList([]);
  try{
    const res=await axios.get(`${api}/headline`);
    setList(res.data)

   setHeadernews("Headlines")
    }
    catch(err){
      console.log(err);
    }
  
}

const movienews=async ()=>{
  setList([]);
  try{
    const res1=await axios.get(`${api}/movies`);
    setList(res1.data)

  setHeadernews("Entertiment")
    }
    catch(err){
      console.log(err);
    }
  
}


const sportsnews=async ()=>{
  setList([]);
  try{
    const res=await axios.get(`${api}/sports`);
    setList(res.data)

  setHeadernews("Sports")
    }
    catch(err){
      console.log(err);
    }
  
}


const indianews=async ()=>{
  setList([]);
  try{
    const res=await axios.get(`${api}/india`);
    setList(res.data)

  setHeadernews("IndianNews")
    }
    catch(err){
      console.log(err);
    }
  
}


const healthnews=async ()=>{
  setList([]);
  try{
    const res=await axios.get(`${api}/health`);
    setList(res.data)

  setHeadernews("Health")
    }
    catch(err){
      console.log(err);
    }
  
}

const opinionnews=async ()=>{
  setList([]);
  try{
    const res=await axios.get(`${api}/india`);
    setList(res.data)

  setHeadernews("India")
    }
    catch(err){
      console.log(err);
    }
  
}

const sciencenews=async ()=>{
  setList([]);
  try{
    const res=await axios.get(`${api}/science`);
    setList(res.data)

  setHeadernews("Science")
    }
    catch(err){
      console.log(err);
    }
  
}


const businessnews=async ()=>{
  setList([]);
  try{
    const res=await axios.get(`${api}/business`);
    setList(res.data);

  setHeadernews("Business")
    }
    catch(err){
      console.log(err);
    }
  
}



  return (
    <>
  
 <div className="container1"  style={{marginTop:'20px'}}>
 
  <Image src={logo} alt="Logo" className="image1" 
  />

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
                <Nav.Link href='#action2'className="space"
                tyle={{ paddingLeft: '30px', fontWeight:'bold'}}
                 onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                onClick={(e)=>homepage(e)}
                >Home</Nav.Link>
                <Nav.Link href="#action2" className="space" style={{ paddingLeft: '30px', fontWeight:'bold'}}
                 onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                onClick={(e)=>worldmessage(e)}
                
                >World</Nav.Link>
                <Nav.Link href="#action1" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>movienews(e)}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Movies</Nav.Link>
                <Nav.Link href="#action2" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>sportsnews(e)}
                  onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Sports</Nav.Link>
                <Nav.Link href="#action2" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>healthnews(e)}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Health</Nav.Link>
                <Nav.Link href="#action1" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>opinionnews(e)}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >India</Nav.Link>
                <Nav.Link href="#action2" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>sciencenews(e)}
                   onMouseOver={(e) => e.target.style.color = 'brown'}
                onMouseOut={(e) => e.target.style.color = 'initial'}
                >Science</Nav.Link>
                <Nav.Link href="#action1" className="space" style={{ paddingLeft: '30px',fontWeight:'bold' }}
                  onClick={(e)=>businessnews(e)}
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
                  onChange={(e)=>{
                    const value=e.target.value;
                    setSearch(value);
                    const result=list.filter((x)=>
                    x.title.toLowerCase().includes(value.toLocaleLowerCase())
                    );
                    setList(result)
                  }}
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
    <span style={{ fontWeight: 'bold' }}>{headernews}</span>
  </h1>
</div>

  <div>
      <div style={{ borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
  <div style={{ marginTop: '5px', borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
   <div style={{ marginTop: '5px', borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)' }}></div>
  </div>

  <br></br>


<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
 
  }}  
>
  {list.map((x, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
           backgroundColor:'#F5F2E8'
      
      }}className='holographic-card'
    >
      {/* Image Section */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          src={x.image}
          alt="News image"
          width="300px"
          height="200px"
          className="image1"
         onClick={(e) => navigate(`/detail/${x._id}`)}
          onMouseOver={(e) => {
            e.target.style.cursor = 'pointer';
            e.target.style.textDecoration = 'underline';
          }}
          onMouseOut={(e) => {
            e.target.style.textDecoration = 'none';
          }}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          color: 'rgb(165, 42, 42)',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
        onClick={(e) => navigate(`/detail/${x._id}`)}
        onMouseOver={(e) => {
          e.target.style.cursor = 'pointer';
          e.target.style.textDecoration = 'underline';
        }}
        onMouseOut={(e) => {
          e.target.style.textDecoration = 'none';
        }}
      >
        {x.title}
      </h3>

      {/* Type */}
      <h4
        style={{ marginTop: '5px',marginLeft:'2px' }}
         onClick={(e) => navigate(`/detail/${x._id}`)}
        onMouseOver={(e) => {
          e.target.style.cursor = 'pointer';
          e.target.style.textDecoration = 'underline';
        }}
        onMouseOut={(e) => {
          e.target.style.textDecoration = 'none';
        }}
      >
        {x.about}
      </h4>

      {/* ID */}
      <p style={{ marginRight:"75%", marginTop: '5px' }}>{x.date}</p>

      {/* Dividers */}
      <div
        style={{
          borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)',
          width: '100%',
          marginTop: '10px',
        }}
      ></div> <div
        style={{
          borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)',
          width: '100%',
          marginTop: '2px',
        }}
      ></div> <div
        style={{
          borderBlockStart: '1px solid rgba(0, 0, 0, 0.4)',
          width: '100%',
          marginTop: '2px',
        }}
      ></div>
    </div>
  ))}
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
  );
}

export default Homepage;

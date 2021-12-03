import React,{useState} from 'react';
import Typed from 'react-typed';
import './projects.css';
import projects from '../../helpers/projects';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Projects(){
    const [modalShow, setModalShow] = useState(false);
    const [tempData,setTempData]= useState({})

const handleClose = () =>setModalShow(false);

function createModal(data){
    return(
    <Modal
        show={modalShow}
        onHide={()=> setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{data.summary}</p>
                    <image className="img-fluid" src={data.image} style={{maxHeight:"100%"}} id="image"/>
                </Modal.Body>
                <a id="project_modal_link" href={data.link} target="_blank" rel="noreferrer">Go to site</a>
                <Modal.Footer>
                    <div>Technologies used:</div>
                    <p style={{fontSize:'1 rem', marginRight:'auto'}}>{data.tech}</p>
                    <Button type="button"className="btn btn-dark" onClick={()=>setModalShow(false)}>Close</Button>
                </Modal.Footer>
    </Modal>)
}
    const mapped = projects.map((e,idx)=>{
        return(
            <Card key={idx}id="projects_card_container">
                <Image className="projects_image"
                onClick={()=>{ 
                setTempData({
                    image: e.image,
                    link: e.link,
                    title: e.title,
                    summary: e.summary,
                    tech: e.tech
                })
                setModalShow(true)
            }}
            src={e.image}/>
            <div className="projects_click_info">&#x1F50E;&#xFE0E;</div> 
            {createModal(tempData)} 
                   
            </Card>
        );
    })
    return (
        <div className="projects_main_container" id="projects">
            <div className="about">
           <h1 >Projects.</h1> 
           <Typed
                strings={[
                    "",
                    "Government Agency Web Redesign",
                    "Children's Charity Web Redesign",
                    "Plantagochi Plant Watering App",
                    "Covid Safe Travel App",
                    "",
                    "",]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop 
                />
            </div>
           <p>My Github Page. <br/>
           <a href="" target="blank" rel="noreferrer">github.com/kpowell80</a>
           </p>
           <Container fluid ="lg" style={{padding:'2rem 0'}}>
               <Row>
                    {mapped}
               </Row>
           </Container>
        </div>
    )
}

export default Projects
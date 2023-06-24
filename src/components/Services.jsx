import { useState } from 'react';
import '../assets/style/App.css';
import ServiceHelpers from '../helpers/ServicesHelpers';
import Card from 'react-bootstrap/Card';

function Services () {
  const [services, setServices] = useState(ServiceHelpers.services)
  
  let serviceCard = services.map(item => {
    return(
      <Card style={{ width: '18rem' }} key={item.title} className='service-card'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  })
  console.log(services)
  return (
  <div className='services' id='services'>
    {serviceCard}
  </div>
  )
}

export default Services;
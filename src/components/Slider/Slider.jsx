import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./Slider.css"

const Slider = () => {
  const [posts, setPosts] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchData();
    fetchPhoto();
    }, [])
    
    //Отримую дані від jsonplaceholder і зберігаю їх в State
  const fetchData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      .catch((error) => console.error(error));
    const resultJson = await result.json();
    setPosts(resultJson)
  };

    //Отримую фото від jsonplaceholder і зберігаю їх в State

  const fetchPhoto = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/photos')
      .catch((error) => console.error(error));
    const resultJson = await result.json();
    setPhotos(resultJson.slice(0, 101))
    };
    

  return (
    <div className="container">
      <Carousel
        showArrows={true}
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage={33}
        showIndicators={false}
        showThumbs={false}
        selectedItem={10} >
      {posts.map((element, idx) => (
        <Card
          sx={{ maxWidth: 355, height:450 , margin:'75px auto', borderRadius:"10px" }}
          key={idx}
          >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={photos[idx]?.thumbnailUrl}
              alt="green iguana"
            />
            <CardContent sx={{height:"200px"}}>
              <Typography gutterBottom variant="h6" component="div">
                {element.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {element.body}
              </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions sx={{ display:"block", position:"relative"}}   >
          <Button
            className='slider__button'
            variant="text"
            size="small"
            color="primary"
            >
          <Link to={`/post/${element.id}`} style={{ textDecoration: "none", color: '#1d025c'}} >
            Comments
            <ForumIcon style={{fontSize:'15px', marginLeft:'5px'}}  />
          </Link>
          
        </Button>
      </CardActions>
      </Card>
      ))}  
    </Carousel>
    </div>
    
  )
}

export default Slider

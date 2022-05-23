import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Forms from '../Form/Forms';
import Formdata from '../../context'

const Comments = () => {
    const { uuid } = useParams()
    const [comments, setComments]= useState([])

    useEffect(() => {
      fetchData();
    }, [])

    //Отримую коментарі для постів від jsonplaceholder і зберігаю їх в іtate
    const fetchData = async () => {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${uuid}/comments`)
            .catch((error) => console.error(error));
        const resultJson = await result.json();
        setComments(resultJson)
    };

    //Валідація форми відбувається в дочірньому компоненті 'Form', для того щоб отримати
    //дані з форми використано хук useContext
    return (
        <>
            <Formdata.Provider value={{ comments, setComments }} >
            <Forms /> 
            {comments.map((item,idx) => (
                <Box sx={{ minWidth: 275 }}
                key={idx}
                >
                <Card variant="outlined" sx={{margin:"15px", borderRadius: "10px"}} >
                    <CardContent>
                    <Typography variant="h7" component="div">
                        {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.email}
                    </Typography>
                    <Typography variant="body2">
                        {item.body}
                    
                    </Typography>
                </CardContent>    
                </Card>
                </Box>
                
            ))}
        </Formdata.Provider>
        </>
  )
}

export default Comments

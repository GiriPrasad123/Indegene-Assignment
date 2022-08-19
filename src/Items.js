import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Items(props) {
    return(
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={props.data.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.data.type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>         
    )
}
export default Items
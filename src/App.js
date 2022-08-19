import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Items from './Items';
import { Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {

  const arr = [{
    title: "Headphones",
    type: "electronics",
    img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "laptop",
    type: "electronics",
    img: "https://media.istockphoto.com/photos/laptop-with-blank-screen-on-white-picture-id479520746?k=20&m=479520746&s=612x612&w=0&h=vrxDqBMLe1zqcwIFY0f1SdAjKjOKhEno4HtlyKwSHO4="
  },
  {
    title: "smart watch",
    type: "electronics",
    img: "https://cdn5.vectorstock.com/i/1000x1000/85/14/blank-smart-watch-isolated-on-black-background-vector-9958514.jpg"
  }
    , {
    title: "Earphones",
    type: "electronics",
    img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1489124939.30721980.jpg"
  },
  {
    title: "Hard disc",
    type: "electronics",
    img: "https://tse3.mm.bing.net/th?id=OIP.hhT0wrncqEmkIqfbhBYvTwHaHa&pid=Api&P=0"
  },
  {
    title: "The Guest list",
    type: "music",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfb5Z7oGSH5MAK8IbJ1RJ4VZc9vaaE4AQMg&usqp=CAU"
  },
  {
    title: "RW & RB",
    type: "music",
    img: "https://i.insider.com/5e873c73dcd88c2607758a74?width=1000&format=jpeg&auto=webp"
  },
  {
    title: "Afterlife",
    type: "music",
    img: "https://media.glamour.com/photos/5e6a9dc5aa66590008efcd06/master/w_838,h_1178,c_limit/Screen%20Shot%202020-03-12%20at%204.32.23%20PM.png"
  },
  {
    title: "The Last thing ",
    type: "music",
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F12%2F10%2FThe-Last-Thing-He-Told-Me-2000.jpg&q=60"
  },
  {
    title: "One republic",
    type: "books",
    img: "https://westernnews.media.clients.ellingtoncms.com/img/photos/2020/12/29/OneRepublic_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9"
  },
  {
    title: "Devil's Gun",
    type: "books",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNd_hwDncigeIcSp2D4V59PF4n3ux81hCKw&usqp=CAU"
  },
  {
    title: "Danger Doom",
    type: "books",
    img: "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6b2ef062-6913-4a94-a265-7d75f4f91854/64.jpg"
  },
  {
    title: "Ordinary man",
    type: "books",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_53618706.png?auto=format&q=60&fit=max&w=930"
  },
  {
    title: "Purple Moon",
    type: "books",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaALrv2DHcuaIUqgDOeNK_e1ZczmARARX4g&usqp=CAU"
  }
  ]
  const [data, setData] = useState([...arr]);
  const handleClick = (vl) => {

    if (vl === 'all') {
      setData([...arr]);
    } else {
      setData(arr.filter((el) => {
        return el.type === vl;
      }))
    }
  }
  return (
    <div style={{marginTop : '3rem'}}>
      <Container>
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={6} >
            <Grid item xs={3} >
              <div style={{ textAlign : 'center'}}>
                <Button onClick={() => { handleClick('all') }} variant="contained"  >All</Button>
              </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{ textAlign : 'center'}}>
              <Button onClick={() => { handleClick('electronics') }} variant="contained" >Electronics</Button>
              </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{ textAlign : 'center'}}>
              <Button onClick={() => { handleClick('books') }} variant="contained" >Books</Button>
              </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{ textAlign : 'center'}}>
              <Button onClick={() => { handleClick('music') }} variant="contained" >Music</Button>
              </div>
            </Grid>
            {
              data.map((val, i) => {
                return (
                  <Items data={val} />
                )
              })
            }
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
export default App;
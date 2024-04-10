import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Fab } from "@mui/material";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddToCart } from "../components/AddToCart";
import { useParams } from "react-router-dom";
import apiURL from "../api";

const SingleItemPage = ({}) => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${apiURL}/items/${id}`);
        console.log({ response });
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItem();
  }, []);

  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));

  const actions = [
    { icon: <EditIcon />, name: 'Copy' },
    { icon: <EditIcon />, name: 'Save' }
  ]

  return (
    <Stack direction="row" justifyContent="space-between" width="1000px">
      <img width="400px" height="400px" src={item.image} alt={item.name} />
      <Stack direction="column" justifyContent="space-between" width="400px">
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6">Price: ${item.price}</Typography>
        <AddToCart item={item} cartCount={0} />
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<SpeedDialIcon />}
          direction={"up"}
        >
          <SpeedDialAction
            icon={<EditIcon />}
            tooltipTitle="Edit"
          />
          <SpeedDialAction
            icon={<DeleteIcon />}
            tooltipTitle="Delete"
          />
        </StyledSpeedDial>
      </Stack>
    </Stack>
  );
};

export { SingleItemPage };

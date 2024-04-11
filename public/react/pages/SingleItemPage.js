import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Stack, Fab } from "@mui/material";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddToCart } from "../components/AddToCart";
import { useParams } from "react-router-dom";
import { UpdatedItemForm } from "../components/UpdateItemForm";
import { DeleteItemForm } from "../components/DeleteItemForm";
import apiURL from "../api";

const SingleItemPage = ({user}) => {
  console.log({ user });
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

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

  function handleOpenSpeedDial() {
    setSpeedDialOpen(true);
  }
  function handleCloseSpeedDial() {
    setSpeedDialOpen(false);
  }
  function handleOpenUpdate() {
    setOpenUpdate(!openUpdate);
  }
  function handleOpenDelete() {
    setOpenDelete(!openDelete);
  }

  return (
    <>
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
        {openUpdate && (
          <UpdatedItemForm
            open={openUpdate}
            onUpdate={(updatedItem) => {
              setItem(updatedItem);
              setOpenUpdate(false);
            }}
            setOpen={setOpenUpdate}
            item={item}
          />
        )}
        {openDelete && (
          <DeleteItemForm
            open={openDelete}
            onDelete={(deletedItem) => {
              setItem({});
              setOpenDelete(false);
            }}
            setOpen={setOpenDelete}
            item={item}
          />
        )}
        {user && user.isAdmin && (
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<SpeedDialIcon />}
          direction={"up"}
          onClose={handleCloseSpeedDial}
          onOpen={handleOpenSpeedDial}
          open={speedDialOpen}
        >
          <SpeedDialAction
            icon={<EditIcon />}
            tooltipTitle="Edit"
            onClick={handleOpenUpdate}
          />
          <SpeedDialAction
            icon={<DeleteIcon />}
            tooltipTitle="Delete"
            onClick={handleOpenDelete}
          />
        </StyledSpeedDial>
        )}
      </Stack>
    </Stack>
    </>
  );
};

export { SingleItemPage };


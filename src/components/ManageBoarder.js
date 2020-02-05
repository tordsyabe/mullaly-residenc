import React, { Fragment } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider
} from "@material-ui/core";

import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { useContext } from "react";
import { BoarderContext } from "../contexts/BoarderContext";

const ManageBoarders = props => {
  const { boarders } = useContext(BoarderContext);
  console.log(boarders);

  return (
    <div>
      <Paper>
        <List>
          {boarders.map(boarder => (
            <Fragment>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonRoundedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={boarder.name} secondary='Active' />
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='delete'>
                    <DeleteRoundedIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant='inset' component='li' />
            </Fragment>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default ManageBoarders;

import React, { useState } from 'react';
import AvatarDummy from '../../../assets/img/avatar.png';
import github from '../../../assets/img/github.png';
import image10 from '../../../assets/img/image10.png';
import Header from "../../../components/Header";
// import LoginLink from './LoginLink';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Grid, Input, InputAdornment, LinearProgress, TextField, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import { useStyles } from './styles';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 14,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1C348A',
    },
  }))(LinearProgress);


const RegistrationCard = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [contact, setContact] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const classes = useStyles();

    return (
        <Grid className={classes.paddingTop} container>

            <Grid md={3}>
                <Grid container>
                    <Grid md={12}>
                        <Typography className={classes.headingFont}>
                            {props.heading}
                        </Typography>
                        <Typography className={classes.headingTitleFont}>
                            {props.description}
                        </Typography>
                    </Grid>
                    <Grid className={classes.imageGrid} md={12}>
                        <Grid className={classes.imageBack} container>
                            <Grid className={classes.avatarMargin} md={12} >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={props.avatarImage}
                                    className={classes.large}
                                />
                            </Grid>
                            <Grid className={classes.avatarMargin} md={12} >
                            <Typography
                                    className={classes.errPadding}
                                    component="p"
                                    color="error"
                                    variant="body2"
                                    >
                                    {props.imageError}
                                </Typography>
                            </Grid>
                            <Grid className={classes.btnMargin} md={12}>
                                <input
                                    accept="image/*"
                                    className={classes.uploadInput}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={props.uploadImageHandler}
                                />
                                <label htmlFor="contained-button-file">
                                    <div className={classes.uploadButton}>
                                        Upload Image
                            </div>
                                </label>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid md={7}>
                        <Typography className={classes.regFont}>
                            {props.regDateTitle}
                        </Typography>
                    </Grid>
                    <Grid md={5}>
                        <Typography className={classes.regDateFont}>
                            {props.regDate}
                        </Typography>
                    </Grid>
                    <Grid md={12} className={classes.editBtnMargin}>
                        {props.editPassword == true ?
                            <Button className={classes.blueButton} variant="outlined">
                                Edit Password
                        </Button>
                            : ""}
                    </Grid>
                </Grid>
            </Grid>
            <Grid md={5}>
                <Grid container>
                    <Grid md={12}>
                        <Typography className={classes.titleFont}>
                            Personal Information
                        </Typography>
                    </Grid>
                    <Grid md={12}>
                        <Input
                            endAdornment={<InputAdornment position="end">Name</InputAdornment>}
                            className={classes.textField}
                            onChange={props.onChangeName}
                            value={props.name}
                            name={props.inputName}
                        // placeholder="Email"
                        />
                         <Typography
                            className={classes.errPaddingFields}
                            component="p"
                            color="error"
                            variant="body2"
                            >
                            {props.nameErr}
                        </Typography>
                    </Grid>
                    <Grid md={12}>
                        <Input
                        type="date"
                            endAdornment={<InputAdornment position="end">Date of Birth</InputAdornment>}
                            className={classes.textField}
                            onChange={props.onChangeDob}
                            value={props.dob}
                            name={props.inputDob}
                        />
                         <Typography
                            className={classes.errPaddingFields}
                            component="p"
                            color="error"
                            variant="body2"
                            >
                            {props.dobErr}
                        </Typography>
                    </Grid>
                    <Grid md={12}>
                        <Typography className={classes.titleFontContact}>
                            Contact Information
                        </Typography>
                    </Grid>
                    <Grid md={12}>
                        <Input
                            endAdornment={<InputAdornment position="end">Email</InputAdornment>}
                            className={classes.textField}
                            onChange={props.onChangeEmail}
                            value={props.email}
                            name={props.inputEmail}
                        />
                         <Typography
                            className={classes.errPaddingFields}
                            component="p"
                            color="error"
                            variant="body2"
                            >
                            {props.emailErr}
                        </Typography>
                    </Grid>
                    <Grid md={12}>
                    {props.editPassword !== true ?
                        <>
                        <Input
                            endAdornment={<InputAdornment position="end">Password</InputAdornment>}
                            className={classes.textField}
                            type="password"
                            onChange={props.onChangePassword}
                            value={props.password}
                            name={props.inputPassword}
                        />
                         <Typography
                            className={classes.errPaddingFields}
                            component="p"
                            color="error"
                            variant="body2"
                            >
                            {props.passwordErr}
                        </Typography>
                        </>
                        :""}
                        <Input
                            endAdornment={<InputAdornment position="end">Contact No.</InputAdornment>}
                            className={classes.textField}
                            onChange={props.onChangeContact}
                            value={props.contact}
                            name={props.inputContact}
                        />
                         <Typography
                            className={classes.errPaddingFields}
                            component="p"
                            color="error"
                            variant="body2"
                            >
                            {props.contactErr}
                        </Typography>
                        <Input
                            endAdornment={<InputAdornment position="end">Address Line 1</InputAdornment>}
                            className={classes.textField}
                            onChange={props.onChangeAddress1}
                            value={props.address1}
                            name={props.inputAddress1}
                        />
                         <Typography
                            className={classes.errPaddingFields}
                            component="p"
                            color="error"
                            variant="body2"
                            >
                            {props.address1Err}
                        </Typography>
                        <Input
                            endAdornment={<InputAdornment position="end">Address Line 2</InputAdornment>}
                            className={classes.textField}
                            onChange={props.onChangeAddress2}
                            value={props.address2}
                            name={props.inputAddress2}
                        />
                        <Input
                            endAdornment={<InputAdornment position="end">City</InputAdornment>}
                            className={classes.textField}
                            onChange={props.onChangeCity}
                            value={props.city}
                            name={props.inputCity}
                        />
                         <Typography
                            className={classes.errPaddingFields}
                            component="p"
                            color="error"
                            variant="body2"
                            >
                            {props.cityErr}
                        </Typography>
                        <Input
                            endAdornment={<InputAdornment position="end">Country</InputAdornment>}
                            className={classes.textFieldMarginBottom}
                            onChange={props.onChangeCountry}
                            value={props.country}
                            name={props.inputCountry}
                        />
                         <Typography
                            className={classes.errPaddingFields}
                            component="p"
                            color="error"
                            variant="body2"
                            >
                            {props.countryErr}
                        </Typography>
                    </Grid>
                    <Grid className={classes.alignLeft} md={6}>
                        <Button onClick={props.onClickCancel} className={classes.blueButton} variant="outlined">
                            {props.cancelText}
                        </Button>
                    </Grid>
                    <Grid className={classes.alignRight} md={6}>
                        <Button onClick={props.onClickSave} className={classes.whiteButton} variant="outlined">
                            {props.saveText}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid md={3}>
                {props.editPassword == true ?
                <Grid container>
                    <Grid item md={12}>
                        <Typography className={classes.headingTitleFont}>
                            Progress
                        </Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography className={classes.font64}>
                            {props.projectsCount}
                        </Typography>
                    </Grid>
                    <Grid className={classes.projectGrid} item md={4}>
                        <Typography className={classes.font18Bold}>
                            Projects
                        </Typography>
                    </Grid>
                    <Grid className={classes.projectGrid} item md={1}>
                        <Typography className={classes.font26Bold}>
                            |
                        </Typography>
                    </Grid>
                    <Grid className={classes.projectGrid} item md={1}>
                        <Typography className={classes.font18Bold}>
                            {props.pointsCount} 
                        </Typography>
                    </Grid>
                    <Grid className={classes.projectGrid} item md={1}>
                        <Typography className={classes.font18}>
                            points
                        </Typography>
                    </Grid>
                    <Grid className={classes.progressPadding} item md={12}>
                        <BorderLinearProgress variant="determinate" value={props.progressCount} />
                    </Grid>
                    <Grid item md={12}>
                        <Typography className={classes.headingProjectFont}>
                            Projects
                        </Typography>
                    </Grid>
                    <Grid  className={classes.padding24} item md={8}>
                        <Typography className={classes.font24Bold}>
                            - eHealth
                        </Typography>
                        <Typography className={classes.font24Bold}>
                            - Smart City
                        </Typography>
                        <Typography className={classes.font24Bold}>
                            - Smart Agriculture
                        </Typography>
                    </Grid>
                    <Grid className={classes.padding20} item md={4}>
                        <Typography className={classes.font24}>
                            | &nbsp; {props.eHealthCount} projects
                        </Typography>
                        <Typography className={classes.font24}>
                            | &nbsp; {props.cityCount} projects
                        </Typography>
                        <Typography className={classes.font24}>
                            | &nbsp; {props.agricultureCount} projects
                        </Typography>
                    </Grid>
                    <Grid md={12} className={classes.editBtnMargin}>
                        {props.editPassword == true ?
                            <Button className={classes.blueButton} variant="outlined">
                                Project Details
                        </Button>
                            : ""}
                    </Grid>
                </Grid>
                :""}
            </Grid>
        </Grid>
    )
}

export default RegistrationCard;
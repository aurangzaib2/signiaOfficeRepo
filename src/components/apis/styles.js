import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        // color:'#526BC6'
      },
      accordionHeading:{
          "&.MuiAccordionSummary-root":{
              borderRadius:25,
              backgroundColor:'#1C348A',
              color:'#FFFFFF'
          },
          "& .MuiIconButton-root":{
            color:'#FFFFFF'
          },
         
      },
      accordionBackground:{
        '&.MuiAccordion-root.Mui-expanded':{
            backgroundColor:"#384e97"
        },
        '&.MuiAccordion-rounded':{
            backgroundColor:"#384e97",
            margin:20
        }
      },
      accordionTitle:{
            borderRadius:25,
            backgroundColor:'#3E54A0',
            color:'#FFFFFF'
      },
    profileUserImage: {
        height: 60,
        width: 60,
        borderRadius: 360,
        border: "1px solid #27AE60"
    },
    headingFont:{
        color: "#FFFFFF"
        
    },
    headingTitle:{
        fontSize: 22
    }
}));

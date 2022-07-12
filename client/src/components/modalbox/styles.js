import { makeStyles,createStyles } from '@mui/styles'
import { padding } from '@mui/system'
export const Styles = makeStyles((theme) =>createStyles ({
    modalmainwrapper: {
        background: '#fff !important',
        marginTop: '10% !important',
        padding: '1% 3% 3% 3% !important',
        borderRadius: '40px !important',
        [theme.breakpoints.down(600)]: {
           margin:'5% !important',
           padding: '5% !important',
           borderRadius: '15px !important',
        },
    },
    modalmainauctionwrapper:{
        background: '#fff !important',
        marginTop: '1% !important',
        padding: '1% 3% 3% 3% !important',
        borderRadius: '40px !important',
        [theme.breakpoints.down(600)]: {
            margin:'5% !important',
            padding: '5% !important',
            borderRadius: '15px !important',
         },
    },
    buttonmodalbox:{
        borderRadius: '100px !important',
        padding:'5em'
    },
    headergrid:{
        borderBottom: '1px solid rgba(122,122,122,0.15) !important'
    },
    afterheadergrid: {
        padding: '2% 0% 0% 0% !important'
    },
    modalparahead: {
        color: '#232731 !important',
        // fontFamily: 'Roboto !important',
        fontSize: '30px !important',
        fontWeight: 'bold !important',
        [theme.breakpoints.down(600)]: {
            fontSize: '25px !important',
         }, 
    },
    bannerimglast: {
        overflow: 'hidden !important',
        width: '100% !important',
        objectFit:'contain !important',
        borderRadius:'1em'
    },
    bannerimglastgrid: {
        // width: '400px !important',
        // height: '100px !important'
    },
    parainnermodal: {
        color: '#4F5259 !important',
        // fontFamily: 'Roboto !important',
        fontSize: '18px !important',
        fontWeight: '500 !important',
        [theme.breakpoints.down(600)]: {
            fontSize: '14px !important',
         },
    },
    pirceparasecmodal: {
        color: '#16255C !important',
        // fontFamily: 'Roboto !important',
        fontSize: '24px !important',
        fontWeight: '500 !important',
        [theme.breakpoints.down(600)]: {
            fontSize: '18px !important',
         },
    },
    reserveprice: {
        color: '#7C7D83 !important',
        // fontFamily: 'Roboto',
        fontSize: '18px !important',
        fontWeight: '500 !important',
        [theme.breakpoints.down(600)]: {
            fontSize: '14px !important',
         },
    },
    closebtnmodal: {
        fontSize: '20px !important',
        color: '#000 !important',
        marginTop: '-10px !important'
    }
   
}))
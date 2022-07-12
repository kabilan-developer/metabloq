import React, { useState } from "react"
import Select from 'react-select'
import { Grid, Button, Modal, Typography, Switch, FormControlLabel } from '@mui/material'
import { Styles } from './styles'
import './modal.css';

import Price from '../../assets/modal/fixed.png'
import Auction from '../../assets/modal/timed_auction.png'


function Modalbox(props) {
    let {show, setShow,nftsImg} = props;
    const [pricem, setpricem] = useState(false)
    const [auction, setauction] = useState(false)
    const classes = Styles()

    const method = [
        { value: 'BLOQS', label: 'BLOQS', },
    ]
    const days = [
        { value: '3 day', label: '3 Day', },
        { value: '6day', label: '6 Day' },
        { value: '9day', label: '9 Day' }
    ]
    const hours = [
        { value: '3 hour', label: '3 Hour', },
        { value: '6 hour', label: '6 Hour' },
        { value: '9 hour', label: '9 Hour' }
    ]
    const min = [
        { value: '3 min', label: '3 Min', },
        { value: '6 min', label: '6 Min' },
        { value: '9 min', label: '9 Min' }
    ]
    const sec = [
        { value: '3 sec', label: '3 Sec', },
        { value: '6 sec', label: '6 Sec' },
        { value: '9 sec', label: '9 Sec'}
    ]

    return (
        <div>
            <Modal open={show} onClose={() => setShow(false)} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description" sx={{ overflowY: 'scroll' }}>

                <Grid lg={12} md={12} sm={12} xs={12} container justifyContent='center' alignItems='center'>
                    <Grid lg={6} md={6} sm={12} xs={12} container justifyContent='center' alignContent='center' className={classes.modalmainwrapper}>
                        <Grid lg={12} md={12} sm={12} xs={12} direction='row' container justifyContent='space-between' alignContent='center' className={classes.headergrid}>
                            <Typography paragraph className={classes.modalparahead}>List item for sale</Typography>
                            <Button onClick={() => setShow(false)} className={classes.closebtnmodal} >x</Button>
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12} direction='row' container justifyContent='center' alignContent='center' className={classes.afterheadergrid}>
                            <Grid lg={3} md={3} sm={12} xs={12} direction='column' container justifyContent='space-evenly' alignContent='center'>
                                <Grid direction='column' container justifyContent='center' alignContent='center' textAlign='center'>
                                    <Button className={classes.buttonmodalbox} onClick={() => { setpricem(true)
                                         setShow(false) }}><img src={Price} alt='' height={70} width={70}/></Button>
                                    <Typography paragraph className={classes.parainnermodal}>Fixed price</Typography>
                                </Grid>
                                <Grid direction='column' container justifyContent='center' alignContent='center' textAlign='center'>
                                    <Button className={classes.buttonmodalbox} onClick={() => { setauction(true)
                                         setShow(false) }}><img src={Auction} alt='' height={70} width={70}/></Button>
                                    <Typography paragraph className={classes.parainnermodal}>Timed Auction</Typography>
                                </Grid>
                            </Grid>
                            <Grid lg={9} md={9} sm={12} xs={12} direction='column' container justifyContent='center' alignContent='center'>
                                <Grid className={classes.bannerimglastgrid}>
                                    <img src={nftsImg} className={classes.bannerimglast} alt='' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Modal>
            <Modal open={pricem} onClose={() => setpricem(false)} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description" sx={{ overflowY: 'scroll' }}>

                <Grid lg={12} md={12} sm={12} xs={12} container justifyContent='center' alignItems='center'>
                    <Grid lg={6} md={6} sm={12} xs={12} container justifyContent='center' alignContent='center' className={classes.modalmainwrapper}>
                        <Grid lg={12} md={12} sm={12} xs={12} direction='row' container justifyContent='space-between' alignContent='center' sx={{ marginBottom: '25px' }} className={classes.headergrid}>
                            <Typography paragraph className={classes.modalparahead}>Fixed price</Typography>
                            <Button onClick={() => setpricem(false)} className={classes.closebtnmodal} >x</Button>
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12} container justifyContent='center' alignItems='center'>
                            <Grid lg={8} md={8} sm={12} xs={12} container direction='column' justifyContent='center' alignItems='center' sx={{ marginBottom: '25px' }}>
                                <Grid container direction='column' justifyContent='flex-start' textAlign='left'>
                                    <Typography paragraph className={classes.pirceparasecmodal}>Price</Typography>
                                </Grid>
                                <Grid container direction='column' justifyContent='center' textAlign='center'>
                                    {/* <Grid container direction='row' justifyContent='space-between' textAlign='left' className='forinputwithselectbox'>
                                        <input className='inputinnerselect' type='text' placeholder='BLOQS' />
                                        <Select placeholder='ETH' options={options} />
                                    </Grid> */}
                                    <Grid container direction='row' justifyContent='space-between' textAlign='left' className='forinputselectsec'>
                                        <input className='inputinnerselectsec' type='text' placeholder='$0 BLOQS' />
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid lg={8} md={8} sm={8} xs={8} direction='row' container justifyContent='center' textAlign='center' sx={{ marginBottom: '25px' }}>
                                <Grid lg={11} md={11} sm={11} xs={11} container justifyContent='flex-start' textAlign='left'>
                                    <Typography paragraph className={classes.reserveprice}>Include Reserve price</Typography>
                                </Grid>
                                <Grid lg={1} md={1} sm={1} xs={1} container justifyContent='center' textAlign='center' className='switchgrid'>
                                    <FormControlLabel value="start" control={<Switch color="primary" />} />
                                </Grid>
                            </Grid>
                            <Grid lg={8} md={8} sm={8} xs={8} direction='row' container justifyContent='center' textAlign='center'>
                                <button onClick={()=> setpricem(false)} className="metablog_primary-filled-button"><span >List for sale</span></button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Modal>

            <Modal open={auction} onClose={() => setauction(false)} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description" sx={{ overflowY: 'scroll' }}>

                <Grid lg={12} md={12} sm={12} xs={12} container justifyContent='center' alignItems='center'>
                    <Grid lg={6} md={6} sm={12} xs={12} container justifyContent='center' alignContent='center' className={classes.modalmainauctionwrapper}>
                        <Grid lg={12} md={12} sm={12} xs={12} direction='row' container justifyContent='space-between' alignContent='center' sx={{ marginBottom: '25px' }} className={classes.headergrid}>
                            <Typography paragraph className={classes.modalparahead}>Timed Auction</Typography>
                            <Button onClick={() => setauction(false)} className={classes.closebtnmodal} >x</Button>
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12} container justifyContent='center' alignItems='center'>
                            <Grid lg={8} md={8} sm={12} xs={12} container direction='column' justifyContent='center' alignItems='center' sx={{ marginBottom: '25px' }}>
                                <Grid container direction='column' justifyContent='flex-start' textAlign='left'>
                                    <Typography paragraph className={classes.pirceparasecmodal}>Method</Typography>
                                </Grid>
                                <Grid container direction='column' justifyContent='center' textAlign='center'>
                                    <Grid container direction='row' justifyContent='space-between' textAlign='center' className='forinputwithselectboxmethod'>                                       
                                        <Select placeholder='Sell to highest bittter' options={method} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid lg={8} md={8} sm={12} xs={12} container direction='column' justifyContent='center' alignItems='center' sx={{ marginBottom: '25px' }}>
                                <Grid container direction='column' justifyContent='flex-start' textAlign='left'>
                                    <Typography paragraph className={classes.pirceparasecmodal}>Price</Typography>
                                </Grid>
                                <Grid container direction='column' justifyContent='center' textAlign='center'>
                                    {/* <Grid container direction='row' justifyContent='space-between' textAlign='left' className='forinputwithselectbox'>
                                        <input className='inputinnerselect' type='text' placeholder='O Ethereum' />
                                        <Select placeholder='ETH' options={options} />
                                    </Grid> */}
                                    <Grid container direction='row' justifyContent='space-between' textAlign='left' className='forinputselectsec'>
                                        <input className='inputinnerselectsec' type='text' placeholder='$0' />
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid lg={8} md={8} sm={12} xs={12} container direction='column' justifyContent='center' alignItems='center' sx={{ marginBottom: '25px' }}>
                                <Grid container direction='column' justifyContent='flex-start' textAlign='left'>
                                    <Typography paragraph className={classes.pirceparasecmodal}>Duration</Typography>
                                </Grid>
                                <Grid container direction='column' justifyContent='center' textAlign='center'>
                                    <Grid container direction='row' justifyContent='center' textAlign='center' className='fordurationwithselectbox'>
                                        <Select placeholder='0 Day' options={days} />
                                        <Select placeholder='0 Hour'options={hours} />
                                        <Select placeholder='0 Min' options={min} />
                                        <Select placeholder='0 Sec' options={sec} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid lg={8} md={8} sm={8} xs={8} direction='row' container justifyContent='center' textAlign='center' sx={{ marginBottom: '25px' }}>
                                <Grid lg={11} md={11} sm={11} xs={11} container justifyContent='flex-start' textAlign='left'>
                                    <Typography paragraph className={classes.reserveprice}>Include Reserve price</Typography>
                                </Grid>
                                <Grid lg={1} md={1} sm={1} xs={1} container justifyContent='center' textAlign='center' className='switchgrid'>
                                    <FormControlLabel value="start" control={<Switch color="primary" />} />
                                </Grid>
                            </Grid>
                            <Grid lg={8} md={8} sm={8} xs={8} direction='row' container justifyContent='center' textAlign='center'>
                                <button onClick={()=> setauction(false)} className="metablog_primary-filled-button"><span >List for sale</span></button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    )
}

export default Modalbox
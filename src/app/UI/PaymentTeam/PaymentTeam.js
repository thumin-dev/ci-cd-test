import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const PaymentTeam = () => {
    function createData(transactionId,currency, amount, wallet ,customername,  formfillperson, month, screenshot, manychatid, status, email ) {
        return {transactionId ,currency, amount, wallet ,customername,  formfillperson, month, screenshot, manychatid, status, email };
      }

      const [data, setData] = React.useState([])
      
    //   const rows = [

    //     createData(1, 'USD', 1000, 'Main Wallet', 'John Doe', 'Alice Smith', 1, ['screenshot1.png'], '12345', 'Confirmed', 'john.doe@example.com', 'Confirm'),
    //     createData(2, 'EUR', 850, 'Savings Wallet', 'Jane Roe', 'Bob Johnson', 2, ['screenshot1.png', 'screenshot2.png'], '67890', 'Pending', 'jane.roe@example.com', 'Confirm'),
    //     createData(3, 'GBP', 500, 'Travel Wallet', 'Michael Smith', 'Chris Lee', 3, ['screenshot1.png', 'screenshot2.png'], '13579', 'Confirmed', 'michael.smith@example.com', 'Confirm'),
    //     createData(4, 'JPY', 120000, 'Investment Wallet', 'Emily Johnson', 'Sarah Clark', 2, ['screenshot1.png', 'screenshot2.png'], '24680', 'Failed', 'emily.johnson@example.com', 'Retry'),
    //     createData(5, 'CAD', 750, 'Business Wallet', 'Daniel Brown', 'Tom Harris', 1, ['screenshot1.png', 'screenshot2.png'], '98765', 'Confirmed', 'daniel.brown@example.com', 'Confirm'),
    //   ];

      const rows = data.map(row => {

          return  createData(row['TransactionID'], row['CurrencyCode'], row['Amount'],row['WalletName'], row['Name'], row['AWSID'], row['Month'], row['ScreenShots'], row['ManyChatID'], "Pending", row['Email'], 'Confirm')
      })

     console.log(data)
      const handleScreenShotClick = async() => {
        // generate a screenshoturl 

        // open it in another tab
      }

      // for the dialog
      const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleAgree = (row) => {
        console.log(row)

        // set payment check to be 1 
        setOpen(false);
      };

      // get the data
      React.useEffect(() => {

        const requestOptions = {
        method: "GET",
        redirect: "follow"
        };

        fetch("/api/transactions?paymentCheckStatus=0", requestOptions)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.error(error));
      }, [])
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Wallet</TableCell>
              <TableCell align="right">Customer Name</TableCell>
              <TableCell align="right">FormFill Person</TableCell>
              <TableCell align="right">Month</TableCell>
              <TableCell align="right">ScreenShot</TableCell>
              <TableCell align="right">ManyChat ID</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Confirm Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.transactionId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.currency}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.wallet}</TableCell>
                <TableCell align="right">{row.customername}</TableCell>
                <TableCell align="right">{row.formfillperson}</TableCell>
                <TableCell align="right">{row.month}</TableCell>

                <TableCell align="center">
                <ButtonGroup variant="text" aria-label="Basic button group">
        {
            row.screenshot.map(sh => {
                return <Button onClick={handleScreenShotClick} key={sh}>One</Button>
            })
        }
      </ButtonGroup>
                </TableCell>
                <TableCell align="right">{row.manychatid}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                <Button variant="contained" onClick={handleClickOpen}>
                    Confirm
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Are you Sure?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {
                            `Are you sure that you want to confirm this payment: ${row.customername}, ${row.email} with ${row.amount} ${row.currency} for ${row.month} months`
                        }
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={() => handleAgree(row)} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
                </TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
  
  export default PaymentTeam
  
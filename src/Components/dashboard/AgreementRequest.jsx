
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Backdrop, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import UseAxios from '../Hooks/UseAxios';
import swal from 'sweetalert';
import dateTime from 'date-time';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function AgreementRequest() {
  const axiosSecure = UseAxios()

 




    
const { isPending, isError, error, data,refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/rents")
        return res.json()
    }

})
// console.log(data);
 

if (isPending) {
    return <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}

        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </>
}

if (isError) {
    return <span>Error: {error.message}</span>
}

const filter = data.filter(e => e?.Status === "pending")
// console.log(filter);


const Status = "checked"
const Role = "Member"


const AcceptDate = (dateTime());
const update = {Status,AcceptDate}



const hendleAccept =(_id,email,name)=>{
  const UpdateRole = {Role,name}
  // console.log(name);
    axiosSecure.put(`/rents/${_id}`,update)
    .then((res)=>{
        console.log(res);
        axiosSecure.put(`/users/${email}`,UpdateRole)
        .then((res)=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                swal("Thanks!", "You Are Updated !", "success");
                refetch()
            }
            else{
                refetch()
            }

        })


        
        
        
            
           
            
        

        
    })
}

const hendleDelete =(_id)=>{
    
    axiosSecure.delete(`/rents/${_id}`)
    .then((res)=>{
        console.log(res.data);
        if(res.data.deletedCount > 0){
            swal("Thanks!", "You Are Deleted!", "success");
            refetch()
        }

        
    })
}











  return (

    <>
    {
        filter.length > 0 ? <>
        <TableContainer component={Paper}>
      
      
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Floor No</StyledTableCell>
            <StyledTableCell align="right">Block Name</StyledTableCell>
            
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Agreement request date</StyledTableCell>
            <StyledTableCell align="right">Accept</StyledTableCell>
            <StyledTableCell align="right">Reject</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {filter.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="right">{data.email}</StyledTableCell>
              <StyledTableCell align="right">{data.Floor}</StyledTableCell>
              <StyledTableCell align="right">{data.Block}</StyledTableCell>
              
              <StyledTableCell align="right">{data.Title}</StyledTableCell>
              <StyledTableCell align="right">{data.date}</StyledTableCell>
              <StyledTableCell align="right"><button onClick={()=>hendleAccept(data._id,data.email,data.name)} className='btn bg-green-300 hover:bg-green-500 btn-circle'><CheckIcon></CheckIcon></button></StyledTableCell>
              <StyledTableCell align="right"><button onClick={()=>hendleDelete(data._id)} className='btn bg-red-300 hover:bg-red-500 btn-circle'><ClearIcon></ClearIcon></button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
        </> :<>
         
         <div className='flex justify-center items-center'>
         <div>
            <img src="https://i.ibb.co/RT3f8bk/undraw-Server-re-twwj-removebg-preview.png" alt="" />
            <h1 className='text-3xl font-semibold text-center'>No Agreement Request Found !!!</h1>
         </div>
         </div>
        
        </>
      }
    
    </>


    
  );
}









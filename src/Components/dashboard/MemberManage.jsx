
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

import UseAxios from '../Hooks/UseAxios';
import swal from 'sweetalert';

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




export default function MemberManage() {

 
    const axiosSecure = UseAxios()



    
const { isPending, isError, error, data,refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/users",
        
        )
        return res.json()
    }

})

// console.log(data);

const filter = data?.filter(e => e.Role == "Member")
// console.log(filter);


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





const hendleDelete =(_id)=>{
    
    axiosSecure.delete(`/users/${_id}`)
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
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Role</StyledTableCell>
            
            <StyledTableCell >Remove </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {filter?.map((filter) => (
            <StyledTableRow key={filter.name}>
              <StyledTableCell component="th" scope="row">
                {filter.Name}
              </StyledTableCell>
              <StyledTableCell >{filter.Email}</StyledTableCell>
              <StyledTableCell >{filter.Role}</StyledTableCell>
             
              <StyledTableCell ><button onClick={()=>hendleDelete(filter._id)}  className='btn bg-red-300 hover:bg-red-500 btn-circle'><ClearIcon></ClearIcon></button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
        </> :<>
         
         <div className='flex justify-center items-center'>
         <div>
            <img src="https://i.ibb.co/RT3f8bk/undraw-Server-re-twwj-removebg-preview.png" alt="" />
            <h1 className='text-3xl font-semibold text-center'>No Member Found !!!</h1>
         </div>
         </div>
        
        </>
      }
    
    </>


    
  );
}









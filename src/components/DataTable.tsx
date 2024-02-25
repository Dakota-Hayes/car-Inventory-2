import { DataGrid, GridColDef , GridRow} from "@mui/x-data-grid"
import { useState } from "react"
import Modal from "./Modal"
import CarForm from "./CarForm"

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'make',
        headerName: 'Make',
        flex: 1
    },
    {
        field: 'model',
        headerName: 'Model',
        flex: 1
    },
    {
        field: 'year',
        headerName: 'Year',
        flex: 1
    },
    {
        field: 'color',
        headerName: 'Color',
        flex: 1
    },
    {
        field: 'date_created',
        headerName: 'Date Added',
        flex: 2
    },
]

function DataTable() {
    const [isModalOpen,setModalOpen] = useState(false)
    const toggleModalOpen = () => {setModalOpen(!isModalOpen)}

    return (
        <>
            <div>
                <h1>Data Table</h1>
            </div>
            <div>
                { !isModalOpen ? (<button onClick={toggleModalOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Car Form Button</button>):(<><Modal open={isModalOpen} toggleForm={toggleModalOpen} form={<CarForm/>}/></>)}
            </div>
            <div>
{ 
//               <DataGrid rows={carData} columns={columns} pageSizeOptions={[6]} checkboxSelection onSortModelChange={(item : any) => {setSelectionModel(item)}} columnVisibilityModel={{id : false}}/>
}
            </div>
        </>
    )
}

export default DataTable
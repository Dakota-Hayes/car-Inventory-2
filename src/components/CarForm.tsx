import { TextField } from "@mui/material"

function CarForm() {
  return (
    <>
        <div>
            <h1>
                Car Form
            </h1>
        </div>
        <div>
            <TextField placeholder="Make..."></TextField>
        </div>
        <div>
            <TextField placeholder="Model..."></TextField>
        </div>
        <div>
            <TextField placeholder="Year..."></TextField>
        </div>
        <div>
            <TextField placeholder="Color..."></TextField>
        </div>
        <div>
            <button className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Submit</button>
        </div>
    </>
  )
}

export default CarForm
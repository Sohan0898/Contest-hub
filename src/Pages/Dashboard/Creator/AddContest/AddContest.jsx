import { useForm, Controller } from "react-hook-form";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayJs";

const AddContest = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center font-bold text-third">
        Please Add Your Contest
      </h1>

      <div className="text-center w-full mx-auto mt-10 px-4   md:px-12 lg:px-20 bg-gray-200 py-10 rounded-md shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8 mb-8 lg:space-y-0  lg:flex gap-10">
            <Controller
              name="contestName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  label="Contest Name"
                />
              )}
            />

            <Controller
              name="contestPhoto"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  label="Contest Photo"
                />
              )}
            />
          </div>

          <div className=" space-y-8 mb-8 lg:space-y-0  lg:flex gap-10">
            <Controller
              name="contestPrice"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  label="$ Contest Price"
                  type="number"
                />
              )}
            />
            <Controller
              name="prizeMoney"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  label="$ Prize Money"
                  type="number" 
                />
              )}
            />
          </div>

          <div className=" space-y-8  lg:space-y-0  lg:flex gap-10">
            <FormControl variant="filled" fullWidth>
              <InputLabel>Contest Tag</InputLabel>
              <Controller
                name="contestTag"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select {...field} label="Contest Tag">
                    <MenuItem value="Business Contest">
                      Business Contest
                    </MenuItem>
                    <MenuItem value="Medical Contest">Medical Contest</MenuItem>
                    <MenuItem value="Article Writing Contest">
                      Article Writing Contest
                    </MenuItem>
                    <MenuItem value="Gaming Contest">Gaming Contest</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            <Controller
              name="contestDate"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      label="Select Contest Date"
                      renderInput={(props) => <TextField {...props} />}
                    />
                  </LocalizationProvider>
                </FormControl>
              )}
            />
          </div>

          <div className="mt-8">
            <Controller
              name="ContestDescription"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  rows={3}
                  variant="filled"
                  fullWidth
                  label="Contest Description"
                />
              )}
            />
          </div>
          <div className="mt-8">
            <Controller
              name="TaskSubmission"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  rows={3}
                  variant="filled"
                  fullWidth
                  label="Task Submission text instruction"
                />
              )}
            />
          </div>

          <div className="mt-8">
            <Button
              sx={{ background: "#1786F9", fontWeight: 600 }}
              variant="contained"
              type="submit"
              fullWidth
              endIcon={<LibraryAddIcon />}
            >
              Add Contest
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContest;

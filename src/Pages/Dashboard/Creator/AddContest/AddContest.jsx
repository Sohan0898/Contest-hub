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
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AddContest = () => {
  const axiosSecure = useAxiosSecure();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const updateDate = new Date(data.contestDate).toDateString();
    console.log("update Date:", updateDate);

    const contestInfo = {
      name: data.contestName,
      image: data.contestPhoto,
      price: parseFloat(data.contestPrice),
      prize: parseFloat(data.prizeMoney),
      tag: data.contestTag,
      date: updateDate,
      description: data.ContestDescription,
      task: data.TaskSubmission,
    };

    console.log(contestInfo);

    const addedContest = await axiosSecure.post("/contests", contestInfo);
    console.log(addedContest.data);
    if (addedContest.data.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${contestInfo.name
          .split(/\s+/)
          .slice(0, 1)
          .join(" ")}... is added to the Contest.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
                  required
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
                  required
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
                  required
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
                  required
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
                rules={{ required: "Contest Tag is required" }}
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
              {errors.contestTag && (
                <p className="text-red-500 text-start  font-semibold mt-1">
                  {errors.contestTag.message}
                </p>
              )}
            </FormControl>
            <Controller
              name="contestDate"
              control={control}
              rules={{ required: "Contest Date is required" }}
              render={({ field }) => (
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      label="Select Contest Date"
                      slotProps={{ textField: { variant: "filled" } }}
                    />
                  </LocalizationProvider>
                  {errors.contestDate && (
                    <p className="text-red-500 text-start  font-semibold mt-1">
                      {errors.contestDate.message}
                    </p>
                  )}
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
                  required
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
                  required
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

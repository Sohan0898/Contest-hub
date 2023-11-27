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

import "dayjs/locale/en";

import { useLoaderData } from "react-router-dom";
import useImgbbApi from "../../../Hooks/useImgbbApi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import dayjs from "dayjs";
import toast from "react-hot-toast";

const UpdateContest = () => {
  const { name, prize, tag, description, date, image, task, price, _id } =
    useLoaderData();

  const imgbbApi = useImgbbApi();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  dayjs.locale("en");
  const dateObject = dayjs(date);

  const { register, control, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const updateDate = new Date(data.contestDate).toDateString();
    console.log("update Date:", updateDate);

    let imageUrl = image; // Defaultvalue set

    // Check if an image file is selected
    if (data.image && data.image[0]) {
      const imageFile = { image: data.image[0] };

      // Upload the image and get the URL
      const res = await axiosPublic.post(imgbbApi, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      console.log("with image url", res.data);

      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      } else {
        toast.error("Image upload failed");
        console.error("Image upload failed");
      }
    }

    const contestInfo = {
      name: data.contestName,
      image: imageUrl,
      price: parseFloat(data.contestPrice),
      prize: parseFloat(data.prizeMoney),
      tag: data.contestTag,
      date: updateDate,
      description: data.ContestDescription,
      task: data.TaskSubmission,
    };

    console.log(contestInfo);

    const addedContest = await axiosSecure.patch(
      `/contests/${_id}`,
      contestInfo
    );
    console.log(addedContest.data);

    if (addedContest.data.modifiedCount > 0) {
      reset();

      toast.success(
        `${contestInfo.name
          .split(/\s+/)
          .slice(0, 1)
          .join(" ")}... is now updated.`
      );
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
              defaultValue={name}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  label="Contest Name"
                />
              )}
            />

            <input
              {...register("image")}
              type="file"
              className="file-input bg-gray-300   w-full max-w-xl h-[57px] rounded-md rounded-b-none border-x-0 border-t-0  border-b-1  border-third "
            />
          </div>

          <div className=" space-y-8 mb-8 lg:space-y-0  lg:flex gap-10">
            <Controller
              name="contestPrice"
              control={control}
              defaultValue={price}
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
              defaultValue={prize}
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
                defaultValue={tag}
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
              defaultValue={dateObject}
              render={({ field }) => (
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      label="Select Contest Date"
                      slotProps={{ textField: { variant: "filled" } }}
                    />
                  </LocalizationProvider>
                </FormControl>
              )}
            />

            {/* <Controller
              name="contestDate"
              control={control}
              defaultValue={date}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="filled"
                  label="Contest Date"
                  
                />
              )}
            /> */}
          </div>

          <div className="mt-8">
            <Controller
              name="ContestDescription"
              control={control}
              defaultValue={description}
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
              defaultValue={task}
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

export default UpdateContest;

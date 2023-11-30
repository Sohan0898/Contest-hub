import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Chart from "react-google-charts";

export function WinPercentage() {
  const [contestData, setContestData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: participates = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["participates", user?.email],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/participates?email=${user?.email}`);
        return res.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  });

  useEffect(() => {
    if (!isLoading && participates) {
      const totalWins = participates.filter((p) => p.role === "winner").length;
      const totalParticipates = participates.length;
      const winPercentage = (totalWins / totalParticipates) * 100;
      const participatePercentage = 100 - winPercentage;

      const transformedData = [
        ["Contest", "Percentage"],
        ["Wins", winPercentage],
        ["Participates", participatePercentage],
      ];

      if (!arraysAreEqual(contestData, transformedData)) {
        setContestData(transformedData);
      }
    }
  }, [isLoading, participates, contestData]);

  const options = {
    title: "My Win and Participate Status in Contest",
    backgroundColor: "#e5e7eb",
    colors: ["#1786F9", "#e04f4f"],
    chartArea: { width: "100%", height: "80%", padding: "1px" },
    borderRadius: 7,
    legend: { position: "left" },
    tooltip: { trigger: "true" },
    animation: { startup: true, easing: "out", duration: 1000 },
    shadow: {
      enabled: true,
      color: "#000",
      width: 8,
      offsetY: 5,
      opacity: 0.3,
    },
  };

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      style={{
        backgroundColor: "#e5e7eb",
        padding: "4px",
        borderRadius: "8px",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Chart
        chartType="PieChart"
        data={contestData}
        options={options}
        width="80%"
        height="300px"
      />
    </div>
  );
}

function arraysAreEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

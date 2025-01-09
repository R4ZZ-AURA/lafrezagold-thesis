import React from "react";
import CardRow from "../../components/CardRow";
import DashboardTable from "../../components/DashboardTable";
import ConfirmAlert from "../../components/ConfirmAlert";

const Dashboard = () => {
  return (
    <div className="dashboard-section flex flex-col text-gray-900">
      <CardRow />
      <h3 className="mt-6 mb-3 text-lg">Recent Reservations</h3>
      <DashboardTable />
      <ConfirmAlert
        confrmationMessage={
          "Are you sure you want to delete this accommodation?"
        }
      />
    </div>
  );
};

export default Dashboard;

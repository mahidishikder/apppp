import React from 'react';
import { Line } from 'react-chartjs-2'; // Importing Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary chart.js components

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DashboardInfo() {
  // Data for the Line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Growth',
        data: [65, 59, 80, 81, 56, 55], // Sales data
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
      {/* Line Chart */}
      <div className="chart-container">
        <h3 className="text-xl font-semibold mb-4">Sales Growth Over Time</h3>
        <Line data={data} />
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Total Users</h4>
          <p className="text-3xl">1,234</p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Revenue</h4>
          <p className="text-3xl">$12,345</p>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Orders</h4>
          <p className="text-3xl">678</p>
        </div>
      </div>

      {/* More Stats */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Other Key Metrics</h4>
        <ul className="space-y-2">
          <li>New Sign-ups: 150</li>
          <li>Active Users: 1,100</li>
          <li>Pending Orders: 50</li>
          <li>Total Products Sold: 4,500</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardInfo;

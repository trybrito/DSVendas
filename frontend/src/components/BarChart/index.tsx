import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
  name: string;
  data: Array<number>
}

type ChartData = {
  labels: {
    categories: Array<string>;
  },
  series: Array<SeriesData>
}

export default function BarChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  });

  const options = {
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then(response => {
      const data = response.data as Array<SaleSuccess>
      const myLabels = data.map(x => x.sellerName)
      const mySeries = data.map(x => round(x.deals / x.visited * 100.0, 1))

      setChartData({
        labels: {
          categories: myLabels
        },
        series: [
          {
            name: "% Sucesso",
            data: mySeries
          }
        ]
      });
    });
  }, []);

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height={240}
    />
  );
}

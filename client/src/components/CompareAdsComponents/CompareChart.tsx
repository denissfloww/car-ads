import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { UserCompareAd } from '../../interfaces/UserCompareAd';

interface ChartProps {
  userComparedAds: UserCompareAd[];
}

interface ChartValues {
  car: string;
  price: number;
}

const CompareChart = (props: ChartProps) => {
  const { userComparedAds } = props;
  const chartValues: ChartValues[] = [];
  userComparedAds.map((comparedAd, index) => {
    chartValues.push({
      car: `${comparedAd.ad.modification.model.brand.name} ${comparedAd.ad.modification.model.name}`,
      price: comparedAd.ad.price,
    });
  });

  return (
    <BarChart
      width={500}
      height={300}
      data={chartValues}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='car' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='price' name={'Цена'} fill='#8884d8' />
    </BarChart>
  );
};

export default CompareChart;

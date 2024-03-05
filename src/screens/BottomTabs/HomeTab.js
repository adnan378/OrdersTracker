import { View, Text,TouchableOpacity, screenWidth,ScrollView } from 'react-native'
import React from 'react'
import PieChartForData from '../../components/PieChartForDAta'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
//import { ScrollView } from 'react-native-gesture-handler';

export default function HomeTab() {
  const handlePress = () => {
    console.log('Button pressed');
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset:false// optional
  };
  const chartConfig1= {
    backgroundGradientFrom: '#eeeeee',//'#ff0000', // Start color (red)
    backgroundGradientTo: '#eeeeee',//'#ff0000',   // End color (red)
    color: (opacity = 1) => `rgba(55, 71, 79, ${opacity})`, // Bar color (blue)
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    
  };
  const chartConfig2 = {
    backgroundGradientFrom: '#eeeeee', // Start color (black)
    backgroundGradientTo: '#eeeeee',   // End color (black)
    color: (opacity = 1) => `rgba(55, 71, 79, ${opacity})`, // Data color (black)
    strokeWidth: 16, // Width of the chart's lines
    barPercentage: 0.5,
    
  };
  const data2 = {
    labels: ["Orders", "Pending", "Delivered"], // optional
    data: [0.4, 0.6, 0.8]
  };
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June","July","Aug","Sept","Oct","Nov","Dec"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43,32,17,70,10,28,60]
      }
    ]
  };
  const data = [
    {
      name: "Piezometer",
      population: 21500000,
      color: "#37474f",
      legendFontColor: "#37474f",
      legendFontSize: 14
    },
    {
      name: "CEMS",
      population: 2800000,
      color: "#91a3b0",
      legendFontColor: "#91a3b0",
      legendFontSize: 14
    },
    {
      name: "AQMS",
      population: 5527612,
      color: "#7F7F7F",
      legendFontColor: "#7F7F7F",
      legendFontSize: 14
    },
    {
      name: "Flow Meter",
      population: 8538000,
      color: "#56707c",
      legendFontColor: "#56707c",
      legendFontSize: 14
    },
    {
      name: "Water Analyzer",
      population: 11920000,
      color: "#555d50",
      legendFontColor: "#555d50",
      legendFontSize: 14
    }
  ];
  return (
    <ScrollView >
      <View style={{flex:1,backgroundColor:'#eeeeee',}} >
      <PieChart
  data={data}
 // width={screenWidth}
 width={420}
  height={250}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"5"}
  center={[30,5]}
  hasLegend={true}
  
  //absolute
/>
<BarChart
  //style={{}}
  data={data1}
  width={400}
  height={220}
  yAxisLabel="$"
  chartConfig={chartConfig1}
  //verticalLabelRotation={10}
  
/>
<ProgressChart
  data={data2}
  width={360}
  height={200}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig2}
  hideLegend={false}
  
/>
      </View>
    
      
      
    {/* <View>
      <PieChartForData/>
    </View> */}
  
</ScrollView>
  
// <View>
// <PieChartForData/>
   
//     </View>
  )
}
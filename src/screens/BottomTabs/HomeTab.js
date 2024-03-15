import { View, Text,TouchableOpacity, screenWidth,ScrollView } from 'react-native'
import React from 'react'
import {colors} from '../../assets/colors'
import PieChartForData from '../../components/PieChartForDAta'
import {Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
//import { ScrollView } from 'react-native-gesture-handler';
//const windowWidth = Dimensions.get('window').width;
export default function HomeTab() {
  
  const windowWidth = Dimensions.get('window').width;
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
    backgroundGradientFrom: 'white',//'#ff0000', // Start color (red)
    backgroundGradientTo: 'white',//'#ff0000',   // End color (red)
    //color: (opacity = 1) => `rgba(55, 71, 79, ${opacity})`, // Bar color (blue)
    //color: () => 'blue',
    color: (opacity = 1) => `rgba(39,97,76, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    
  };
  const chartConfig2 = {
    
    backgroundGradientFrom: 'white', // Start color (black)
    backgroundGradientTo: 'white',   // End color (black)
   // color: (opacity = 1) => `rgba(55, 71, 79, ${opacity})`, // Data color (black)
    color: (opacity = 0.7) => `rgba(39,97,76, ${opacity})`,
    strokeWidth: 16, // Width of the chart's lines
    barPercentage: 0.5,
    
    
  };
  const data2 = {
    labels: ["Delivered", "Pending", "Order"], // optional
    data: [0.4, 0.6, 0.8]
  };
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","July","Aug","Sep","Oct","Nov","Dec"],
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
      color: "#9C5C5C",
      legendFontColor: "#9C5C5C",
      legendFontSize: 14
    },
    {
      name: "CEMS",
      population: 2800000,
      color: "#C7B777",
      legendFontColor: "#C7B777",
      legendFontSize: 14
    },
    {
      name: "AQMS",
      population: 5527612,
      color: "#537EFF",
      legendFontColor: "#537EFF",
      legendFontSize: 14
    },
    {
      name: "Flow Meter",
      population: 8538000,
      color: "#6AAA92",
      legendFontColor: "#6AAA92",
      legendFontSize: 14
    },
    {
      name: "Water Analyzer",
      population: 11920000,
      color: "#27614C",
      legendFontColor: "#27614C",
      legendFontSize: 14
    }
  ];
  return (
    <ScrollView >
      <View style={{flex:1,backgroundColor:'#E9EFE5',paddingBottom:70,}} >
        <View style={{marginTop:14,}}>
        <View style={{alignItems:'center',backgroundColor:colors.primary,height:50,justifyContent:'center',borderRadius:10,marginHorizontal:14}}>
          
            <Text style={{fontSize:20,color:'white',fontWeight:'500'}}>Product Distribution</Text>
            </View>
        </View>
     <View style={{backgroundColor:'white',borderRadius:10,margin:14,}}>
      <PieChart
  data={data}
 // width={screenWidth}
 width={windowWidth-30}
  height={230}
  chartConfig={chartConfig}
  accessor={"population"} 
  backgroundColor={"transparent"}
  paddingLeft={"-10"}
  center={[20,2]}
  hasLegend={true}
  
  //absolute
/>
</View>
<View style={{}}>
        <View style={{alignItems:'center',backgroundColor:colors.primary,height:50,justifyContent:'center',borderRadius:10,marginHorizontal:14}}>
          
            <Text style={{fontSize:20,color:'white',fontWeight:'500'}}>Monthly Sales</Text>
            </View>
        </View>
<View style={{backgroundColor:'white',borderRadius:10,margin:14,}}>
<BarChart
  style={{marginVertical:10,}}
  data={data1}
  width={windowWidth-40}
  height={220}
  
  //paddingLeft={"10"}
  //paddingRight={"10"}
  yAxisLabel="$"
  chartConfig={chartConfig1}
  //verticalLabelRotation={10}
/>
</View >
<View style={{}}>
        <View style={{alignItems:'center',backgroundColor:colors.primary,height:50,justifyContent:'center',borderRadius:10,marginHorizontal:14}}>
          
            <Text style={{fontSize:20,color:'white',fontWeight:'500'}}>Orders Distribution</Text>
            </View>
        </View>
<View style={{backgroundColor:'white',borderRadius:14,margin:14}}>
<ProgressChart
  data={data2}
  style={{marginVertical:10,marginRight:-20,}}
  width={windowWidth-60}
  height={220}
  //marginLeft={"-10"}
  strokeWidth={18} 
  radius={25}
  chartConfig={chartConfig2}
  hideLegend={false}
  
/>
</View>
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
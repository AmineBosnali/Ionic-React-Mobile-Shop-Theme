import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

/* Components */
import Banner from "../components/theme/Banner";
import Footer from "../components/theme/Footer";

ChartJS.register(...registerables, ChartDataLabels);

const Charts: React.FC = () => {
  const getStyleVariable = (variableName: string) => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();
  };


  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "#ba7703",
        borderColor: "#5e0101",
        borderWidth: 1,
        hoverBackgroundColor: "#5e0101",
        hoverBorderColor: "#5e0101",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Temperature",
        fill: true,
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#ba7703",
        borderColor: "#5e0101",
        borderCapStyle: "butt" as CanvasLineCap,
        borderDash: [] as number[],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter" as CanvasLineJoin,
        pointBorderColor: "#ba7703",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#ba7703",
        pointHoverBorderColor: "#5e0101",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#ba7703", "#2f4600", "#900000"],
        hoverBackgroundColor: ["#5e0101", "#2f4600", "#900000"],
      },
    ],
  };

  return (
    <>
      <Banner label="Charts" subLabel="You can see all charts" />
      <IonContent fullscreen>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle className="chartTitle">Bar Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Bar
              data={barData}
              options={{
                plugins: {
                  datalabels: {
                    color: "#fff",
                    display: true,
                    font: {
                      weight: "bold",
                    },
                  },
                },
                animation: {
                  duration: 2000,
                },
              }}
            />
          </IonCardContent>
        </IonCard>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle className="chartTitle">Line Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Line
              data={lineData}
              options={{
                plugins: {
                  datalabels: {
                    color: "#fff",
                    display: true,
                    font: {
                      weight: "bold",
                    },
                  },
                },
                animation: {
                  duration: 2000,
                },
              }}
            />
          </IonCardContent>
        </IonCard>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle className="chartTitle">Pie Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Pie
              data={pieData}
              options={{
                plugins: {
                  datalabels: {
                    color: "#fff",
                    display: true,
                    font: {
                      weight: "bold",
                    },
                  },
                },
                animation: {
                  duration: 2000,
                },
              }}
            />
          </IonCardContent>
        </IonCard>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle className="chartTitle">Doughnut Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Doughnut
              data={pieData}
              options={{
                plugins: {
                  datalabels: {
                    color: "#fff",
                    display: true,
                    font: {
                      weight: "bold",
                    },
                  },
                },
                animation: {
                  duration: 3000,
                },
              }}
            />
          </IonCardContent>
        </IonCard>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle className="chartTitle">Radar Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Radar
              data={pieData}
              options={{
                plugins: {
                  datalabels: {
                    color: "#fff",
                    display: true,
                    font: {
                      weight: "bold",
                    },
                  },
                },
                animation: {
                  duration: 2000,
                },
              }}
            />
          </IonCardContent>
        </IonCard>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle className="chartTitle">Polar Area Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <PolarArea
              data={pieData}
              options={{
                plugins: {
                  datalabels: {
                    color: "#fff",
                    display: true,
                    font: {
                      weight: "bold",
                    },
                  },
                },
                animation: {
                  duration: 2000,
                },
              }}
            />
          </IonCardContent>
        </IonCard>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle className="chartTitle">Bubble Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Bubble
              data={{
                datasets: [
                  {
                    label: "Bubble Chart",
                    data: [
                      { x: 20, y: 30, r: 15 },
                      { x: 40, y: 10, r: 10 },
                    ],
                    backgroundColor: "#900000",
                    borderColor: "#2f4600",
                  },
                ],
              }}
              options={{
                plugins: {
                  datalabels: {
                    color: "#fff",
                    display: true,
                    font: {
                      weight: "bold",
                    },
                  },
                },
                animation: {
                  duration: 2000,
                },
              }}
            />
          </IonCardContent>
        </IonCard>
        <IonCard className="cardThree">
          <IonCardHeader>
            <IonCardTitle className="chartTitle">Scatter Chart</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Scatter
              data={{
                datasets: [
                  {
                    label: "Scatter Chart",
                    data: [
                      { x: 20, y: 30 },
                      { x: 40, y: 10 },
                    ],
                    backgroundColor: "#ba7703",
                    borderColor: "#2f4600",
                  },
                ],
              }}
              options={{
                plugins: {
                  datalabels: {
                    color: "#fff",
                    display: true,
                    font: {
                      weight: "bold",
                    },
                  },
                },
                animation: {
                  duration: 3000,
                },
              }}
            />
          </IonCardContent>
        </IonCard>
        <Footer />
      </IonContent>
    </>
  );
};

export default Charts;